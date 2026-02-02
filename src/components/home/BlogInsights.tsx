import { Link } from "react-router-dom"
import { getAllPosts, getFeaturedPost, formatDate } from "@/lib/blog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function BlogInsights() {
    const allPosts = getAllPosts()
    const featuredPost = getFeaturedPost()

    // Get latest 3 posts, excluding the featured post
    const latestPosts = allPosts
        .filter(post => post.slug !== featuredPost?.slug)
        .slice(0, 3)

    // Transform for display
    const articles = latestPosts.map(post => ({
        slug: post.slug,
        category: (post.categories[0] || "Uncategorized").toUpperCase(),
        title: post.title,
        excerpt: post.excerpt,
        date: formatDate(post.date),
        readTime: post.readTime,
        image: post.image,
    }))

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
                    <Button variant="link" asChild className="hidden md:inline-flex">
                        <Link to="/blog">View All Articles</Link>
                    </Button>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            to={`/blog/${article.slug}`}
                            className="group"
                        >
                            <Card className="h-full border-0 ring-0 bg-transparent flex flex-col">
                                {/* Image */}
                                <div className="h-48 w-full bg-muted rounded-xl overflow-hidden mb-4 relative flex-shrink-0">
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('${article.image}')` }}
                                    />
                                    <Badge className="absolute top-4 left-4" variant="secondary">
                                        {article.category}
                                    </Badge>
                                </div>

                                <CardContent className="p-0 flex flex-col flex-grow">
                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-3 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    {/* Meta - pushed to bottom */}
                                    <div className="mt-4 flex items-center text-xs text-muted-foreground">
                                        <span>{article.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Button variant="link" asChild>
                        <Link to="/blog">View All Articles</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}



