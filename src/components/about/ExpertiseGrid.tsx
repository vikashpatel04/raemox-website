import { IconCpu, IconStack2, IconCar, IconRocket } from "@tabler/icons-react"

const expertise = [
    {
        icon: IconCpu,
        title: "Qualcomm Architecture",
        description: "Heterogeneous compute optimization across CPU, GPU, and NPU subsystems.",
    },
    {
        icon: IconStack2,
        title: "Full-Stack AI",
        description: "End-to-end implementation from low-level kernel drivers to PyTorch models.",
    },
    {
        icon: IconCar,
        title: "Autonomous Systems",
        description: "Advanced sensor fusion, SLAM, and real-time path planning algorithms.",
    },
    {
        icon: IconRocket,
        title: "Production-Ready",
        description: "OTA-ready infrastructure for deploying updates to distinct vehicle fleets.",
    },
]

export function ExpertiseGrid() {
    return (
        <section className="py-20 px-6 bg-muted/30 border-y">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Expertise</h2>
                    <p className="text-muted-foreground">
                        Technical capabilities that define our engineering stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertise.map((item) => (
                        <div
                            key={item.title}
                            className="group flex flex-col gap-4 p-6 rounded-lg border bg-card hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />

                            <item.icon className="size-10 text-primary" />
                            <div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
