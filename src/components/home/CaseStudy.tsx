import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { IconArrowRight } from "@tabler/icons-react"

export function CaseStudy() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Study</h2>
                    <p className="text-muted-foreground">Real-world application of RaeMox engineering.</p>
                </div>

                {/* Case Study Card */}
                <div className="rounded-2xl overflow-hidden bg-card border">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* Image */}
                        <div
                            className="h-64 md:h-auto min-h-[300px] w-full bg-cover bg-center relative"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFQOlaPGL5t32mGxRrPcQ63q3oJnx8UsGkgEEbBZNJqaZhmkSjYmU9THNPghfQ3BJqNYmVPI22c2WLZPE0HMHpwUR2Lj7dE5TopsKgW_ECmoYFuVm6E3Ua7IBrYFx_XqpYths41Ycgl2WCPalxj0FFTM9Gd3zJjdHVoHSjBOAbILbnA_3qBbksdKDPO-XP304hAj0e9rDog1v8bI7za4GDDIM7i5eIsfBF7-OvaVhR1WS-R26cJyznZAtoU9SEC5ozYklNE_lgpi50')"
                            }}
                        >
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-primary font-bold text-sm mb-2">
                                AEROSPACE & LOGISTICS
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">
                                Drone Fleet Optimization
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                We helped a major logistics partner reduce drone battery consumption by 32% while increasing obstacle avoidance accuracy using a custom quantization of the YOLOv8 model running entirely on the flight controller.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <Badge variant="secondary">Computer Vision</Badge>
                                <Badge variant="secondary">Power Mgmt</Badge>
                                <Badge variant="secondary">Snapdragon Flight</Badge>
                            </div>

                            {/* Link */}
                            <Link
                                to="/blog"
                                className="inline-flex items-center font-medium hover:text-primary transition-colors"
                            >
                                Read Case Study
                                <IconArrowRight className="ml-2 size-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
