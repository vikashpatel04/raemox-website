import { IconBrain, IconBolt, IconDeviceDesktop } from "@tabler/icons-react"

const features = [
    { icon: IconBrain, title: "NPU Optimization", description: "Deep neural network processing acceleration." },
    { icon: IconBolt, title: "GPU Acceleration", description: "Parallel compute tasks for visual data." },
    { icon: IconDeviceDesktop, title: "Hexagon DSP", description: "Digital signal processing mastery." },
]

export function WhoWeAre() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We are specialists in Qualcomm chipset mastery. Unlike standard integrators who rely on high-level APIs, we leverage every component of the SOC to squeeze maximum performance.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our engineers write custom kernels for the Hexagon DSP and optimize shaders for the Adreno GPU, ensuring your neural networks run faster and cooler than industry baselines.
                            </p>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            {features.map((feature) => (
                                <div
                                    key={feature.title}
                                    className="p-4 rounded-lg bg-card border hover:border-primary transition-colors group"
                                >
                                    <feature.icon className="size-6 text-primary mb-3" />
                                    <h3 className="font-bold text-sm">{feature.title}</h3>
                                    <p className="text-muted-foreground text-xs mt-1 group-hover:text-foreground/70 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image with Terminal Overlay */}
                    <div className="relative h-full min-h-[400px] w-full bg-card rounded-xl border p-2 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                            style={{
                                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBD7Twf1fkgEdeapOYefZ_TfdmziDaguOzFUiguxw6X5Vs6IVQdE1gqVj-LNcbB4kkxg_5XGJ_coksPoGKcKHgDd0fjBvct_GHo3y8itS9Suetj1AxwjTzMY4CEq97Dm3iTK3jleItwBcNN_oWKQjx_4Aqni6AFtpRc_UsVJqy97ggg1JMoUwFJ-hm9vkz9keM3rSwCEsD2e12U8lyr6oUSmfX8VBe0pVzOhAADzN9cy39F9bFzz-Bmc5iU6wWKdwBU_PUr1ehJioRF')"
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                        {/* Terminal Overlay */}
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-xs font-mono text-green-500">SYSTEM_ACTIVE</span>
                            </div>
                            <div className="font-mono text-xs bg-background/50 p-3 rounded border backdrop-blur-md">
                                <div className="text-muted-foreground">&gt; INITIALIZING QC_SOC_DRIVER...</div>
                                <div className="text-muted-foreground">&gt; LOADING HEXAGON_DSP_FIRMWARE...</div>
                                <div className="text-muted-foreground">&gt; NPU_CONTEXT: OPTIMIZED</div>
                                <div className="text-green-500">&gt; LATENCY: 12ms [TARGET MET]</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
