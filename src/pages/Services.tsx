import { SEOHead } from "@/components/SEOHead"
import {
    ServicesHero,
    ServiceCards,
    ProcessTimeline,
    TechStack,
    ServicesCTA,
} from "@/components/services"

export default function Services() {
    return (
        <>
            <SEOHead
                title="Services"
                url="/services"
                description="RaeMox offers Edge AI consulting, neural network optimization, vSLAM implementation, and robotics engineering. Specialized in Qualcomm NPU, DSP, and HTP architectures."
                keywords={["Edge AI Services", "Neural Network Optimization", "Robotics Consulting", "Qualcomm Development"]}
            />
            <main className="flex-1">
                <ServicesHero />
                <ServiceCards />
                <ProcessTimeline />
                <TechStack />
                <ServicesCTA />
            </main>
        </>
    )
}
