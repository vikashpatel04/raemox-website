import { IconMail, IconBrandGithub, IconBrandLinkedin, IconHeadset } from "@tabler/icons-react"
import { siteConfig } from "@/config/site"
import { Card, CardContent } from "@/components/ui/card"

const contactMethods = [
    {
        icon: IconMail,
        title: "Email",
        value: siteConfig.contact.email,
        href: `mailto:${siteConfig.contact.email}`,
        description: "For general inquiries",
    },
    {
        icon: IconBrandGithub,
        title: "GitHub",
        value: "@raemox-org",
        href: siteConfig.social.github,
        description: "Open source projects",
    },
    {
        icon: IconBrandLinkedin,
        title: "LinkedIn",
        value: "RaeMox Engineering",
        href: siteConfig.social.linkedin,
        description: "Company updates",
    },
    {
        icon: IconHeadset,
        title: "Support",
        value: "24/7 Available",
        href: siteConfig.support,
        description: "For existing clients",
    },
]

export function ContactInfo() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <span className="text-xs text-primary font-mono uppercase tracking-wider">
                    Get in Touch
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Let's Build Something
                </h1>
                <p className="text-muted-foreground">
                    Ready to optimize your edge compute platform? Our team of specialists is ready to discuss your project requirements.
                </p>
            </div>

            {/* Contact Methods grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method) => (
                    <a
                        key={method.title}
                        href={method.href}
                        target={method.href.startsWith("http") ? "_blank" : undefined}
                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                        <Card className="h-full hover:border-primary hover:shadow-lg hover:shadow-primary/5 transition-all group">
                            <CardContent className="flex items-start gap-4 p-4">
                                <div className="p-2 rounded bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <method.icon className="size-5" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm">{method.title}</span>
                                    <span className="text-xs text-muted-foreground">{method.description}</span>
                                    <span className="text-sm text-primary mt-1">{method.value}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                ))}
            </div>
        </div>
    )
}

