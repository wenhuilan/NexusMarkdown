'use client';

import { 
  backgroundImage, 
  enableBackground, 
  backgroundMode, 
  backgroundFixed
} from '@/setting/WebSetting';
import { useTheme } from 'next-themes';
import { useEffect, useState, useMemo } from 'react';

/**
 * 网站背景组件
 * 使用 CSS background-image 在最底层显示背景图片
 * 在暗黑模式下添加黑色滤镜效果
 * 优化移动端性能，减少重绘和重排
 */
export default function BackgroundLayer() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 检测移动端设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 确保组件在客户端挂载后再渲染，避免主题不匹配
  useEffect(() => {
    setMounted(true);
  }, []);

  // 移动端禁用背景图片以提高性能
  const shouldShowBackground = useMemo(() => {
    if (!enableBackground || !backgroundImage || !mounted) {
      return false;
    }
    
    // 移动端禁用复杂背景以提高性能
    if (isMobile && backgroundMode === 'cover') {
      return false;
    }
    
    return true;
  }, [enableBackground, backgroundImage, mounted, isMobile, backgroundMode]);

  if (!shouldShowBackground) {
    return null;
  }

  // 处理 basePath，确保在不同环境下都能正确加载图片
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const fullImagePath = `${basePath}${backgroundImage}`;

  // 判断是否为暗黑模式
  const isDark = resolvedTheme === 'dark';

  // 移动端优化：使用更简单的背景设置
  const backgroundStyle = useMemo(() => {
    const baseStyle = {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -50,
      pointerEvents: 'none' as const,
      willChange: 'auto' as const, // 优化性能
      transform: 'translateZ(0)' as const, // 启用硬件加速
    };

    if (isMobile) {
      // 移动端使用更简单的背景设置
      return {
        ...baseStyle,
        backgroundImage: isDark 
          ? `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${fullImagePath}")`
          : `url("${fullImagePath}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll', // 移动端禁用 fixed
      };
    }

    // 桌面端完整功能
    return {
      ...baseStyle,
      backgroundImage: isDark 
        ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${fullImagePath}")`
        : `url("${fullImagePath}")`,
      backgroundSize: backgroundMode === 'cover' ? 'cover' : backgroundMode === 'contain' ? 'contain' : 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: backgroundFixed ? 'fixed' : 'scroll',
    };
  }, [fullImagePath, isDark, isMobile, backgroundMode, backgroundFixed]);

  return (
    <div
      style={backgroundStyle}
      aria-hidden="true"
    />
  );
}