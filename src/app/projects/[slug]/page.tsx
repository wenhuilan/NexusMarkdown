import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ClientProjectDetail from './ClientProjectDetail';

// 项目数据（与 ClientProjectsPage 保持一致）
const projects = [
    {
        id: 1,
        slug: 'qg-software-upgrade',
        title: 'QG 软件升级助手平台',
        description: '面向工业软件的综合性升级管理平台，支持软件发布、更新、下载、授权等全生命周期管理。',
        fullDescription: `QG 软件升级助手平台是一个专为工业软件设计的综合性升级管理平台。

## 项目特色

- **全生命周期管理**: 从软件发布到更新、下载、授权的完整流程
- **智能升级检测**: 自动检测软件版本和可用更新
- **多用户权限管理**: 管理员和普通用户的分级权限控制
- **实时更新推送**: WebSocket 实时推送软件更新信息
- **安全授权系统**: 基于硬件指纹的软件授权机制
- **数据统计分析**: 软件使用情况和升级统计

## 技术架构

### 前端技术栈
- **框架**: Vue.js 3 + TypeScript
- **UI 组件**: Element Plus
- **状态管理**: Pinia
- **路由**: Vue Router 4
- **构建工具**: Vite
- **实时通信**: WebSocket

### 后端技术栈
- **框架**: Node.js + Express
- **数据库**: MySQL 8.0
- **缓存**: Redis
- **文件存储**: 本地存储 + 云存储
- **消息队列**: Redis Queue
- **认证**: JWT + Session

## 核心功能模块

### 管理员模块
1. **用户管理**: 用户注册、权限分配、状态管理
2. **软件发布**: 软件上传、版本管理、发布审核
3. **软件删除**: 软件下架、版本清理、数据备份
4. **系统监控**: 用户行为分析、系统性能监控

### 用户模块
1. **登录注册**: 邮箱注册、密码登录、第三方登录
2. **密码找回**: 邮箱验证、密码重置、安全验证
3. **用户信息**: 个人信息管理、密码修改、偏好设置
4. **软件查看**: 软件列表、详情查看、版本对比
5. **软件下载**: 本地下载、断点续传、下载管理

### 产品模块
1. **产品展示**: 软件信息展示、截图预览、功能介绍
2. **筛选搜索**: 分类筛选、关键词搜索、高级搜索
3. **版本管理**: 历史版本下载、版本对比、更新日志
4. **更新处理**: 自动更新检测、手动更新、回滚功能
5. **软件购买**: 在线购买、授权管理、使用统计

## 技术亮点

- **实时通信**: WebSocket 实现实时更新推送
- **文件管理**: 大文件上传下载、断点续传
- **安全机制**: 硬件指纹识别、软件授权验证
- **性能优化**: 数据库索引优化、缓存策略
- **用户体验**: 响应式设计、流畅交互`,
        image: '/assets/qg-software-upgrade.svg',
        category: 'fullstack',
        tags: ['Vue.js', 'Node.js', 'MySQL', 'WebSocket'],
        github: 'https://github.com/wenhuilan/qg-software-upgrade',
        demo: '/projects/qg-software-upgrade',
        featured: true,
        stars: 89,
        views: 1567,
        screenshots: [
            '/assets/qg-login.png',
            '/assets/qg-dashboard.png',
            '/assets/qg-software-list.png',
        ],
        features: [
            '全生命周期管理',
            '智能升级检测',
            '多用户权限管理',
            '实时更新推送',
            '安全授权系统',
            '数据统计分析',
        ],
        challenges: [
            '大文件上传下载',
            '实时通信稳定性',
            '权限管理复杂度',
            '软件授权安全',
        ],
        solutions: [
            '分片上传和断点续传',
            'WebSocket 心跳检测',
            'RBAC 权限模型',
            '硬件指纹加密验证',
        ],
    },
    {
        id: 2,
        slug: 'doccollab',
        title: 'DocCollab 协同富文本编辑器',
        description: '基于 React + NestJS 的协同知识库系统，支持实时协作、富文本编辑、版本历史等功能。',
        fullDescription: `DocCollab 是一个现代化的协同知识库系统，基于 React + NestJS 构建，提供实时协作编辑功能。

## 项目特色

- **实时协作**: 基于 Yjs 的实时协同编辑，支持多人同时编辑
- **富文本编辑**: 集成 Quill 编辑器，支持丰富的文本格式
- **版本历史**: 完整的文档版本管理和历史记录
- **知识库管理**: 支持文档分类、标签、搜索等功能
- **用户权限**: 细粒度的用户权限控制
- **实时同步**: WebSocket 实时数据同步

## 技术架构

### 前端技术栈
- **框架**: React 18 + TypeScript
- **状态管理**: Zustand
- **编辑器**: Quill.js
- **协同编辑**: Yjs + y-websocket
- **UI 组件**: Ant Design
- **样式**: Less

### 后端技术栈
- **框架**: NestJS
- **数据库**: MongoDB
- **实时通信**: WebSocket
- **认证**: JWT
- **文件存储**: 本地存储

## 核心功能

1. **协同编辑**: 多人实时协作编辑文档
2. **富文本编辑**: 支持文本格式化、图片插入、表格等
3. **文档管理**: 创建、编辑、删除、移动文档
4. **版本控制**: 查看和恢复文档历史版本
5. **用户管理**: 用户注册、登录、权限控制
6. **搜索功能**: 全文搜索和标签筛选

## 技术亮点

- **Yjs 协同编辑**: 基于 CRDT 的冲突解决算法
- **WebSocket 实时通信**: 低延迟的数据同步
- **模块化架构**: 前后端分离，易于扩展
- **响应式设计**: 适配各种设备尺寸`,
        image: '/assets/doccollab.jpg',
        category: 'fullstack',
        tags: ['React', 'NestJS', 'MongoDB', 'Yjs', 'Quill'],
        github: 'https://github.com/byteGanYue/DocCollab',
        demo: 'https://jcnh95tnjotg.feishu.cn/docx/FYu1ddgSsoET3axlz8Ucu2GHnQd',
        featured: true,
        stars: 3,
        views: 156,
        screenshots: [
            {
                title: '登录与功能总览',
                description: '简洁的登录界面与功能总览，支持富文本编辑、实时协作、版本管理和多级文件管理。',
                image: '/assets/doccollab-login.jpg',
            },
            {
                title: '首页与文档导航',
                description: '首页展示团队协作入口、文档管理、个性化主题和版本历史，便于快速上手。',
                image: '/assets/doccollab-home.jpg',
            },
            {
                title: '实时协同编辑',
                description: '多人同时在线编辑文档，支持代码高亮、评论与富文本格式，提升团队协作效率。',
                image: '/assets/doccollab-editor.jpg',
            },
            {
                title: '版本结构对比',
                description: '强大的版本管理与结构化对比功能，轻松追踪文档历史变更。',
                image: '/assets/doccollab-diff.jpg',
            },
            {
                title: '文档归档与管理',
                description: '支持文档归档、标签、权限与统计，便于团队知识沉淀和高效检索。',
                image: '/assets/doccollab-archive.jpg',
            },
            {
                title: 'AI 文档摘要',
                description: '集成 AI 智能摘要与内容提炼，提升文档阅读与理解效率。',
                image: '/assets/doccollab-ai.jpg',
            },
            {
                title: '全文搜索',
                description: '支持文档内容的全文检索，快速定位所需信息。',
                image: '/assets/doccollab-search.jpg',
            },
        ],
        features: [
            '实时协同编辑',
            '富文本编辑器',
            '版本历史管理',
            '用户权限控制',
            '文档分类管理',
            '全文搜索功能',
        ],
        challenges: [
            '协同编辑冲突解决',
            '实时数据同步优化',
            '大文档性能优化',
            '用户权限管理',
        ],
        solutions: [
            '使用 Yjs CRDT 算法解决冲突',
            'WebSocket + 消息队列优化同步',
            '虚拟滚动和懒加载提升性能',
            '基于角色的权限控制系统',
        ],
    },
    {
        id: 3,
        slug: 'taxi-bigdata-visualization',
        title: '出租车大数据可视化系统',
        description: '云端出租车大数据可视化平台，支持区域监控、热点分析、行车轨迹、预测分析等功能。',
        fullDescription: `出租车大数据可视化系统是一个基于云端的大数据分析和可视化平台。

## 项目亮点

- **区域监控**: 实时监控各区域车流量和分布情况
- **热点分析**: 热力图展示载客热点和流量分布
- **行车轨迹**: 车辆历史路径可视化和轨迹分析
- **预测分析**: 基于历史数据的流量预测和趋势分析
- **异常检测**: 异常车辆识别和监控
- **广告牌管理**: 智能广告牌投放和效果分析

## 技术架构

### 前端技术栈
- **框架**: Vue.js 3 + TypeScript
- **可视化库**: ECharts 5.x, WebGL
- **地图引擎**: Mapbox GL JS
- **UI 组件**: Element Plus
- **状态管理**: Pinia
- **构建工具**: Vite

### 后端技术栈
- **框架**: Python + FastAPI
- **大数据处理**: Apache Spark, Hadoop
- **数据库**: PostgreSQL, Redis
- **消息队列**: Apache Kafka
- **容器化**: Docker + Kubernetes
- **监控**: Prometheus + Grafana

## 核心功能

### 登录注册系统
1. **用户注册**: 支持邮箱、手机号注册
2. **用户登录**: 多种登录方式（账号密码、验证码）
3. **权限管理**: 基于角色的访问控制
4. **安全认证**: JWT Token 认证机制

### 区域监控
1. **车流量监控**: 实时监控各区域车流量
2. **车辆分布**: 车辆在地图上的实时分布
3. **流量统计**: 各时段流量统计和分析
4. **区域对比**: 不同区域流量对比分析

### 热点分析
1. **载客热点**: 热力图展示载客热点区域
2. **流量热力图**: 车流量热力图可视化
3. **热点流向**: 载客热点流向图分析
4. **热点预测**: 基于历史数据的热点预测

### 行车轨迹
1. **历史路径**: 车辆历史路径可视化
2. **轨迹回放**: 车辆轨迹回放功能
3. **路径分析**: 路径优化和效率分析
4. **轨迹聚类**: 相似轨迹聚类分析

### 异常检测
1. **异常车辆**: 异常车辆识别和标记
2. **异常行为**: 异常驾驶行为检测
3. **实时告警**: 异常情况实时告警
4. **异常分析**: 异常原因分析和统计

### 广告牌管理
1. **广告投放**: 智能广告牌投放策略
2. **效果分析**: 广告投放效果分析
3. **受众分析**: 广告受众群体分析
4. **ROI 计算**: 广告投资回报率计算

## 技术亮点

- **大数据处理**: 支持 PB 级数据处理
- **实时可视化**: 毫秒级数据更新和可视化
- **3D 渲染**: WebGL 3D 地图渲染
- **智能算法**: 机器学习算法支持
- **高并发**: 支持万级并发访问
- **可扩展**: 微服务架构设计`,
        image: '/assets/taxi-bigdata-visualization.svg',
        category: 'frontend',
        tags: ['Vue.js', 'ECharts', 'WebGL', '大数据可视化'],
        github: 'https://github.com/wenhuilan/taxi-bigdata-visualization',
        demo: '/projects/taxi-bigdata-visualization',
        featured: true,
        stars: 234,
        views: 3456,
        screenshots: [
            '/assets/taxi-dashboard.png',
            '/assets/taxi-heatmap.png',
            '/assets/taxi-trajectory.png',
            '/assets/taxi-analysis.png',
        ],
        features: [
            '区域监控',
            '热点分析',
            '行车轨迹',
            '预测分析',
            '异常检测',
            '广告牌管理',
        ],
        challenges: [
            '大数据量处理',
            '实时数据同步',
            '3D 渲染性能',
            '多维度可视化',
        ],
        solutions: [
            '分布式数据处理',
            '流式计算架构',
            'WebGL 硬件加速',
            'ECharts 大数据渲染',
        ],
    },
    {
        id: 4,
        slug: 'differential-privacy-ai',
        title: '差分隐私分布式AI系统',
        description: '基于差分隐私的分布式人工智能系统，提供数据变化趋势可视化、智能分析、自动分类聚类等功能。',
        fullDescription: `差分隐私分布式AI系统是一个结合差分隐私技术和人工智能的数据分析平台。

## 项目亮点

- **数据变化趋势可视化**: 提供数据的变化趋势、幅度可视化，使用户能够根据需要自主调整模型或数据
- **智能化分析**: 与人工智能组合作，前端展示数据集智能化分析，自动分类、聚类、预测等处理结果
- **差分隐私保护**: 在数据分析过程中保护用户隐私，确保数据安全
- **分布式架构**: 支持分布式数据处理，提高系统性能和可扩展性

## 技术架构

### 前端技术栈
- **框架**: Vue.js 3 + TypeScript
- **图表库**: ECharts 5.x
- **UI 组件**: Element Plus
- **状态管理**: Pinia
- **构建工具**: Vite

### 后端技术栈
- **框架**: Python + FastAPI
- **AI 框架**: TensorFlow/PyTorch
- **差分隐私**: PyDP, TensorFlow Privacy
- **数据库**: PostgreSQL
- **消息队列**: Redis
- **容器化**: Docker + Kubernetes

## 核心功能

### 数据可视化
1. **关系图**: 展示数据之间的关联关系和网络结构
2. **散点图**: 多维度数据分布和聚类结果可视化
3. **数据聚合图**: 数据聚合和统计结果展示
4. **趋势分析图**: 数据变化趋势和预测结果

### ECharts 交互功能
1. **图例筛选**: 通过图例实现数据的多维度筛选
2. **视觉映射**: 视觉映射组件，支持颜色、大小、形状映射
3. **数据区域缩放**: 支持数据区域缩放和漫游
4. **交互事件**: 丰富的交互事件处理
5. **动画效果**: 流畅的动画效果和过渡

### 差分隐私处理
1. **噪声注入**: 在数据中添加差分隐私噪声
2. **隐私预算管理**: 隐私预算的分配和管理
3. **查询响应**: 差分隐私查询响应机制
4. **隐私保护评估**: 隐私保护效果的评估

### AI 分析功能
1. **自动分类**: 基于机器学习的自动数据分类
2. **聚类分析**: 数据聚类和模式识别
3. **预测分析**: 时间序列预测和趋势分析
4. **异常检测**: 异常数据检测和预警

## 技术亮点

- **差分隐私算法**: 实现拉普拉斯噪声、高斯噪声等差分隐私算法
- **分布式计算**: 支持分布式数据处理和模型训练
- **实时可视化**: 实时数据更新和可视化展示
- **隐私保护**: 在数据分析过程中保护用户隐私
- **智能分析**: 自动化的数据分析和洞察`,
        image: '/assets/differential-privacy-ai.svg',
        category: 'frontend',
        tags: ['Vue.js', 'ECharts', 'Python', '差分隐私'],
        github: 'https://github.com/wenhuilan/differential-privacy-ai',
        demo: '/projects/differential-privacy-ai',
        featured: true,
        stars: 156,
        views: 2341,
        screenshots: [
            '/assets/dp-ai-dashboard.png',
            '/assets/dp-ai-visualization.png',
            '/assets/dp-ai-analysis.png',
        ],
        features: [
            '差分隐私保护',
            '智能数据分析',
            '多维度可视化',
            '分布式处理',
            '实时交互',
            '自动分类聚类',
        ],
        challenges: [
            '差分隐私算法实现',
            '大数据量可视化',
            '隐私保护与准确性平衡',
            '分布式系统协调',
        ],
        solutions: [
            '实现多种差分隐私算法',
            'ECharts 大数据渲染优化',
            '自适应隐私预算分配',
            '微服务架构设计',
        ],
    },
    {
        id: 5,
        slug: 'industrial-software',
        title: '工业软件解决方案',
        description: '面向工业领域的软件解决方案，包含设备监控、数据分析、生产管理等功能模块。',
        fullDescription: `工业软件解决方案是一个面向工业领域的综合性软件平台。

## 项目特色

- **设备监控**: 实时监控工业设备运行状态
- **数据分析**: 生产数据分析和趋势预测
- **生产管理**: 生产计划和生产过程管理
- **质量控制**: 产品质量检测和控制
- **报表系统**: 自动生成各类生产报表
- **预警系统**: 设备故障预警和维护提醒

## 技术架构

### 前端技术栈
- **框架**: Vue.js 3 + TypeScript
- **UI 组件**: Element Plus
- **图表库**: ECharts
- **状态管理**: Pinia
- **构建工具**: Vite

### 后端技术栈
- **框架**: Node.js + Express
- **数据库**: MySQL
- **实时通信**: WebSocket
- **消息队列**: Redis
- **文件存储**: 本地存储

## 核心功能

1. **设备管理**: 设备信息管理和状态监控
2. **数据采集**: 实时数据采集和存储
3. **生产计划**: 生产计划制定和执行
4. **质量控制**: 质量检测和异常处理
5. **报表分析**: 数据分析和报表生成
6. **系统管理**: 用户权限和系统配置

## 技术亮点

- **实时监控**: WebSocket 实时数据监控
- **数据可视化**: ECharts 数据可视化展示
- **模块化设计**: 可扩展的模块化架构
- **工业标准**: 符合工业软件标准规范`,
        image: '/assets/industrial-software.svg',
        category: 'fullstack',
        tags: ['Vue.js', 'Node.js', 'MySQL', 'WebSocket'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master/%E5%B7%A5%E4%B8%9A%E8%BD%AF%E4%BB%B6%E9%A1%B9%E7%9B%AE',
        demo: '/projects/industrial-software',
        featured: false,
        stars: 1,
        views: 45,
        screenshots: [
            '/assets/industrial-monitor.png',
            '/assets/industrial-dashboard.png',
            '/assets/industrial-report.png',
        ],
        features: [
            '设备实时监控',
            '生产数据分析',
            '质量控制管理',
            '自动报表生成',
            '故障预警系统',
            '用户权限管理',
        ],
        challenges: [
            '大量设备数据监控',
            '实时数据处理',
            '工业标准兼容',
            '系统稳定性保证',
        ],
        solutions: [
            '分布式数据采集架构',
            'WebSocket 实时通信',
            '符合工业软件标准',
            '高可用性系统设计',
        ],
    },
    {
        id: 6,
        slug: 'myapp-miniprogram',
        title: '招新小程序',
        description: '基于微信小程序的招新管理系统，支持报名、审核、通知等功能，提供便捷的移动端体验。',
        fullDescription: `招新小程序是一个基于微信小程序平台的招新管理系统。

## 项目特色

- **便捷报名**: 一键报名，信息自动填写
- **审核管理**: 在线审核和状态跟踪
- **消息通知**: 微信消息推送通知
- **数据统计**: 报名数据统计和分析
- **用户管理**: 用户信息和权限管理
- **活动管理**: 招新活动创建和管理

## 技术架构

### 前端技术栈
- **框架**: 微信小程序原生开发
- **语言**: JavaScript
- **样式**: WXSS
- **模板**: WXML
- **云开发**: 微信云开发

### 后端技术栈
- **云函数**: 微信云函数
- **数据库**: 云数据库
- **存储**: 云存储
- **消息推送**: 微信消息推送

## 核心功能

1. **用户注册**: 微信授权登录
2. **活动报名**: 在线报名和信息提交
3. **审核流程**: 管理员审核和状态更新
4. **消息通知**: 审核结果和活动通知
5. **数据管理**: 报名数据管理和导出
6. **活动管理**: 招新活动创建和配置

## 技术亮点

- **微信生态**: 深度集成微信生态
- **云开发**: 基于微信云开发平台
- **用户体验**: 流畅的移动端体验
- **数据安全**: 微信官方数据安全保障`,
        image: '/assets/miniprogram-login.png',
        category: 'mobile',
        tags: ['微信小程序', 'JavaScript', '云开发', 'WXML'],
        github: 'https://github.com/wenhuilan/22-QG-headend/tree/master/%E6%8B%9B%E6%96%B0%E5%B0%8F%E7%A8%8B%E5%BA%8F%E9%A1%B9%E7%9B%AE/myApp',
        demo: '/projects/myapp-miniprogram',
        featured: false,
        stars: 1,
        views: 78,
        screenshots: [
            {
                title: '登录界面',
                description: '登录界面',
                image: '/assets/miniprogram-login.png',
            },
            {
                title: '入口界面',
                description: '入口界面',
                image: '/assets/miniprogram-home.png',
            },
            {
                title: '主页界面',
                description: '主页界面',
                image: '/assets/miniprogram-main.png',
            },
            {
                title: '活动界面',
                description: '活动界面',
                image: '/assets/miniprogram-activity.png',
            },
            {
                title: '预约管理界面',
                description: '预约管理界面',
                image: '/assets/miniprogram-appointment.png',
            }
        ],
        features: [
            '微信授权登录',
            '在线报名系统',
            '审核流程管理',
            '消息推送通知',
            '数据统计分析',
            '活动管理配置',
        ],
        challenges: [
            '微信生态集成',
            '云开发架构设计',
            '用户体验优化',
            '数据安全保护',
        ],
        solutions: [
            '深度集成微信 API',
            '基于云开发的架构设计',
            '流畅的移动端交互',
            '微信官方安全机制',
        ],
    },
    {
        id: 7,
        slug: 'ai-chat-assistant',
        title: 'AI Chat Assistant',
        description: '基于 OpenAI API 的智能聊天助手，支持多轮对话、代码高亮、Markdown 渲染等功能。',
        fullDescription: `AI Chat Assistant 是一个基于 OpenAI API 的智能聊天助手，提供自然语言交互体验。

## 项目特色

- **智能对话**: 基于 GPT 模型的多轮对话能力
- **代码高亮**: 支持多种编程语言的语法高亮
- **Markdown 渲染**: 完整的 Markdown 格式支持
- **实时响应**: 流式响应，实时显示生成内容
- **历史记录**: 保存对话历史，支持继续对话
- **多主题**: 支持明暗主题切换

## 技术实现

- **API 集成**: OpenAI GPT API
- **流式响应**: Server-Sent Events (SSE)
- **状态管理**: React Context + useReducer
- **代码高亮**: Prism.js
- **Markdown**: react-markdown
- **UI 框架**: Tailwind CSS + Headless UI

## 核心功能

1. **智能对话**: 支持自然语言交互
2. **代码生成**: 生成各种编程语言的代码
3. **问题解答**: 回答技术问题和概念解释
4. **文本处理**: 文本翻译、总结、润色等
5. **创意写作**: 故事创作、诗歌生成等`,
        image: '/assets/ai-chat.png',
        category: 'frontend',
        tags: ['React', 'OpenAI', 'TypeScript', 'Vite'],
        github: 'https://github.com/yourusername/ai-chat-assistant',
        demo: '/projects/ai-chat-assistant',
        featured: true,
        stars: 89,
        views: 1567,
        screenshots: [
            '/assets/ai-chat-home.png',
            '/assets/ai-chat-conversation.png',
            '/assets/ai-chat-settings.png',
        ],
        features: [
            '智能对话系统',
            '代码高亮显示',
            'Markdown 渲染',
            '流式响应',
            '历史记录',
            '主题切换',
        ],
        challenges: [
            'API 调用优化',
            '流式数据处理',
            '状态管理复杂度',
            '用户体验设计',
        ],
        solutions: [
            '使用 SSE 实现流式响应',
            'React Context 管理全局状态',
            '防抖和节流优化性能',
            '渐进式加载和骨架屏',
        ],
    },
    // 其他项目数据...
];

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        return {
            title: '项目未找到',
        };
    }

    return {
        title: `${project.title} - 项目详情`,
        description: project.description,
        keywords: [...project.tags, '项目详情', '作品集'],
    };
}

export default function ProjectDetailPage({ params }: Props) {
    const project = projects.find(p => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return <ClientProjectDetail project={project} />;
} 