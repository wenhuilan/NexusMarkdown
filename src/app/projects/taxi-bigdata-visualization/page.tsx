import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: '出租车大数据可视化系统 - 项目展示',
    description: '云端出租车大数据可视化平台，支持区域监控、热点分析、行车轨迹、预测分析等功能。',
};

export default function TaxiBigDataVisualizationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
            {/* 导航栏 */}
            <nav className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-4">
                            <Link href="/projects" className="flex items-center text-gray-300 hover:text-white transition-colors">
                                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                                返回项目列表
                            </Link>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-300">出租车大数据可视化系统</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 主要内容 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 项目标题 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        出租车大数据可视化系统
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        云端出租车大数据可视化平台，支持区域监控、热点分析、行车轨迹、预测分析等功能
                    </p>
                </div>

                {/* 核心功能 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {/* 登录注册 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">登录注册</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 用户注册（邮箱、手机号）</li>
                            <li>• 多种登录方式</li>
                            <li>• 权限管理</li>
                            <li>• JWT Token 认证</li>
                        </ul>
                    </div>

                    {/* 区域监控 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">区域监控</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 车流量监控</li>
                            <li>• 车辆分布</li>
                            <li>• 流量统计</li>
                            <li>• 区域对比</li>
                        </ul>
                    </div>

                    {/* 热点分析 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">热点分析</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 载客热点</li>
                            <li>• 流量热力图</li>
                            <li>• 热点流向</li>
                            <li>• 热点预测</li>
                        </ul>
                    </div>

                    {/* 行车轨迹 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">行车轨迹</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 历史路径</li>
                            <li>• 轨迹回放</li>
                            <li>• 路径分析</li>
                            <li>• 轨迹聚类</li>
                        </ul>
                    </div>

                    {/* 异常检测 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">异常检测</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 异常车辆</li>
                            <li>• 异常行为</li>
                            <li>• 实时告警</li>
                            <li>• 异常分析</li>
                        </ul>
                    </div>

                    {/* 广告牌管理 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">广告牌管理</h3>
                        </div>
                        <ul className="text-gray-300 space-y-2">
                            <li>• 广告投放</li>
                            <li>• 效果分析</li>
                            <li>• 受众分析</li>
                            <li>• ROI 计算</li>
                        </ul>
                    </div>
                </div>

                {/* 技术架构 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* 前端技术栈 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            前端技术栈
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">Vue.js 3</span>
                                <span className="text-green-400 text-sm">核心框架</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">ECharts 5.x</span>
                                <span className="text-blue-400 text-sm">可视化库</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">WebGL</span>
                                <span className="text-purple-400 text-sm">3D 渲染</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">Mapbox GL JS</span>
                                <span className="text-yellow-400 text-sm">地图引擎</span>
                            </div>
                        </div>
                    </div>

                    {/* 后端技术栈 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                            后端技术栈
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">Python + FastAPI</span>
                                <span className="text-green-400 text-sm">后端框架</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">Apache Spark</span>
                                <span className="text-blue-400 text-sm">大数据处理</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">PostgreSQL</span>
                                <span className="text-purple-400 text-sm">数据库</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                <span className="text-gray-300">Apache Kafka</span>
                                <span className="text-yellow-400 text-sm">消息队列</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 系统特色 */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">系统特色</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">大数据处理</h3>
                            <p className="text-gray-400">支持 PB 级数据处理</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">实时可视化</h3>
                            <p className="text-gray-400">毫秒级数据更新和可视化</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">3D 渲染</h3>
                            <p className="text-gray-400">WebGL 3D 地图渲染</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">智能算法</h3>
                            <p className="text-gray-400">机器学习算法支持</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">高并发</h3>
                            <p className="text-gray-400">支持万级并发访问</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">可扩展</h3>
                            <p className="text-gray-400">微服务架构设计</p>
                        </div>
                    </div>
                </div>

                {/* 项目链接 */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://github.com/wenhuilan/taxi-bigdata-visualization"
                            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            查看源码
                            <HomeIcon className="w-4 h-4 ml-2" />
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                            返回项目列表
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 