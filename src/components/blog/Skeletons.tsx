import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function ArticleCardSkeleton() {
    return (
        <Card className="overflow-hidden">
            {/* Image skeleton */}
            <Skeleton className="h-48 w-full rounded-none" />

            <CardContent className="p-4">
                {/* Category badge */}
                <Skeleton className="h-5 w-20 mb-3" />

                {/* Title */}
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-3" />

                {/* Excerpt */}
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6 mb-4" />

                {/* Meta */}
                <div className="flex items-center gap-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                </div>
            </CardContent>
        </Card>
    )
}

export function FeaturedArticleSkeleton() {
    return (
        <section className="px-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="rounded-xl overflow-hidden bg-card border">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Image skeleton */}
                        <Skeleton className="h-64 md:h-80 w-full" />

                        {/* Content skeleton */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-6 w-24" />
                            </div>

                            <Skeleton className="h-8 w-full mb-2" />
                            <Skeleton className="h-8 w-4/5 mb-4" />

                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-full mb-1" />
                            <Skeleton className="h-4 w-3/4 mb-6" />

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Skeleton className="h-4 w-24" />
                                    <Skeleton className="h-4 w-20" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                                <Skeleton className="h-4 w-16" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <ArticleCardSkeleton key={i} />
            ))}
        </div>
    )
}

export function BlogPostSkeleton() {
    return (
        <main className="flex-1">
            {/* Hero skeleton */}
            <section className="relative">
                <Skeleton className="h-64 md:h-80 w-full" />
            </section>

            {/* Content layout */}
            <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
                <Skeleton className="h-4 w-32 mb-6" />

                <div className="flex gap-8 lg:gap-12">
                    {/* Main article */}
                    <article className="flex-1 min-w-0 max-w-4xl">
                        <div className="flex items-center gap-2 mb-4">
                            <Skeleton className="h-6 w-24" />
                            <Skeleton className="h-6 w-20" />
                        </div>

                        <Skeleton className="h-12 w-full mb-2" />
                        <Skeleton className="h-12 w-4/5 mb-6" />

                        <div className="flex items-center gap-4 mb-4">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div>
                                <Skeleton className="h-4 w-32 mb-1" />
                                <Skeleton className="h-3 w-24" />
                            </div>
                        </div>

                        <div className="flex gap-4 mb-6">
                            <Skeleton className="h-4 w-28" />
                            <Skeleton className="h-4 w-20" />
                        </div>

                        <Skeleton className="h-px w-full my-6" />

                        {/* Content skeleton */}
                        <div className="space-y-4">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-8 w-1/2 mt-6" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </article>

                    {/* Sidebar skeleton */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-32">
                            <Skeleton className="h-4 w-24 mb-4" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6" />
                                <Skeleton className="h-4 w-4/5 ml-4" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-2/3 ml-4" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="h-20" />
        </main>
    )
}
