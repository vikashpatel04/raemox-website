import { IconCpu, IconBolt, IconRobot, IconDeviceDesktop } from "@tabler/icons-react"

const partners = [
    { name: "Qualcomm", icon: IconCpu },
    { name: "NVIDIA", icon: IconBolt },
    { name: "Boston Dyn", icon: IconRobot },
    { name: "ARM", icon: IconDeviceDesktop },
]

export function TrustIndicators() {
    return (
        <section className="border-y bg-muted/50 py-10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
                    Powering Next-Gen Hardware
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-all duration-500">
                    {partners.map((partner) => (
                        <div key={partner.name} className="flex items-center gap-2 font-bold text-lg md:text-xl">
                            <partner.icon className="size-6" />
                            {partner.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
