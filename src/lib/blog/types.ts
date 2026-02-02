/**
 * Blog types and interfaces
 */

import type { TeamMember } from "../team/types"

export interface BlogPost {
    slug: string
    title: string
    excerpt: string
    categories: string[]            // Array of category strings
    date: string
    readTime: string
    image: string
    authors: string[]              // Array of team member IDs
    authorDetails: TeamMember[]    // Resolved team member objects
    featured: boolean
    content: string
}

export interface BlogFrontmatter {
    title: string
    excerpt: string
    category?: string         // Legacy single category
    categories?: string[]     // New array format
    date: string
    readTime: string
    image: string
    author?: string       // Legacy single author
    authors?: string[]    // New array format
    featured?: boolean
}

