import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconExternalLink } from "@tabler/icons-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"

const links = [
    {
        label: "GitHub",
        href: siteConfig.social.github,
        icon: IconBrandGithub,
    },
    {
        label: "LinkedIn",
        href: siteConfig.social.linkedin,
        icon: IconBrandLinkedin,
    },
    {
        label: "Twitter/X",
        href: siteConfig.social.twitter,
        icon: IconBrandTwitter,
    },
]

export function CommunityLinks() {
    return (
        <section className="py-16 px-6 border-t">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold mb-3">Join Our Community</h2>
                <p className="text-muted-foreground mb-8">
                    Follow us for updates and deep-dives into Edge AI engineering.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {links.map((link) => (
                        <Button key={link.label} variant="outline" size="lg" asChild>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <link.icon className="size-5" />
                                <span className="font-medium">{link.label}</span>
                                <IconExternalLink className="size-4 text-muted-foreground" />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}

