import { Link } from "react-router-dom"
import { useTheme } from "@/hooks/useTheme"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    IconSun,
    IconMoon,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandTwitter,
    IconBrain,
    IconArrowRight
} from "@tabler/icons-react"

export function Footer() {
    const currentYear = new Date().getFullYear()
    const { theme, toggleTheme } = useTheme()

    return (
        <footer className="border-t bg-muted/30 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="flex size-6 items-center justify-center rounded bg-primary text-primary-foreground">
                                <IconBrain className="size-4" />
                            </div>
                            <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
                        </Link>
                        <p className="text-sm text-muted-foreground mb-6">
                            {siteConfig.tagline}
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={siteConfig.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <IconBrandTwitter className="size-5" />
                            </a>
                            <a
                                href={siteConfig.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <IconBrandGithub className="size-5" />
                            </a>
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <IconBrandLinkedin className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="hover:text-primary transition-colors">
                                    Partners
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link to="/services" className="hover:text-primary transition-colors">
                                    Edge AI Optimization
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-primary transition-colors">
                                    Robotics Software
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-primary transition-colors">
                                    Custom Hardware
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-primary transition-colors">
                                    Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold mb-4">Newsletter</h4>
                        <p className="text-muted-foreground text-sm mb-4">
                            Get the latest on Edge AI trends.
                        </p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="flex-1"
                            />
                            <Button size="icon" variant="default">
                                <IconArrowRight className="size-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-xs">
                        © {currentYear} {siteConfig.name} Engineering. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            to="#"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="#"
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                            Terms of Service
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-muted transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <IconSun className="w-5 h-5" />
                            ) : (
                                <IconMoon className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
