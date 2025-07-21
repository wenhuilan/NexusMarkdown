import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: '差分隐私分布式AI系统 - 效果图展示',
    description: '差分隐私分布式AI系统的界面效果图展示，包含数据处理中心、数据可视化、智能分析等功能页面。',
};

const screenshots = [
    {
        title: '数据处理中心',
        description: '差分隐私数据处理可视化中心，支持多步骤数据处理流程',
        image: '/assets/dp-ai-dashboard.png',
        features: ['数据上传', '迭代模式选择', '数据选择', '数据交换', '权重设置']
    },
    {
        title: '数据可视化',
        description: '多维度数据可视化展示，包含关系图、散点图、聚合图等',
        image: '/assets/dp-ai-visualization.png',
        features: ['关系图', '散点图', '数据聚合图', '趋势分析图', '交互式图表']
    },
    {
        title: '智能分析',
        description: 'AI 智能分析结果展示，自动分类、聚类、预测等功能',
        image: '/assets/dp-ai-analysis.png',
        features: ['自动分类', '聚类分析', '预测分析', '异常检测', '模式识别']
    },
    {
        title: '隐私保护',
        description: '差分隐私保护机制和隐私预算管理界面',
        image: '/assets/dp-ai-privacy.png',
        features: ['噪声注入', '隐私预算管理', '查询响应', '隐私保护评估']
    }
];

export default function DPScreenshotsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            {/* 导航栏 */}
            <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects/differential-privacy-ai" className="flex items-center text-gray-300 hover:text-white transition-colors">
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
                        差分隐私分布式AI系统
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
                            <div className="h-64 bg-gradient-to-br from-blue-800 to-purple-800 flex items-center justify-center">
                                <div className="text-center">
                                    <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-blue-300 text-sm">{screenshot.title}</p>
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
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">系统特色</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">隐私保护</h3>
                            <p className="text-gray-400">差分隐私算法保护用户数据安全</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">智能分析</h3>
                            <p className="text-gray-400">AI 驱动的自动化数据分析</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">可视化展示</h3>
                            <p className="text-gray-400">丰富的交互式数据可视化</p>
                        </div>
                    </div>
                </div>

                {/* 返回链接 */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects/differential-privacy-ai"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        返回项目详情
                    </Link>
                </div>
            </div>
        </div>
    );
} 