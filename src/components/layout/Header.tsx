import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { NAV_LINKS } from "@/constants/navigation"
import { Button } from "@/components/ui/button"
import { IconMenu2, IconX, IconBrain } from "@tabler/icons-react"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded bg-primary text-primary-foreground">
                            <IconBrain className="size-5" />
                        </div>
                        <span className="text-xl font-bold tracking-tight">RaeMox</span>
                    </NavLink>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.filter(link => link.path !== "/contact").map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-muted-foreground"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="flex items-center gap-4">
                        <Button asChild className="hidden md:flex">
                            <Link to="/contact">Contact</Link>
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                            aria-label="Toggle menu"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <IconX className="h-6 w-6" />
                            ) : (
                                <IconMenu2 className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden border-t bg-background">
                    <div className="px-4 py-4 space-y-2">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
