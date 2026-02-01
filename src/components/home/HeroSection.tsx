import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function HeroSection() {
    return (
        <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center">
            {/* Background with grid pattern */}
            <div
                className="absolute inset-0 z-0 opacity-30 dark:opacity-20"
                style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 mb-6 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        System Online v2.4
                    </span>
                </div>

                {/* Main Headline */}
                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                    Engineering Intelligence for{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                        Edge Devices
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="max-w-2xl text-lg text-muted-foreground mb-10">
                    Specialized AI & Robotics consultancy for Qualcomm architectures. We optimize neural networks to run locally where it matters most.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button asChild size="lg" className="h-12 px-8 text-base font-bold">
                        <Link to="/services">View Solutions</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-medium">
                        <Link to="/about">Our Technology</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
