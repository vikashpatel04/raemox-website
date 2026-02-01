import { IconBolt, IconCloudOff, IconCheck } from "@tabler/icons-react"

export function EdgeFirst() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                            <IconBolt className="size-4" />
                            Edge-First Philosophy
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Why roundtrip to the cloud?
                        </h2>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Traditional cloud-based AI introduces unacceptable latency and privacy risks. RaeMox architectures process data locally on the edge device, enabling zero-latency decisions critical for safety-critical systems.
                        </p>

                        {/* Benefits */}
                        <ul className="flex flex-col gap-4 mt-2">
                            <li className="flex items-start gap-3">
                                <IconCheck className="size-5 text-primary mt-1" />
                                <div className="flex flex-col">
                                    <span className="font-bold">Privacy Preserved</span>
                                    <span className="text-muted-foreground text-sm">
                                        Raw video and sensor data never leaves the device.
                                    </span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <IconCheck className="size-5 text-primary mt-1" />
                                <div className="flex flex-col">
                                    <span className="font-bold">Offline Capability</span>
                                    <span className="text-muted-foreground text-sm">
                                        Full functionality in tunnels, rural areas, or dead zones.
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Comparison Visual */}
                    <div className="flex-1 w-full bg-card rounded-xl border p-8 relative">
                        <div className="absolute top-4 right-4 text-xs font-mono text-muted-foreground">
                            LATENCY_MONITOR_V1.2
                        </div>

                        <div className="flex flex-col gap-8 mt-4">
                            {/* Cloud Scenario */}
                            <div className="flex flex-col gap-2 opacity-50">
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-sm font-bold">Competitor (Cloud API)</span>
                                    <span className="text-sm font-mono text-destructive">350ms</span>
                                </div>
                                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-gradient-to-r from-destructive/80 to-destructive rounded-full" />
                                </div>
                                <div className="flex justify-between text-[10px] text-muted-foreground font-mono mt-1">
                                    <span>UPLOAD</span>
                                    <span>PROCESSING</span>
                                    <span>DOWNLOAD</span>
                                </div>
                            </div>

                            {/* Edge Scenario (Highlighted) */}
                            <div className="flex flex-col gap-2 relative">
                                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r" />
                                <div className="flex justify-between items-end mb-1">
                                    <span className="text-sm font-bold flex items-center gap-2">
                                        RaeMox (On-Device)
                                        <span className="px-2 py-0.5 rounded text-[10px] bg-primary text-primary-foreground">
                                            OPTIMIZED
                                        </span>
                                    </span>
                                    <span className="text-sm font-mono text-green-500">12ms</span>
                                </div>
                                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                                    <div className="h-full w-[5%] bg-gradient-to-r from-primary to-cyan-500 rounded-full shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
                                </div>
                                <div className="flex justify-start text-[10px] text-primary font-mono mt-1">
                                    <span>LOCAL INFERENCE</span>
                                </div>
                            </div>

                            {/* Bottom Graphics */}
                            <div className="mt-4 pt-6 border-t grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center justify-center p-4 bg-background rounded border border-dashed">
                                    <IconCloudOff className="size-6 text-muted-foreground mb-2" />
                                    <span className="text-xs text-muted-foreground text-center">
                                        No Server dependency
                                    </span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded border border-primary/30">
                                    <IconBolt className="size-6 text-primary mb-2" />
                                    <span className="text-xs text-primary text-center">
                                        Real-time Response
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
