import { SEOHead } from "@/components/SEOHead"
import {
    HeroSection,
    TrustIndicators,
    CapabilitiesGrid,
    EdgeAdvantage,
    CaseStudy,
    BlogInsights,
} from "@/components/home"

export default function Home() {
    return (
        <>
            <SEOHead
                url="/"
                description="RaeMox is an engineering studio focused on building intelligence for constrained machines. We specialize in Edge AI, robotics, and Qualcomm platform optimization."
            />
            <main className="flex-1">
                <HeroSection />
                <TrustIndicators />
                <CapabilitiesGrid />
                <EdgeAdvantage />
                <CaseStudy />
                <BlogInsights />
            </main>
        </>
    )
}
