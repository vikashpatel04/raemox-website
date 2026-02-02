import { IconCpu, IconLayoutGrid, IconDeviceDesktop } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"

export function EdgeAdvantage() {
    return (
        <section className="py-24 bg-muted/30 border-y">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div>
                        <Badge variant="secondary" className="mb-4">
                            ARCHITECTURE v3.0
                        </Badge>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            The Edge Advantage
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg">
                            <p>
                                Cloud processing is no longer sufficient for the demands of real-time robotics. Latency kills functionality.
                            </p>
                            <p>
                                We believe in pushing intelligence to the absolute edge. By utilizing heterogeneous compute architectures—balancing loads between CPU, GPU, DSP, and NPU—we achieve performance per watt that others can't match.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-8">
                            <div>
                                <div className="text-2xl font-bold">40%</div>
                                <div className="text-xs text-muted-foreground uppercase">Lower Latency</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">2.5x</div>
                                <div className="text-xs text-muted-foreground uppercase">Battery Life</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-xs text-muted-foreground uppercase">Privacy</div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Diagram */}
                    <div className="relative h-[400px] w-full rounded-2xl overflow-hidden bg-card border flex items-center justify-center p-8">
                        {/* Gradient glow */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: "radial-gradient(circle at 30% 30%, hsl(var(--primary)) 0%, transparent 40%)" }}
                        />

                        <div className="relative w-full h-full flex flex-col justify-between">
                            {/* Status bar */}
                            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                                <span>INPUT: CAM_01</span>
                                <span>STATUS: OK</span>
                            </div>

                            {/* Compute units */}
                            <div className="grid grid-cols-3 gap-4 h-32 my-auto">
                                <div className="border border-primary/30 rounded bg-primary/5 flex flex-col items-center justify-center gap-2">
                                    <IconCpu className="size-6 text-primary" />
                                    <span className="text-[10px] text-primary font-mono">NPU</span>
                                </div>
                                <div className="border rounded flex flex-col items-center justify-center gap-2 opacity-50">
                                    <IconLayoutGrid className="size-6 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground font-mono">DSP</span>
                                </div>
                                <div className="border rounded flex flex-col items-center justify-center gap-2 opacity-50">
                                    <IconDeviceDesktop className="size-6 text-muted-foreground" />
                                    <span className="text-[10px] text-muted-foreground font-mono">CPU</span>
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-2/3" />
                            </div>

                            {/* Bottom status */}
                            <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
                                <span>PROCESSING</span>
                                <span>14ms</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
