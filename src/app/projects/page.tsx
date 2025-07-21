import { Metadata } from 'next';
import ClientProjectsPage from './ClientProjectsPage';

export const metadata: Metadata = {
    title: '项目展示 - Oxygen Blog Platform',
    description: '探索我的项目作品集，包含前端开发、全栈应用、移动端开发等多个领域的项目展示。',
    keywords: '项目展示, 作品集, 前端开发, 全栈应用, React, Next.js',
};

export default function ProjectsPage() {
    return <ClientProjectsPage />;
}