import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

export function AboutHero() {
    return (
        <section className="relative flex flex-col items-center justify-center py-20 px-6 lg:py-32 border-b overflow-hidden">
            {/* Circuit pattern background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            {/* Gradient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-4xl text-center flex flex-col gap-6">
                {/* Badge */}
                <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium text-primary tracking-wide uppercase">
                        Engineering Intelligence
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                    About RaeMox
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We optimize silicon for uncompromised inference. Specialists in Edge AI & Autonomous Systems, delivering intelligence where it matters most: at the source.
                </p>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="h-12 px-8">
                        <Link to="/services">
                            View Expertise
                            <IconArrowRight className="ml-2 size-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="h-12 px-8">
                        <Link to="/blog">Read Whitepaper</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
