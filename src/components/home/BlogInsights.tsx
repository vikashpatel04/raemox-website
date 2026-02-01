import { Link } from "react-router-dom"

const articles = [
    {
        category: "ENGINEERING",
        title: "Optimizing NPU Usage in Mobile Robots",
        excerpt: "Why relying solely on the GPU is a mistake for battery-powered devices, and how to shift workloads effectively.",
        date: "Oct 24, 2023",
        readTime: "5 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC80qANkZDCXMPw0fnHkugonWXj6eChduyXuyLM7iIpm_ZVkJKXoHHI-mHa1AH0YC6Ba-erk3qSYvPlV-Ekt0BqvTKHJtduymJ2iGzfI62g5mU2hf6S3lP3Nfpv_Hjwl6NbeETnmz6z46byLh4LIyES40tCSfHPB3TrVr0AgpmlYgShgQAO0nRZf-W90-0NwTXfRJ475JBwIEPYryMGYoAJpflhMaB_WEATC4CQibA4c0UsIi5kTc-yB8wrmzUJKUdhzk4KoQ4dVk3I"
    },
    {
        category: "INDUSTRY",
        title: "The Future of RISC-V in Edge AI",
        excerpt: "Exploring the open standard architecture and its potential to disrupt the current embedded systems market.",
        date: "Oct 12, 2023",
        readTime: "8 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS4a51qOdkBMfwHyOslgZQewsJTuMTUo2joRw5SwldmlY1tOyLrOlhqa_qpM1-taT8DCzXmmPjjMwnU05mo5jj64wjPsNv-qUkBZ1P8YElRLRiXLzNafhwLpbmUOcpFk_WbUhdt9sGRiS-VjTThkULraezq7nMDoaYS25Msr6F_ChPoev6r9tfk3v-dDegzDdnfvgi-Cqv5mcV4FQko2VzZw_2Nikhgj6jzTckwlV_phocMgS_6mchJe9l9PnEFyFehmIVham-Rj-d"
    },
    {
        category: "TUTORIAL",
        title: "Implementing Voice UI Offline",
        excerpt: "A guide to setting up a wake-word engine that respects user privacy by never sending audio to the cloud.",
        date: "Sep 28, 2023",
        readTime: "12 min read",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSivzsEYCoySuqCzws1qWGQaxoooQXU6SJ6_loWvD3oMiW85UYHDWmOqAIeh_EQTFjHwe15N_uNvnorqTWTJi2VuNFJqB-HYZJ-3ou9s3xY21SbB0zdGdpygqBSJ7iSJLb8cYBybLcHgF7XXUNbMPR9fbS7cUbyWqYey0g64loz-ZtTSypTrdrelH_YslXzxCzoqM8IBknzl0zIPV3fj-CZMyixv75wTh-tyinqZ8AXJlXj1J8iW9P0Wcxr6JKsG_jJ4yBaq3uYdWY"
    },
]

export function BlogInsights() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
                    <Link
                        to="/blog"
                        className="hidden md:inline-block text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Articles
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <article key={article.title} className="flex flex-col group cursor-pointer">
                            {/* Image */}
                            <div className="h-48 w-full bg-muted rounded-xl overflow-hidden mb-4 relative">
                                <div
                                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${article.image}')` }}
                                />
                                <div className="absolute top-4 left-4 bg-background/70 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-muted-foreground text-sm line-clamp-3">
                                {article.excerpt}
                            </p>

                            {/* Meta */}
                            <div className="mt-4 flex items-center text-xs text-muted-foreground">
                                <span>{article.date}</span>
                                <span className="mx-2">•</span>
                                <span>{article.readTime}</span>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile View All */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        to="/blog"
                        className="inline-block text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    )
}
