import {
    IconCompass,
    IconCpu,
    IconWaveSine,
    IconEye,
    IconCircleCheck
} from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"

const services = [
    {
        icon: IconCompass,
        bgIcon: IconCompass,
        title: "Autonomous Navigation & VSLAM",
        description: "Precision mapping and path planning for complex environments. We build robust navigation stacks that operate independently of GPS.",
        deliverables: [
            "Custom SLAM Implementation",
            "Multi-Sensor Fusion Algorithms",
            "Obstacle Avoidance Logic",
        ],
        techStack: ["ROS2", "Nav2", "Cartographer"],
    },
    {
        icon: IconCpu,
        bgIcon: IconCpu,
        title: "LLM & SLM Optimization",
        description: "On-device small language models tailored for speed and privacy. We squeeze intelligence into constrained hardware.",
        deliverables: [
            "4-bit Quantization & Pruning",
            "Custom Domain Finetuning",
            "RAG Pipeline for Edge",
        ],
        techStack: ["Llama 3", "Qualcomm NPU", "PyTorch"],
    },
    {
        icon: IconWaveSine,
        bgIcon: IconWaveSine,
        title: "Audio Intelligence (ASR/TTS)",
        description: "Natural voice interaction systems. Enable your hardware to listen, understand, and speak with human-like latency.",
        deliverables: [
            "Wake Word Detection",
            "Offline Speech-to-Text",
            "Real-time Neural TTS",
        ],
        techStack: ["Whisper", "Piper", "ONNX"],
    },
    {
        icon: IconEye,
        bgIcon: IconEye,
        title: "Computer Vision Systems",
        description: "High-performance visual perception. From object detection to complex scene understanding, processed entirely on the edge.",
        deliverables: [
            "Custom Model Architecture",
            "Depth Estimation",
            "Latency Optimization",
        ],
        techStack: ["YOLOv10", "OpenCV", "TensorRT"],
    },
]

export function ServiceCards() {
    return (
        <section className="px-6 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-3">Core Technical Capabilities</h2>
                    <p className="text-muted-foreground max-w-xl">
                        End-to-end development services tailored for intelligent edge systems, optimized for performance and low latency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group relative flex flex-col bg-card rounded-xl border hover:border-primary/50 transition-all duration-300 overflow-hidden"
                        >
                            {/* Background Icon */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <service.bgIcon className="size-28 text-primary" />
                            </div>

                            <div className="p-8 flex flex-col h-full z-10">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <service.icon className="size-6" />
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Deliverables */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                        What We Deliver
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.deliverables.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm">
                                                <IconCircleCheck className="size-4 text-primary mt-0.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="mt-auto pt-6 border-t">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-3">
                                        Technology Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech) => (
                                            <Badge key={tech} variant="secondary" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
