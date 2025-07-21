import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
export const metadata: Metadata = {
    title: 'QG 软件升级助手平台 - 效果图展示',
    description: 'QG 软件升级助手平台的界面效果图展示，包含登录界面、管理后台、软件列表等功能页面。',
};

const screenshots = [
    {
        title: '登录界面',
        description: '现代化的登录界面，支持邮箱登录和密码找回功能',
        image: `${basePath}/qg-login.png`,
        features: ['邮箱登录', '密码找回', '记住登录', '安全验证']
    },
    {
        title: '管理后台',
        description: '软件管理和用户管理后台界面，提供完整的系统管理功能',
        image: `${basePath}/qg-dashboard.png`,
        features: ['用户管理', '软件发布', '系统监控', '数据统计']
    },
    {
        title: '软件列表',
        description: '软件产品展示和筛选界面，支持多种筛选和搜索功能',
        image: `${basePath}/qg-software-list.png`,
        features: ['产品展示', '分类筛选', '关键词搜索', '排序功能']
    },
    {
        title: '软件详情',
        description: '软件详情页面，包含版本信息和下载功能',
        image: `${basePath}/qg-software-detail.png`,
        features: ['版本信息', '更新日志', '下载功能', '购买授权']
    }
];

export default function QGScreenshotsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* 导航栏 */}
            <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects/qg-software-upgrade" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                                返回项目详情
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-300">效果图展示</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 主要内容 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 页面标题 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        QG 软件升级助手平台
                    </h1>
                    <p className="text-xl text-gray-300">
                        界面效果图展示
                    </p>
                </div>

                {/* 效果图网格 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {screenshots.map((screenshot, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
                            {/* 图片占位符 */}
                            <div className="h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-gray-400 text-sm">{screenshot.title}</p>
                                </div>
                            </div>

                            {/* 内容信息 */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-3">{screenshot.title}</h3>
                                <p className="text-gray-300 mb-4">{screenshot.description}</p>

                                {/* 功能特性 */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wide">主要功能</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {screenshot.features.map((feature, featureIndex) => (
                                            <span
                                                key={featureIndex}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 技术说明 */}
                <div className="mt-16 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">界面设计特点</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">响应式设计</h3>
                            <p className="text-gray-400">适配桌面端、平板和移动端设备</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">现代化UI</h3>
                            <p className="text-gray-400">采用现代化的设计语言和交互方式</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">用户体验</h3>
                            <p className="text-gray-400">注重用户体验，提供流畅的操作体验</p>
                        </div>
                    </div>
                </div>

                {/* 返回链接 */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects/qg-software-upgrade"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        返回项目详情
                    </Link>
                </div>
            </div>
        </div>
    );
} 