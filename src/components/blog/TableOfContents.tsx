import { useEffect, useState } from "react"

interface TocItem {
    id: string
    text: string
    level: number
}

interface TableOfContentsProps {
    content: string
}

/**
 * Extract headings from markdown content
 */
function extractHeadings(content: string): TocItem[] {
    const headings: TocItem[] = []
    // Match ## and ### headings (h2 and h3)
    const regex = /^(#{2,3})\s+(.+)$/gm
    let match

    while ((match = regex.exec(content)) !== null) {
        const level = match[1].length // 2 for ##, 3 for ###
        const text = match[2].trim()
        // Create URL-friendly ID
        const id = text
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")

        headings.push({ id, text, level })
    }

    return headings
}

export function TableOfContents({ content }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("")
    const headings = extractHeadings(content)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "-80px 0px -80% 0px" }
        )

        // Observe all headings
        headings.forEach(({ id }) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [headings])

    const scrollToHeading = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            const yOffset = -80 // Account for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: "smooth" })
        }
    }

    if (headings.length === 0) {
        return null
    }

    return (
        <nav>
            <h4 className="text-sm font-semibold text-primary mb-4">
                On This Page
            </h4>
            <ul className="space-y-2 text-sm">
                {headings.map(({ id, text, level }) => (
                    <li
                        key={id}
                        className={level === 3 ? "pl-4" : ""}
                    >
                        <button
                            onClick={() => scrollToHeading(id)}
                            className={`
                                text-left w-full hover:text-primary transition-colors cursor-pointer
                                ${activeId === id
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                                }
                            `}
                        >
                            {text}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
