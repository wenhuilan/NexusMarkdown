import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: '出租车大数据可视化系统 - 效果图展示',
    description: '出租车大数据可视化系统的界面效果图展示，包含区域监控、热点分析、行车轨迹、异常检测等功能页面。',
};
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
const screenshots = [
    {
        title: '大数据可视化平台',
        description: '云端出租车大数据可视化平台，支持区域监控、热点分析、行车轨迹、预测分析等功能',
        image: `${basePath}/taxi-dashboard.png`,
        features: ['区域监控', '热点分析', '行车轨迹', '预测分析', '天气主题']
    },
    {
        title: '区域监控',
        description: '实时监控各区域车流量和分布情况，支持广州出租车流量监控',
        image: `${basePath}/taxi-heatmap.png`,
        features: ['车流量监控', '车辆分布', '流量统计', '区域对比', '时间轴控制']
    },
    {
        title: '热点分析',
        description: '热力图展示载客热点和流量分布，支持载客热点流向图分析',
        image: `${basePath}/taxi-trajectory.png`,
        features: ['载客热点', '流量热力图', '热点流向', '热点预测', '3D 热力图']
    },
    {
        title: '行车轨迹',
        description: '车辆历史路径可视化和轨迹分析，支持轨迹回放功能',
        image: `${basePath}/taxi-analysis.png`,
        features: ['历史路径', '轨迹回放', '路径分析', '轨迹聚类', '实时轨迹']
    },
    {
        title: '异常检测',
        description: '异常车辆识别和监控，支持异常行为检测和实时告警',
        image: `${basePath}/taxi-anomaly.png`,
        features: ['异常车辆', '异常行为', '实时告警', '异常分析', '预警系统']
    }
];

export default function TaxiScreenshotsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            {/* 导航栏 */}
            <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects/taxi-bigdata-visualization" className="flex items-center text-gray-300 hover:text-white transition-colors">
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
                        出租车大数据可视化系统
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
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">系统功能</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">区域监控</h3>
                            <p className="text-gray-400">实时监控各区域车流量和分布情况</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">热点分析</h3>
                            <p className="text-gray-400">热力图展示载客热点和流量分布</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">行车轨迹</h3>
                            <p className="text-gray-400">车辆历史路径可视化和轨迹分析</p>
                        </div>
                    </div>
                </div>

                {/* 返回链接 */}
                <div className="text-center mt-12">
                    <Link
                        href="/projects/taxi-bigdata-visualization"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        返回项目详情
                    </Link>
                </div>
            </div>
        </div>
    );
} 