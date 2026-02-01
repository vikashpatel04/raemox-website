/**
 * Blog types and interfaces
 */

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
    author: string
    featured: boolean
    content: string
}

export interface BlogFrontmatter {
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
    author: string
    featured?: boolean
}
