import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostBySlug, formatDate } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { IconArrowLeft, IconCalendar, IconClock, IconUser } from "@tabler/icons-react"

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>()
    const post = slug ? getPostBySlug(slug) : undefined

    if (!post) {
        return (
            <main className="flex-1 flex items-center justify-center py-20">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <p className="text-muted-foreground mb-8">
                        The article you're looking for doesn't exist.
                    </p>
                    <Button asChild>
                        <Link to="/blog">Back to Blog</Link>
                    </Button>
                </div>
            </main>
        )
    }

    // Use placeholder if image path is relative
    const imageUrl = post.image.startsWith("http")
        ? post.image
        : `https://placehold.co/1200x400/1a1a2e/3b82f6?text=${encodeURIComponent(post.title.slice(0, 30))}`

    return (
        <main className="flex-1">
            {/* Hero */}
            <section className="relative">
                <div
                    className="h-64 md:h-80 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
            </section>

            {/* Content */}
            <article className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
                {/* Back Link */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                    <IconArrowLeft className="size-4" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-8">
                    <Badge variant="secondary" className="mb-4">{post.category}</Badge>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <IconUser className="size-4" />
                            {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                            <IconCalendar className="size-4" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                            <IconClock className="size-4" />
                            {post.readTime}
                        </span>
                    </div>
                </header>

                {/* Markdown Content */}
                <div className="prose max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Footer */}
                <footer className="mt-12 pt-8 border-t">
                    <div className="flex justify-between items-center">
                        <Button asChild variant="outline">
                            <Link to="/blog">
                                <IconArrowLeft className="size-4 mr-2" />
                                All Articles
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link to="/contact">Start a Project</Link>
                        </Button>
                    </div>
                </footer>
            </article>

            {/* Bottom Spacing */}
            <div className="h-20" />
        </main>
    )
}
