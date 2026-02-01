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
        <main className="flex-1">
            <HeroSection />
            <TrustIndicators />
            <CapabilitiesGrid />
            <EdgeAdvantage />
            <CaseStudy />
            <BlogInsights />
        </main>
    )
}
