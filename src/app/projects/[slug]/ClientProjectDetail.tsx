'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import {
    ArrowLeftIcon,
    StarIcon,
    EyeIcon,
    CodeBracketIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ServerIcon,
    CheckCircleIcon,
    LightBulbIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import LazyMarkdown from '@/components/LazyMarkdown';

interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    category: string;
    tags: string[];
    github: string;
    demo: string;
    featured: boolean;
    stars: number;
    views: number;
     screenshots: { title: string; description: string; image: string; }[]; 
    features: string[];
    challenges: string[];
    solutions: string[];
}

interface Props {
    project: Project;
}

export default function ClientProjectDetail({ project }: Props) {
    const [selectedImage, setSelectedImage] = useState(0);
    // isMobile变量用于将来的响应式布局，暂时未使用
    // const [_isMobile, setIsMobile] = useState(false);
     console.log('project:', project);
    // 检测移动端设备
    useEffect(() => {
        const checkMobile = () => {
            // setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // 获取分类图标
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'frontend':
                return <CodeBracketIcon className="w-6 h-6" />;
            case 'fullstack':
                return <ServerIcon className="w-6 h-6" />;
            case 'mobile':
                return <DevicePhoneMobileIcon className="w-6 h-6" />;
            case 'web':
                return <GlobeAltIcon className="w-6 h-6" />;
            default:
                return <CodeBracketIcon className="w-6 h-6" />;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* 返回按钮 */}
            <div className="container mx-auto px-4 py-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <ArrowLeftIcon className="w-5 h-5" />
                    <span>返回项目列表</span>
                </Link>
            </div>

            <div className="container mx-auto px-4 pb-16">
                {/* 项目头部信息 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* 项目图片 */}
                            <div className="lg:w-1/3">
                                <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={50}
                                                height={60}
                                            className="w-50 h-60 opacity-80 rounded-lg"
                                            />
                                        
                                    </div>
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            精选项目
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* 项目信息 */}
                            <div className="lg:w-2/3">
                                <div className="flex items-center space-x-3 mb-4">
                                    {getCategoryIcon(project.category)}
                                    <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                    {project.title}
                                </h1>

                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* 标签 */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* 统计信息 */}
                                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1">
                                        <StarIcon className="w-4 h-4" />
                                        <span>{project.stars}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <EyeIcon className="w-4 h-4" />
                                        <span>{project.views}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 效果图展示 */}
                {project.screenshots && project.screenshots.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            效果图展示
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                            {/* 主图轮播 */}
                            <div className="mb-6 relative flex items-center justify-center">
                                <button
                                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : project.screenshots.length - 1)}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 shadow hover:bg-white dark:hover:bg-gray-900"
                                    aria-label="上一张"
                                >
                                    <ChevronLeftIcon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                                </button>
                                <div className="relative h-96 w-full flex items-center justify-center">
                                    <Image
                                        src={project.screenshots[selectedImage].image}
                                        alt={project.screenshots[selectedImage].title}
                                        width={800}
                                        height={600}
                                        className="rounded-lg shadow-md object-contain mx-auto"
                                        style={{ maxHeight: '320px', width: 'auto' }} // 替代 Tailwind 的 max-h-80
                                    />
                                </div>
                                <button
                                    onClick={() => setSelectedImage(selectedImage < project.screenshots.length - 1 ? selectedImage + 1 : 0)}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-900/80 rounded-full p-2 shadow hover:bg-white dark:hover:bg-gray-900"
                                    aria-label="下一张"
                                >
                                    <ChevronRightIcon className="w-7 h-7 text-gray-700 dark:text-gray-300" />
                                </button>
                            </div>
                            {/* 缩略图轮播 */}
                            <div className="flex gap-3 justify-center items-center">
                                {project.screenshots.map((screenshot, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative h-20 w-32 rounded-lg overflow-hidden border-2 transition-all duration-200 ${selectedImage === index ? 'border-blue-500 scale-105' : 'border-transparent hover:scale-105'}`}
                                        aria-label={`切换到第${index + 1}张`}
                                    >
                                        <Image
                                            src={screenshot.image}
                                            alt={screenshot.title}
                                            width="800"
                                            height={600}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-black/40 text-xs text-white px-2 py-1 truncate">
                                            {screenshot.title}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 项目详情 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        项目详情
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <LazyMarkdown content={project.fullDescription} />
                        </div>
                    </div>
                </motion.div>

                {/* 功能特性 */}
                {project.features && project.features.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mb-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            功能特性
                        </h2>
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 技术挑战与解决方案 */}
                {(project.challenges?.length > 0 || project.solutions?.length > 0) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    >
                        {/* 技术挑战 */}
                        {project.challenges && project.challenges.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    技术挑战
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-4">
                                        {project.challenges.map((challenge, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <LightBulbIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* 解决方案 */}
                        {project.solutions && project.solutions.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    解决方案
                                </h2>
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
                                    <div className="space-y-4">
                                        {project.solutions.map((solution, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <WrenchScrewdriverIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
} 