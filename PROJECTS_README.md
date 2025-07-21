# 项目展示功能说明

## 功能概述

项目展示功能包含以下页面和功能：

### 1. 项目列表页面 (`/projects`)
- **分类筛选**: 支持按前端开发、全栈应用、移动端、Web应用等分类筛选
- **项目卡片**: 展示项目基本信息、标签、统计信息
- **响应式设计**: 完美适配桌面端和移动端
- **性能优化**: 移动端性能优化，减少卡顿

### 2. 项目详情页面 (`/projects/[slug]`)
- **项目介绍**: 详细的项目描述和技术栈说明
- **效果图展示**: 项目界面截图展示
- **功能特性**: 项目主要功能列表
- **技术挑战**: 开发过程中遇到的技术挑战
- **解决方案**: 对应的解决方案和实现方法

### 3. 效果图展示页面 (`/projects/[slug]/screenshots`)
- **图片画廊**: 项目效果图的网格展示
- **图片查看器**: 点击放大查看，支持左右切换
- **缩略图导航**: 快速跳转到指定图片

## 当前展示项目

### 精选项目
1. **QG 软件升级助手平台** - 面向工业软件的综合性升级管理平台
2. **DocCollab 协同富文本编辑器** - 基于 React + NestJS 的协同知识库系统
3. **AI Chat Assistant** - 基于 OpenAI API 的智能聊天助手

### 移动端项目
4. **出租车大数据可视化系统** - 云端大数据可视化平台
5. **招新小程序** - 基于微信小程序的招新管理系统

### 前端项目
6. **差分隐私分布式AI系统** - 基于差分隐私的分布式人工智能系统
7. **E-commerce Dashboard** - 电商管理后台系统
8. **Task Management App** - 任务管理应用
9. **Weather Forecast** - 天气查询应用
10. **Portfolio Website** - 个人作品集网站

### 全栈项目
11. **工业软件解决方案** - 面向工业领域的综合性软件平台

## 项目数据结构

```typescript
interface Project {
  id: number;
  slug: string;                    // URL 标识符
  title: string;                   // 项目标题
  description: string;             // 简短描述
  fullDescription: string;         // 详细描述（Markdown格式）
  image: string;                   // 项目封面图
  category: string;                // 项目分类
  tags: string[];                  // 技术标签
  github: string;                  // GitHub 链接
  demo: string;                    // 项目详情页面链接
  featured: boolean;               // 是否为精选项目
  stars: number;                   // GitHub 星数
  views: number;                   // 查看次数
  screenshots: string[];           // 效果图路径数组
  features: string[];              // 功能特性列表
  challenges: string[];            // 技术挑战列表
  solutions: string[];             // 解决方案列表
}
```

## 性能优化

### 移动端优化
1. **背景层优化**: 移动端禁用复杂背景图片
2. **滚动优化**: 使用 `requestAnimationFrame` 优化滚动事件
3. **动画优化**: 移动端减少动画延迟和复杂度
4. **图片懒加载**: 使用占位符减少初始加载时间

### 代码优化
1. **组件懒加载**: 使用 `LazyMarkdown` 组件
2. **状态管理**: 使用 `useMemo` 优化计算
3. **事件处理**: 使用 `passive` 事件监听器
4. **硬件加速**: 启用 CSS 硬件加速

## 使用方法

### 添加新项目
1. 在 `src/app/projects/[slug]/page.tsx` 中的 `projects` 数组添加项目数据
2. 在 `src/app/projects/[slug]/screenshots/page.tsx` 中添加对应的效果图数据
3. 确保项目有唯一的 `slug` 标识符

### 自定义样式
- 项目卡片样式在 `ClientProjectsPage.tsx` 中定义
- 详情页面样式在 `ClientProjectDetail.tsx` 中定义
- 效果图展示样式在 `ClientScreenshotsPage.tsx` 中定义

### 添加效果图
1. 将效果图文件放在 `public/assets/` 目录下
2. 在项目数据中的 `screenshots` 数组中添加图片路径
3. 在效果图数据中添加对应的标题和描述

## 路由结构

```
/projects                    # 项目列表页面
├── /[slug]                 # 项目详情页面
│   └── /screenshots        # 效果图展示页面
```

## 技术栈

- **框架**: Next.js 15 + React 19
- **样式**: Tailwind CSS 4.0
- **动画**: Framer Motion
- **图标**: Heroicons
- **Markdown**: react-markdown + rehype/remark 生态
- **类型**: TypeScript

## 部署说明

项目已配置 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `main` 分支
2. GitHub Actions 自动构建和部署
3. 访问 `https://username.github.io/repository-name/projects`

## 注意事项

1. **图片优化**: 建议使用 WebP 格式，压缩图片大小
2. **SEO 优化**: 每个页面都配置了合适的 meta 标签
3. **无障碍访问**: 添加了适当的 ARIA 标签和键盘导航
4. **主题支持**: 支持明暗主题切换
5. **移动端适配**: 响应式设计，完美适配各种设备 