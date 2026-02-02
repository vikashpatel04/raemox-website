import { Link } from "react-router-dom"
import {
    IconSettings,
    IconBrain,
    IconWaveSine,
    IconEye,
    IconArrowRight
} from "@tabler/icons-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const capabilities = [
    {
        icon: IconSettings,
        title: "Autonomous Systems",
        description: "Navigation stacks, SLAM, and sensor fusion for mobile robotics.",
        tags: ["ROS 2 Native", "Real-time Pathing"],
    },
    {
        icon: IconBrain,
        title: "Language Models",
        description: "Running quantized LLMs directly on-chip for privacy and speed.",
        tags: ["4-bit Quantization", "Offline Inference"],
    },
    {
        icon: IconWaveSine,
        title: "Audio Intelligence",
        description: "Noise cancellation, beamforming, and voice command recognition.",
        tags: ["DSP Optimization", "Wake Word Engines"],
    },
    {
        icon: IconEye,
        title: "Computer Vision",
        description: "High-framerate object detection, tracking, and segmentation.",
        tags: ["NPU Acceleration", "Depth Perception"],
    },
]

export function CapabilitiesGrid() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
                        <p className="text-muted-foreground max-w-lg">
                            Our engineering stack is optimized for low-latency, high-throughput edge environments.
                        </p>
                    </div>
                    <Button variant="link" asChild>
                        <Link to="/services" className="group">
                            Explore all services
                            <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                {/* Capabilities Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap) => (
                        <Card
                            key={cap.title}
                            className="group hover:border-primary/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
                        >
                            <CardHeader className="pb-2">
                                {/* Icon */}
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <cap.icon className="size-6" />
                                </div>
                                <h3 className="text-xl font-bold">{cap.title}</h3>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <p className="text-sm text-muted-foreground mb-4">{cap.description}</p>

                                {/* Tags as unordered list */}
                                <ul className="text-xs text-muted-foreground space-y-1">
                                    {cap.tags.map((tag) => (
                                        <li key={tag} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}


