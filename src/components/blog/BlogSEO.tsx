import { useEffect } from "react"
import type { BlogPost } from "@/lib/blog/types"

interface BlogSEOProps {
    post: BlogPost
}

export function BlogSEO({ post }: BlogSEOProps) {
    const url = `${window.location.origin}/blog/${post.slug}`
    const imageUrl = post.image.startsWith("http")
        ? post.image
        : `${window.location.origin}${post.image}`

    useEffect(() => {
        // Update document title
        document.title = `${post.title} | RaeMox Blog`

        // Create/update meta tags
        const updateMeta = (name: string, content: string, property = false) => {
            const attr = property ? "property" : "name"
            let meta = document.querySelector(`meta[${attr}="${name}"]`)
            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute(attr, name)
                document.head.appendChild(meta)
            }
            meta.setAttribute("content", content)
        }

        // Basic meta
        updateMeta("description", post.excerpt)
        updateMeta("author", post.authorDetails.map(a => a.name).join(", "))

        // Open Graph
        updateMeta("og:type", "article", true)
        updateMeta("og:title", post.title, true)
        updateMeta("og:description", post.excerpt, true)
        updateMeta("og:url", url, true)
        updateMeta("og:image", imageUrl, true)
        updateMeta("og:site_name", "RaeMox", true)
        updateMeta("article:published_time", post.date, true)

        // Twitter Card
        updateMeta("twitter:card", "summary_large_image")
        updateMeta("twitter:title", post.title)
        updateMeta("twitter:description", post.excerpt)
        updateMeta("twitter:image", imageUrl)

        // JSON-LD structured data
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": imageUrl,
            "datePublished": post.date,
            "author": post.authorDetails.map(author => ({
                "@type": "Person",
                "name": author.name,
                "jobTitle": author.role
            })),
            "publisher": {
                "@type": "Organization",
                "name": "RaeMox",
                "logo": {
                    "@type": "ImageObject",
                    "url": `${window.location.origin}/logo.svg`
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
            }
        }

        let script = document.querySelector('script[type="application/ld+json"]')
        if (!script) {
            script = document.createElement("script")
            script.setAttribute("type", "application/ld+json")
            document.head.appendChild(script)
        }
        script.textContent = JSON.stringify(jsonLd)

        // Cleanup on unmount
        return () => {
            document.title = "RaeMox"
        }
    }, [post, url, imageUrl])

    return null
}
