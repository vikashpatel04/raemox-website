import type { BlogPost, BlogFrontmatter } from "./types"

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
function parseFrontmatter(content: string): { data: Record<string, string | boolean>; content: string } {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/
    const match = content.match(frontmatterRegex)

    if (!match) {
        return { data: {}, content }
    }

    const frontmatterBlock = match[1]
    const markdownContent = match[2]

    // Parse simple YAML key: value pairs
    const data: Record<string, string | boolean> = {}
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

    return {
        slug,
        title: frontmatter.title || "Untitled",
        excerpt: frontmatter.excerpt || "",
        category: frontmatter.category || "Uncategorized",
        date: frontmatter.date || new Date().toISOString().split("T")[0],
        readTime: frontmatter.readTime || "5 min read",
        image: frontmatter.image || "",
        author: frontmatter.author || "RaeMox Team",
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
    return posts.filter(post => post.category === category)
}

/**
 * Get unique categories from all posts
 */
export function getCategories(): string[] {
    const posts = getAllPosts()
    const categories = new Set(posts.map(post => post.category))
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
