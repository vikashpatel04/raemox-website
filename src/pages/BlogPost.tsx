import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostBySlug, formatDate } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { CodeBlock } from "@/components/blog/CodeBlock"
import { ShareButton } from "@/components/blog/ShareButton"
import { BlogSEO } from "@/components/blog/BlogSEO"
import { IconArrowLeft, IconCalendar, IconClock } from "@tabler/icons-react"
import type { Components } from "react-markdown"

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

    // Use actual image or placeholder
    const imageUrl = post.image.startsWith("http")
        ? post.image
        : post.image.startsWith("/")
            ? post.image  // Use public folder image directly
            : `https://placehold.co/1200x400/1a1a2e/3b82f6?text=${encodeURIComponent(post.title.slice(0, 30))}`

    // Custom components for ReactMarkdown
    const markdownComponents: Components = {
        h2: ({ children, ...props }) => {
            const text = String(children)
            const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
            return <h2 id={id} {...props}>{children}</h2>
        },
        h3: ({ children, ...props }) => {
            const text = String(children)
            const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")
            return <h3 id={id} {...props}>{children}</h3>
        },
        code: ({ className, children, ...props }) => {
            // Check if it's an inline code or code block
            const isBlock = className?.startsWith("language-")
            if (isBlock) {
                return (
                    <CodeBlock className={className}>
                        {String(children).replace(/\n$/, "")}
                    </CodeBlock>
                )
            }
            return <code className={className} {...props}>{children}</code>
        },
        pre: ({ children }) => {
            // The pre wrapper is handled by CodeBlock, just return children
            return <>{children}</>
        }
    }

    return (
        <main className="flex-1">
            {/* SEO */}
            <BlogSEO post={post} />

            {/* Hero */}
            <section className="relative">
                <div
                    className="h-64 md:h-80 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
            </section>

            {/* Content Layout */}
            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
                {/* Back Link - Outside the flex layout */}
                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
                >
                    <IconArrowLeft className="size-4" />
                    Back to Blog
                </Link>

                {/* Main content with TOC - TOC now aligns with content below */}
                <div className="flex gap-8 lg:gap-12">
                    {/* Main Article */}
                    <article className="flex-1 min-w-0 max-w-4xl">
                        <div>
                            {/* Header */}
                            <header className="mb-8">
                                <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        {post.categories.map((cat) => (
                                            <Badge key={cat} variant="secondary">{cat}</Badge>
                                        ))}
                                    </div>
                                    <ShareButton title={post.title} slug={post.slug} />
                                </div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                    {post.title}
                                </h1>

                                {/* Author(s) with Avatars */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex -space-x-2">
                                        {post.authorDetails.map((author) => {
                                            const avatarElement = (
                                                <Avatar key={author.id} className="border-2 border-background size-10 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                                                    <AvatarImage src={author.avatar} alt={author.name} />
                                                    <AvatarFallback className="text-xs">
                                                        {author.name.split(" ").map(n => n[0]).join("")}
                                                    </AvatarFallback>
                                                </Avatar>
                                            )

                                            // Wrap in link if profileUrl exists
                                            if (author.profileUrl) {
                                                const isExternal = author.profileUrl.startsWith("http")
                                                return isExternal ? (
                                                    <a
                                                        key={author.id}
                                                        href={author.profileUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={`View ${author.name}'s profile`}
                                                    >
                                                        {avatarElement}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={author.id}
                                                        to={author.profileUrl}
                                                        title={`View ${author.name}'s profile`}
                                                    >
                                                        {avatarElement}
                                                    </Link>
                                                )
                                            }
                                            return avatarElement
                                        })}
                                    </div>
                                    <div>
                                        <p className="font-medium">
                                            {post.authorDetails.map(a => a.name).join(", ")}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {post.authorDetails.map(a => a.role).join(" & ")}
                                        </p>
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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

                            <Separator className="my-6" />

                            {/* Markdown Content - same max-width as header */}
                            <div className="prose prose-invert max-w-none prose-headings:scroll-mt-20">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]}
                                    components={markdownComponents}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>

                            <Separator className="my-8" />

                            {/* Footer */}
                            <footer>
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
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
                        </div>
                    </article>

                    {/* Sidebar - Table of Contents - Now aligns with title */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32">
                            <TableOfContents content={post.content} />
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-20" />
        </main>
    )
}
