import { useState } from "react"
import { SEOHead } from "@/components/SEOHead"
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
    const [searchQuery, setSearchQuery] = useState("")

    // Get posts from markdown files
    const allPosts = getAllPosts()
    const featuredPost = getFeaturedPost()
    const categories = getCategories()

    // Only show featured section when "All" is selected and no search
    const showFeaturedSection = filter === "All" && !searchQuery && featuredPost

    // Filter posts - only exclude featured from grid when showing featured section
    const filteredPosts = allPosts
        .filter(post => {
            // Exclude featured post from grid only when featured section is shown
            if (showFeaturedSection && post.slug === featuredPost?.slug) {
                return false
            }
            return true
        })
        .filter(post => filter === "All" || post.categories.includes(filter))
        .filter(post => {
            if (!searchQuery) return true
            const query = searchQuery.toLowerCase()
            return (
                post.title.toLowerCase().includes(query) ||
                post.excerpt.toLowerCase().includes(query) ||
                post.categories.some(cat => cat.toLowerCase().includes(query))
            )
        })

    // Transform to Article type for ArticleCard
    const articles: Article[] = filteredPosts.map(post => ({
        id: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.categories[0] || "Uncategorized",  // Use first category for card
        date: formatDate(post.date),
        readTime: post.readTime,
        image: post.image,
    }))

    return (
        <>
            <SEOHead
                title="Blog"
                url="/blog"
                description="Explore RaeMox's insights on Edge AI, robotics, vSLAM, and Qualcomm platform optimization. Technical articles on neural networks, autonomous navigation, and embedded systems."
                keywords={["Edge AI Blog", "Robotics Articles", "Qualcomm Development", "vSLAM Tutorials"]}
            />
            <main className="flex-1">
                <BlogHero />

                {showFeaturedSection && (
                    <FeaturedArticleFromMD post={featuredPost} />
                )}

                <FilterBar
                    categories={categories}
                    onFilterChange={setFilter}
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
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
        </>
    )
}
