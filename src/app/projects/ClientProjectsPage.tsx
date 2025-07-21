'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import {
    CodeBracketIcon,
    GlobeAltIcon,
    DevicePhoneMobileIcon,
    ServerIcon,
    SparklesIcon,
    StarIcon,
    EyeIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

// 项目分类
const categories = [
    { id: 'all', name: '全部', icon: SparklesIcon },
    { id: 'fullstack', name: '全栈应用', icon: ServerIcon },
    { id: 'mobile', name: '移动端', icon: DevicePhoneMobileIcon },
    { id: 'webapp', name: 'Web应用', icon: GlobeAltIcon },
];

// 项目数据
const projects = [
   
    {
        id: 1,
        slug: 'oxygen-blog',
        title: 'Oxygen Blog 博客平台',
        description: '基于 Next.js 15、TypeScript 和 Markdown 的现代化个人博客平台，支持多主题、响应式设计、内容管理和静态导出。',
        image: '/assets/oxygen-blog.svg',
        category: 'webapp',
        tags: ['Next.js', 'TypeScript', 'Markdown', 'Tailwind CSS'],
        github: 'https://github.com/wenhuilan/NexusMarkdown',
        demo: '/projects/oxygen-blog',
        featured: true,
        stars: 120,
        views: 2100,
    },
    
    {
        id: 2,
        slug: 'doccollab',
        title: 'DocCollab 协同富文本编辑器',
        description: '基于 React + NestJS 的协同知识库系统，支持实时协作、富文本编辑、版本历史等功能。',
        image: '/assets/doccollab.svg',
        category: 'fullstack',
        tags: ['React', 'NestJS', 'MongoDB', 'Yjs'],
        github: 'https://github.com/byteGanYue/DocCollab',
        demo: '/projects/doccollab',
        featured: true,
        stars: 3,
        views: 156,
    },
    {
        id: 3,
        slug: 'taxi-bigdata-visualization',
        title: '出租车大数据可视化系统',
        description: '云端出租车大数据可视化平台，支持区域监控、热点分析、行车轨迹、预测分析等功能。',
        image: '/assets/taxi-bigdata-visualization.svg',
        category: 'webapp',
        tags: ['Vue.js', 'ECharts', 'WebGL', '大数据可视化'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master',
        demo: '/projects/taxi-bigdata-visualization',
        featured: true,
        stars: 234,
        views: 3456,
    },
    {
        id: 4,
        slug: 'differential-privacy-ai',
        title: '差分隐私分布式AI系统',
        description: '基于差分隐私的分布式人工智能系统，提供数据变化趋势可视化、智能分析、自动分类聚类等功能。',
        image: '/assets/differential-privacy-ai.svg',
        category: 'webapp',
        tags: ['Vue.js', 'ECharts', 'Python', '差分隐私'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master',
        demo: '/projects/differential-privacy-ai',
        featured: true,
        stars: 156,
        views: 2341,
    },
   
    {
        id: 5,
        slug: 'myapp-miniprogram',
        title: '招新小程序',
        description: '基于微信小程序的招新管理系统，支持报名、审核、通知等功能，提供便捷的移动端体验。',
        image: '/assets/myapp-miniprogram.svg',
        category: 'mobile',
        tags: ['微信小程序', 'JavaScript', '云开发', 'WXML'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master',
        demo: '/projects/myapp-miniprogram',
        featured: false,
        stars: 1,
        views: 78,
    },
    {
        id: 6,
        slug: 'qg-software-upgrade',
        title: 'QG 软件升级助手平台',
        description: '面向工业软件的综合性升级管理平台，支持软件发布、更新、下载、授权等全生命周期管理。',
        image: '/assets/qg-software-upgrade.svg',
        category: 'webapp',
        tags: ['Vue.js', 'Node.js', 'MySQL', 'WebSocket'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master',
        demo: '/projects/qg-software-upgrade',
        featured: true,
        stars: 89,
        views: 1567,
    },
   
];

export default function ClientProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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

    // 根据分类筛选项目
    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') {
            return projects;
        }
        return projects.filter(project => project.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* 页面标题 */}
            <div className="container mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        项目展示
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        探索我的项目作品集，涵盖前端开发、全栈应用、移动端开发等多个领域
                    </p>
                </motion.div>

                {/* 分类筛选 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg'
                                    }`}
                            >
                                <Icon className="w-5 h-5" />
                                <span className="font-medium">{category.name}</span>
                            </button>
                        );
                    })}
                </motion.div>

                {/* 项目网格 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`grid gap-8 ${isMobile
                        ? 'grid-cols-1'
                        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: isMobile ? 0.3 : 0.5,
                                    delay: isMobile ? 0 : index * 0.1
                                }}
                                className="group relative"
                                onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
                                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                            >
                                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700">
                                    {/* 项目图片 */}
                                    <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {project.image.endsWith('.svg') ? (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-24 h-24 opacity-80"
                                                />
                                            ) : (
                                                <div className="text-6xl opacity-20">
                                                    {project.category === 'frontend' && <CodeBracketIcon />}
                                                    {project.category === 'fullstack' && <ServerIcon />}
                                                    {project.category === 'mobile' && <DevicePhoneMobileIcon />}
                                                    {project.category === 'web' && <GlobeAltIcon />}
                                                </div>
                                            )}
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                精选
                                            </div>
                                        )}
                                    </div>

                                    {/* 项目内容 */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* 标签 */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* 统计信息 */}
                                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <div className="flex items-center space-x-4">
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

                                        {/* 操作按钮 */}
                                        <div className="flex space-x-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                                            >
                                                <span>GitHub</span>
                                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                            </a>
                                            <Link
                                                href={project.demo}
                                                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all flex items-center justify-center space-x-2"
                                            >
                                                <span>查看详情</span>
                                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* 空状态 */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">📁</div>
                        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            暂无项目
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            该分类下暂无项目，请选择其他分类查看
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}