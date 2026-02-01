import {
    IconSearch,
    IconBuildingArch,
    IconRocket,
    IconTool
} from "@tabler/icons-react"

const steps = [
    {
        icon: IconSearch,
        title: "Discovery",
        description: "Requirement Analysis & Hardware Selection",
        active: true,
    },
    {
        icon: IconBuildingArch,
        title: "Architecture",
        description: "System Design & Model Selection",
        active: false,
    },
    {
        icon: IconRocket,
        title: "Deployment",
        description: "Edge Implementation & Optimization",
        active: false,
    },
    {
        icon: IconTool,
        title: "Support",
        description: "OTA Updates & Maintenance",
        active: false,
    },
]

export function ProcessTimeline() {
    return (
        <section className="py-20 px-6 bg-muted/30 border-y">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-3">Deployment Process</h2>
                    <p className="text-muted-foreground">From concept to continuous integration.</p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step) => (
                            <div key={step.title} className="group flex flex-col items-center text-center">
                                {/* Icon Circle */}
                                <div
                                    className={`w-16 h-16 rounded-full bg-background border-2 flex items-center justify-center mb-4 transition-all
                                        ${step.active
                                            ? "border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                            : "border-border text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                        }`}
                                >
                                    <step.icon className="size-6" />
                                </div>

                                {/* Content */}
                                <div className="bg-card md:bg-transparent p-4 rounded-lg w-full">
                                    <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
