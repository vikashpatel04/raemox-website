import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function ServicesHero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
                <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600 rounded-full blur-[100px] mix-blend-screen" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
                {/* Status Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border text-xs font-medium text-primary">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    Now Available for Edge Deployment
                </span>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight">
                    Services & Capabilities
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
                    Comprehensive AI & Robotics Solutions for Edge Devices. Empowering the next generation of autonomous hardware with precision and intelligence.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button asChild size="lg" className="h-12 px-8">
                        <Link to="/contact">Explore Solutions</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link to="/blog">View Case Studies</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
