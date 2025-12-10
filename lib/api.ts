const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const fetchOptions: RequestInit = { 
  cache: 'no-store',
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
};

// ========================================
// BLOG API
// ========================================

function isValidBlogPost(post: any): post is BlogPost {
  return (
    post &&
    typeof post.id === 'number' &&
    typeof post.slug === 'string' &&
    typeof post.title === 'string'
  );
}

export interface BlogAuthor {
  id: number | string;
  name: string;
  email: string;
  avatar?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string | null;
  categories: BlogCategory[];
  pinned: boolean;
  authors: BlogAuthor[];
  created_at: string;
  updated_at: string;
}

export async function getCategories(): Promise<BlogCategory[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`, fetchOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export interface TechStack {
  id: string;
  name: string;
  icon: string;
}

export async function getTechStack(): Promise<TechStack[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/languages`, fetchOptions);
    if (!response.ok) {
      throw new Error('Failed to fetch tech stack');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching tech stack:', error);
    return [];
  }
}

export async function getBlogPosts(categoryId?: string): Promise<BlogPost[]> {
  try {
    const url = categoryId 
      ? `${API_BASE_URL}/blogs?category_id=${encodeURIComponent(categoryId)}`
      : `${API_BASE_URL}/blogs`;
    
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }

    const data = await response.json();
    return Array.isArray(data) ? data.filter(isValidBlogPost) : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`, fetchOptions);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch blog post');
    }

    const data = await response.json();
    return isValidBlogPost(data) ? data : null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const posts = await getBlogPosts();
    return posts
      .filter(post => post.slug && post.slug.trim().length > 0)
      .map(post => post.slug);
  } catch (error) {
    console.error('Error fetching blog slugs:', error);
    return [];
  }
}

// ========================================
// PROJECTS API
// ========================================

export interface ProjectLanguage {
  id: string;
  icon: string;
  name: string;
}

export interface ProjectAuthor {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string | null;
  link: string | null;
  category: string | null;
  languages: ProjectLanguage[];
  authors: ProjectAuthor[];
  created_at: string;
  updated_at: string;
}

function isValidProject(project: any): project is Project {
  return (
    project &&
    typeof project.id === 'string' &&
    typeof project.title === 'string'
  );
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, fetchOptions);

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    const data = await response.json();
    return Array.isArray(data) ? data.filter(isValidProject) : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${id}`, fetchOptions);

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error('Failed to fetch project');
    }

    const data = await response.json();
    return isValidProject(data) ? data : null;
  } catch (error) {
    console.error('Error fetching project:', error);
    return null;
  }
}

