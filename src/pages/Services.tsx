import {
    ServicesHero,
    ServiceCards,
    ProcessTimeline,
    TechStack,
    ServicesCTA,
} from "@/components/services"

export default function Services() {
    return (
        <main className="flex-1">
            <ServicesHero />
            <ServiceCards />
            <ProcessTimeline />
            <TechStack />
            <ServicesCTA />
        </main>
    )
}
