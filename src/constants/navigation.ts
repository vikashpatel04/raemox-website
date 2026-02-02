export const NAV_LINKS = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
] as const

export type NavLink = (typeof NAV_LINKS)[number]
