import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon, HomeIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'QG 软件升级助手平台 - 项目展示',
    description: '面向工业软件的综合性升级管理平台，支持软件发布、更新、下载、授权等全生命周期管理。',
};

export default function QGSoftwareUpgradePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                            <span className="text-gray-300">QG 软件升级助手平台</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 主要内容 */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* 项目标题 */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        QG 软件升级助手平台
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        面向工业软件的综合性升级管理平台，支持软件发布、更新、下载、授权等全生命周期管理
                    </p>
                </div>

                {/* 功能模块展示 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* 管理员模块 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">管理员模块</h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                用户管理：权限分配、状态管理
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                软件发布：版本管理、发布审核
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                软件删除：下架管理、数据备份
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                系统监控：行为分析、性能监控
                            </li>
                        </ul>
                    </div>

                    {/* 用户模块 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">用户模块</h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                登录注册：邮箱验证、安全登录
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                密码找回：邮箱验证、安全重置
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                用户信息：个人管理、偏好设置
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                软件下载：本地下载、断点续传
                            </li>
                        </ul>
                    </div>

                    {/* 产品模块 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">产品模块</h3>
                        </div>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                产品展示：信息展示、截图预览
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                筛选搜索：分类筛选、关键词搜索
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                                版本管理：历史版本、更新日志
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                软件购买：在线购买、授权管理
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 技术架构 */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">技术架构</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 前端技术栈 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                前端技术栈
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">Vue.js 3</span>
                                    <span className="text-green-400 text-sm">核心框架</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">TypeScript</span>
                                    <span className="text-blue-400 text-sm">类型安全</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">Element Plus</span>
                                    <span className="text-purple-400 text-sm">UI 组件</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">WebSocket</span>
                                    <span className="text-yellow-400 text-sm">实时通信</span>
                                </div>
                            </div>
                        </div>

                        {/* 后端技术栈 */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                </svg>
                                后端技术栈
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">Node.js</span>
                                    <span className="text-green-400 text-sm">运行环境</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">Express</span>
                                    <span className="text-blue-400 text-sm">Web 框架</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">MySQL 8.0</span>
                                    <span className="text-purple-400 text-sm">数据库</span>
                                </div>
                                <div className="flex items-center justify-between bg-gray-700/50 rounded-lg p-3">
                                    <span className="text-gray-300">Redis</span>
                                    <span className="text-yellow-400 text-sm">缓存队列</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 核心特性 */}
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 mb-16">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">核心特性</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">实时更新推送</h3>
                            <p className="text-gray-400">WebSocket 实时推送软件更新信息</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">安全授权系统</h3>
                            <p className="text-gray-400">基于硬件指纹的软件授权机制</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">数据统计分析</h3>
                            <p className="text-gray-400">软件使用情况和升级统计</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">智能升级检测</h3>
                            <p className="text-gray-400">自动检测软件版本和可用更新</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">多用户权限管理</h3>
                            <p className="text-gray-400">管理员和普通用户的分级权限控制</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">文件管理</h3>
                            <p className="text-gray-400">大文件上传下载、断点续传</p>
                        </div>
                    </div>
                </div>

                {/* 项目链接 */}
                <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://github.com/wenhuilan/22-QG-headend/tree/master/%E5%B7%A5%E4%B8%9A%E8%BD%AF%E4%BB%B6%E9%A1%B9%E7%9B%AE"
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