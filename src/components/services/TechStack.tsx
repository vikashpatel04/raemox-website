import {
    IconCpu,
    IconDeviceDesktop,
    IconBrandPython,
    IconRobot,
    IconBrain,
    IconMicrophone,
    IconEye
} from "@tabler/icons-react"

const technologies = [
    { name: "Qualcomm NPU", icon: IconCpu },
    { name: "NVIDIA Jetson", icon: IconDeviceDesktop },
    { name: "PyTorch", icon: IconBrandPython },
    { name: "ROS2 Humble", icon: IconRobot },
    { name: "Llama 3", icon: IconBrain },
    { name: "Whisper", icon: IconMicrophone },
    { name: "YOLO", icon: IconEye },
]

export function TechStack() {
    return (
        <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold mb-4">Optimized for Leading Hardware</h3>
                    <p className="text-muted-foreground">
                        Our solutions are hardware-agnostic but highly optimized for specific edge compute platforms to ensure maximum performance per watt.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 md:w-2/3 justify-start md:justify-end">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-card border pl-3 pr-4 hover:border-primary/50 transition-colors"
                        >
                            <tech.icon className="size-5 text-primary" />
                            <p className="text-sm font-medium">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
