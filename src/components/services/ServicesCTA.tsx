import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function ServicesCTA() {
    return (
        <section className="px-6 py-20 bg-muted/50">
            <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary/20 to-card border p-8 md:p-12 text-center relative overflow-hidden">
                {/* Decorative blurs */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/30 rounded-full blur-[60px]" />
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px]" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Build the Future?
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 max-w-xl">
                        Partner with RaeMox to integrate cutting-edge robotics and AI into your next hardware product.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Button asChild size="lg" className="h-12 px-8">
                            <Link to="/contact">Start a Project</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-12 px-8">
                            <Link to="/contact">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
