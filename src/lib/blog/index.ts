import type { BlogPost, BlogFrontmatter } from "./types"
import { getTeamMembers, getDefaultMember } from "../team"

// Import all markdown files from content/blog using Vite's glob import
const blogFiles = import.meta.glob("/content/blog/*.md", {
    eager: true,
    query: "?raw",
    import: "default"
})

/**
 * Simple browser-compatible frontmatter parser
 * Parses YAML-like frontmatter between --- delimiters
 */
function parseFrontmatter(content: string): { data: Record<string, string | boolean | string[]>; content: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
    const match = content.match(frontmatterRegex)

    if (!match) {
        return { data: {}, content }
    }

    const frontmatterBlock = match[1]
    const markdownContent = match[2]

    // Parse simple YAML key: value pairs
    const data: Record<string, string | boolean | string[]> = {}
    const lines = frontmatterBlock.split("\n")

    for (const line of lines) {
        const colonIndex = line.indexOf(":")
        if (colonIndex === -1) continue

        const key = line.slice(0, colonIndex).trim()
        let value = line.slice(colonIndex + 1).trim()

        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1)
        }

        // Parse JSON arrays like ["vikash", "raemox-team"]
        if (value.startsWith("[") && value.endsWith("]")) {
            try {
                const parsed = JSON.parse(value)
                if (Array.isArray(parsed)) {
                    data[key] = parsed
                    continue
                }
            } catch {
                // Not valid JSON, treat as string
            }
        }

        // Parse booleans
        if (value === "true") {
            data[key] = true
        } else if (value === "false") {
            data[key] = false
        } else {
            data[key] = value
        }
    }

    return { data, content: markdownContent }
}

/**
 * Parse a markdown file into a BlogPost object
 */
function parseMarkdownFile(slug: string, content: string): BlogPost {
    const { data, content: markdownContent } = parseFrontmatter(content)
    const frontmatter = data as unknown as BlogFrontmatter

    // Handle both legacy single author and new authors array format
    let authorIds: string[]
    if (frontmatter.authors && Array.isArray(frontmatter.authors)) {
        authorIds = frontmatter.authors
    } else if (frontmatter.author) {
        // Legacy format: try to match author name to team member ID
        // If it's already an ID, use it; otherwise default to "raemox-team"
        authorIds = [frontmatter.author.toLowerCase().replace(/\s+/g, "-")]
    } else {
        authorIds = ["raemox-team"]
    }

    // Resolve author IDs to team member details
    const authorDetails = getTeamMembers(authorIds)
    // If no members found, use default
    const resolvedDetails = authorDetails.length > 0
        ? authorDetails
        : [getDefaultMember()]

    // Handle both legacy single category and new categories array format
    let categories: string[]
    if (frontmatter.categories && Array.isArray(frontmatter.categories)) {
        categories = frontmatter.categories
    } else if (frontmatter.category) {
        categories = [frontmatter.category]
    } else {
        categories = ["Uncategorized"]
    }

    return {
        slug,
        title: frontmatter.title || "Untitled",
        excerpt: frontmatter.excerpt || "",
        categories,
        date: frontmatter.date || new Date().toISOString().split("T")[0],
        readTime: frontmatter.readTime || "5 min read",
        image: frontmatter.image || "",
        authors: authorIds,
        authorDetails: resolvedDetails,
        featured: frontmatter.featured ?? false,
        content: markdownContent,
    }
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPost[] {
    const posts: BlogPost[] = []

    for (const [path, content] of Object.entries(blogFiles)) {
        // Extract slug from path: /content/blog/my-post.md -> my-post
        const slug = path.replace("/content/blog/", "").replace(".md", "")
        const post = parseMarkdownFile(slug, content as string)
        posts.push(post)
    }

    // Sort by date descending
    return posts.sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    )
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
    const path = `/content/blog/${slug}.md`
    const content = blogFiles[path] as string | undefined

    if (!content) return undefined

    return parseMarkdownFile(slug, content)
}

/**
 * Get the featured post (most recent with featured: true)
 */
export function getFeaturedPost(): BlogPost | undefined {
    const posts = getAllPosts()
    return posts.find(post => post.featured) ?? posts[0]
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
    const posts = getAllPosts()
    if (category === "All") return posts
    return posts.filter(post => post.categories.includes(category))
}

/**
 * Get unique categories from all posts
 */
export function getCategories(): string[] {
    const posts = getAllPosts()
    const categories = new Set(posts.flatMap(post => post.categories))
    return ["All", ...Array.from(categories)]
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    })
}
