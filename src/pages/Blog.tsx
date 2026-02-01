import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    BlogHero,
    FilterBar,
    ArticleCard,
    CommunityLinks,
    FeaturedArticleFromMD,
} from "@/components/blog"
import { getAllPosts, getFeaturedPost, getCategories, formatDate } from "@/lib/blog"
import type { Article } from "@/components/blog"

export default function Blog() {
    const [filter, setFilter] = useState("All")

    // Get posts from markdown files
    const allPosts = getAllPosts()
    const featuredPost = getFeaturedPost()
    const categories = getCategories()

    // Filter posts (exclude featured from main grid)
    const filteredPosts = allPosts
        .filter(post => !post.featured || post.slug !== featuredPost?.slug)
        .filter(post => filter === "All" || post.category === filter)

    // Transform to Article type for ArticleCard
    const articles: Article[] = filteredPosts.map(post => ({
        id: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: formatDate(post.date),
        readTime: post.readTime,
        image: post.image,
    }))

    return (
        <main className="flex-1">
            <BlogHero />

            {featuredPost && (
                <FeaturedArticleFromMD post={featuredPost} />
            )}

            <FilterBar
                categories={categories}
                onFilterChange={setFilter}
            />

            {/* Articles Grid */}
            <section className="px-6 pb-12">
                <div className="max-w-7xl mx-auto">
                    {articles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-muted-foreground">
                            No articles found in this category.
                        </div>
                    )}

                    {/* Load More Button - for future pagination */}
                    {articles.length >= 6 && (
                        <div className="mt-12 text-center">
                            <Button variant="outline" size="lg">
                                Load More Articles
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <CommunityLinks />
        </main>
    )
}
