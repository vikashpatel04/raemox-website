import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { IconArrowRight } from "@tabler/icons-react"

export function FeaturedArticle() {
    return (
        <section className="px-6 pb-12">
            <div className="max-w-7xl mx-auto">
                <Link
                    to="/blog/featured"
                    className="group block rounded-xl overflow-hidden bg-card border hover:border-primary/50 transition-all"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Image */}
                        <div
                            className="h-64 md:h-80 w-full bg-cover bg-center relative"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFQOlaPGL5t32mGxRrPcQ63q3oJnx8UsGkgEEbBZNJqaZhmkSjYmU9THNPghfQ3BJqNYmVPI22c2WLZPE0HMHpwUR2Lj7dE5TopsKgW_ECmoYFuVm6E3Ua7IBrYFx_XqpYths41Ycgl2WCPalxj0FFTM9Gd3zJjdHVoHSjBOAbILbnA_3qBbksdKDPO-XP304hAj0e9rDog1v8bI7za4GDDIM7i5eIsfBF7-OvaVhR1WS-R26cJyznZAtoU9SEC5ozYklNE_lgpi50')"
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <Badge variant="default" className="text-xs">Featured</Badge>
                                <Badge variant="secondary" className="text-xs">Research</Badge>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                                Heterogeneous Compute for Edge AI: A Practical Guide
                            </h2>

                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                An in-depth look at distributing AI workloads across CPU, GPU, DSP, and NPU to achieve optimal performance and power efficiency on mobile chipsets.
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="text-sm text-muted-foreground">
                                    <span>RaeMox Team</span>
                                    <span className="mx-2">•</span>
                                    <span>Nov 15, 2023</span>
                                    <span className="mx-2">•</span>
                                    <span>15 min read</span>
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
