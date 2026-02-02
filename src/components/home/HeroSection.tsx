import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LightRays } from "@/components/ui/light-rays"

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen -mt-16 pt-16 items-center justify-center overflow-hidden">
            <LightRays />

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">


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
