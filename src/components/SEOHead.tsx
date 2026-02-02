import { Helmet } from "react-helmet-async"

interface SEOHeadProps {
    title?: string
    description?: string
    image?: string
    url?: string
    type?: "website" | "article"
    publishedTime?: string
    author?: string
    keywords?: string[]
}

const DEFAULT_TITLE = "RaeMox | Edge AI & Robotics Engineering Studio"
const DEFAULT_DESCRIPTION = "RaeMox is an engineering studio focused on AI, robotics, and low-power silicon. We build perception, navigation, and audio systems for edge devices using Qualcomm platforms."
const DEFAULT_IMAGE = "https://raemox.com/og-image.png"
const SITE_URL = "https://raemox.com"

export function SEOHead({
    title,
    description = DEFAULT_DESCRIPTION,
    image = DEFAULT_IMAGE,
    url,
    type = "website",
    publishedTime,
    author = "RaeMox",
    keywords = [],
}: SEOHeadProps) {
    const fullTitle = title ? `${title} | RaeMox` : DEFAULT_TITLE
    const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL
    const defaultKeywords = ["Edge AI", "Robotics", "Qualcomm", "vSLAM", "Autonomous Navigation"]
    const allKeywords = [...defaultKeywords, ...keywords].join(", ")

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={allKeywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {type === "article" && <meta property="article:author" content={author} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}
