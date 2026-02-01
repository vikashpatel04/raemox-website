import {
    AboutHero,
    MetricsStrip,
    WhoWeAre,
    ExpertiseGrid,
    EdgeFirst,
    AboutCTA,
} from "@/components/about"

export default function About() {
    return (
        <main className="flex-1">
            <AboutHero />
            <MetricsStrip />
            <WhoWeAre />
            <ExpertiseGrid />
            <EdgeFirst />
            <AboutCTA />
        </main>
    )
}
