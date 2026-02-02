import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { IconArrowRight } from "@tabler/icons-react"
import type { BlogPost } from "@/lib/blog/types"
import { formatDate } from "@/lib/blog"

interface FeaturedArticleFromMDProps {
    post: BlogPost
}

export function FeaturedArticleFromMD({ post }: FeaturedArticleFromMDProps) {
    // Use actual image path - images starting with "/" are from public folder
    const imageUrl = post.image.startsWith("http")
        ? post.image
        : post.image.startsWith("/")
            ? post.image  // Use public folder image directly
            : `https://placehold.co/800x400/1a1a2e/3b82f6?text=${encodeURIComponent(post.title.slice(0, 20))}`

    return (
        <section className="px-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <Link
                    to={`/blog/${post.slug}`}
                    className="group block rounded-xl overflow-hidden bg-card border hover:border-primary/50 transition-all"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div
                            className="h-64 md:h-80 w-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url('${imageUrl}')` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4 flex-wrap">
                                <Badge variant="default" className="text-xs">Featured</Badge>
                                {post.categories.map((cat) => (
                                    <Badge key={cat} variant="secondary" className="text-xs">{cat}</Badge>
                                ))}
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    <span>{post.authorDetails.map(a => a.name).join(", ")}</span>
                                    <span className="mx-2">•</span>
                                    <span>{formatDate(post.date)}</span>
                                    <span className="mx-2">•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read
                                    <IconArrowRight className="size-4" />
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}
