/**
 * Site configuration - reads from environment variables
 * Provides typed access to company info throughout the app
 */

export const siteConfig = {
    name: import.meta.env.VITE_COMPANY_NAME || "RaeMox",
    tagline: import.meta.env.VITE_COMPANY_TAGLINE || "Engineering the intelligence behind the machines of tomorrow.",

    contact: {
        email: import.meta.env.VITE_COMPANY_EMAIL || "contact@raemox.ai",
        phone: import.meta.env.VITE_COMPANY_PHONE || "+1 (234) 567-8900",
        address: import.meta.env.VITE_COMPANY_ADDRESS || "123 Tech District, Silicon Valley, CA",
    },

    social: {
        github: import.meta.env.VITE_GITHUB_URL || "https://github.com/raemox-org",
        linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://linkedin.com/company/raemox",
        twitter: import.meta.env.VITE_TWITTER_URL || "https://twitter.com/raemox",
    },

    support: import.meta.env.VITE_SUPPORT_URL || "https://support.raemox.ai",
} as const

export type SiteConfig = typeof siteConfig
