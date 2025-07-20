import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { formatBlogDate } from '@/lib/utils';
import ClientBlogsPage from './ClientBlogsPage';

/**
 * 博客文章接口
 */
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
  readTime: number;
}

/**
 * 博客前置元数据接口
 */
interface BlogFrontMatter {
  title?: string;
  excerpt?: string;
  date?: string;
  category?: string;
  tags?: string[];
  readTime?: number;
}

/**
 * 递归扫描目录中的所有 .md 文件
 * 
 * @param dir - 要扫描的目录路径
 * @param baseDir - 基础目录路径，用于计算相对路径
 * @returns 包含所有 .md 文件信息的数组
 */
function scanMarkdownFiles(dir: string, baseDir: string): Array<{filePath: string, relativePath: string, slug: string}> {
  const results: Array<{filePath: string, relativePath: string, slug: string}> = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        // 递归扫描子目录
        results.push(...scanMarkdownFiles(itemPath, baseDir));
      } else if (item.endsWith('.md')) {
        // 找到 .md 文件
        const relativePath = path.relative(baseDir, itemPath);
        // 生成 slug：使用相对路径，去除 .md 扩展名，将路径分隔符替换为连字符
        const slug = relativePath.replace(/\.md$/, '').replace(/[\/\\]/g, '-');
        
        results.push({
          filePath: itemPath,
          relativePath,
          slug
        });
      }
    });
  } catch (error) {
    console.error(`Error scanning directory ${dir}:`, error);
  }
  
  return results;
}

/**
 * 获取所有博客文章
 * 
 * 支持深层嵌套的单文件模式：
 * - 递归扫描 /content/blogs 目录下的所有 .md 文件
 * - 支持任意深度的文件夹嵌套
 * - 自动生成基于路径的 slug
 * - 支持外部图片引用
 * 
 * 标题处理逻辑：
 * - 如果元数据中有 title，使用元数据中的 title
 * - 如果没有 title，使用文件名（去除 .md 扩展名）作为标题
 */
function getAllBlogs(): BlogPost[] {
  try {
    const contentDir = path.join(process.cwd(), 'src/content/blogs');
    
    if (!fs.existsSync(contentDir)) {
      return [];
    }
    
    // 递归扫描所有 .md 文件
    const markdownFiles = scanMarkdownFiles(contentDir, contentDir);
    const blogPosts: BlogPost[] = [];
    
    markdownFiles.forEach(({ filePath, relativePath, slug }) => {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);
        const frontMatter = data as BlogFrontMatter;
        
        // 标题处理：优先使用元数据中的 title，否则使用文件名
        const fileName = path.basename(filePath, '.md');
        const title = frontMatter.title || fileName;
        
        blogPosts.push({
          id: slug,
          title: title,
          excerpt: frontMatter.excerpt || '',
          date: formatBlogDate(frontMatter.date),
          category: frontMatter.category || '其他',
          tags: frontMatter.tags || [],
          slug: slug,
          readTime: frontMatter.readTime || 5
        });
      } catch (error) {
        console.error(`Error reading blog file ${relativePath}:`, error);
      }
    });
    
    // 按日期排序（最新的在前）
    return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting all blogs:', error);
    return [];
  }
}

/**
 * 博客列表页面（服务端组件）
 * 获取博客数据并传递给客户端组件
 */
export default async function BlogsPage() {
  // 获取博客数据
  const blogPosts = getAllBlogs();
  
  return <ClientBlogsPage initialPosts={blogPosts} />;
}