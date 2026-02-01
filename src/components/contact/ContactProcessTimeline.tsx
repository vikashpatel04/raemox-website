import { IconMessageCircle, IconFileAnalytics, IconRocket } from "@tabler/icons-react"

const steps = [
    {
        icon: IconMessageCircle,
        number: "01",
        title: "Initial Consultation",
        description: "We'll discuss your project requirements, hardware constraints, and desired outcomes.",
    },
    {
        icon: IconFileAnalytics,
        number: "02",
        title: "Technical Assessment",
        description: "Our engineers will analyze feasibility and provide a detailed proposal with timeline.",
    },
    {
        icon: IconRocket,
        number: "03",
        title: "Development Kickoff",
        description: "Once approved, we begin iterative development with regular milestone updates.",
    },
]

export function ContactProcessTimeline() {
    return (
        <section className="py-16 px-6 bg-muted/30 border-y">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">What Happens Next?</h2>
                    <p className="text-muted-foreground">Our proven engagement process.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative flex flex-col items-center text-center"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-border" />
                            )}

                            {/* Icon */}
                            <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-4 relative z-10">
                                <step.icon className="size-8 text-primary" />
                            </div>

                            {/* Number */}
                            <span className="text-xs font-mono text-primary mb-2">{step.number}</span>

                            {/* Content */}
                            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
