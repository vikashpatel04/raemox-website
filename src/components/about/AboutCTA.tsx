import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

export function AboutCTA() {
    return (
        <section className="py-20 px-6 border-t">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Let's Optimize Your Hardware
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Partner with RaeMox to unlock the full potential of your edge compute platform and bring production-ready AI to your products.
                </p>
                <Button asChild size="lg" className="h-12 px-8">
                    <Link to="/contact">
                        Start a Project
                        <IconArrowRight className="ml-2 size-4" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
