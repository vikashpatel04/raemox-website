const metrics = [
    { value: "<100ms", label: "Inference Latency", highlight: true },
    { value: "40%", label: "Power Reduction", highlight: false },
    { value: "99.9%", label: "System Uptime", highlight: false },
    { value: "Zero", label: "Cloud Dependency", highlight: false },
]

export function MetricsStrip() {
    return (
        <div className="w-full border-b bg-muted/50">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className={`flex flex-col gap-1 border-l-2 pl-4 ${metric.highlight ? "border-primary" : "border-primary/50"
                                }`}
                        >
                            <span className="text-3xl font-bold tracking-tighter">
                                {metric.value}
                            </span>
                            <span className="text-sm text-muted-foreground uppercase tracking-wide">
                                {metric.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
