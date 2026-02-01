import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

export interface Article {
    id: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: string
}

interface ArticleCardProps {
    article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
    return (
        <Link
            to={`/blog/${article.id}`}
            className="group flex flex-col rounded-xl overflow-hidden bg-card border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
        >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden relative">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-[10px] backdrop-blur-sm bg-background/80">
                        {article.category}
                    </Badge>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                </div>
            </div>
        </Link>
    )
}
