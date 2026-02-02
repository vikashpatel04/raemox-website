import { SEOHead } from "@/components/SEOHead"
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
        <>
            <SEOHead
                title="About Us"
                url="/about"
                description="Learn about RaeMox - an engineering studio at the intersection of AI, robotics, and low-power silicon. Deep expertise in Qualcomm platforms, vSLAM, and autonomous navigation."
                keywords={["About RaeMox", "Edge AI Team", "Robotics Engineers"]}
            />
            <main className="flex-1">
                <AboutHero />
                <MetricsStrip />
                <WhoWeAre />
                <ExpertiseGrid />
                <EdgeFirst />
                <AboutCTA />
            </main>
        </>
    )
}
