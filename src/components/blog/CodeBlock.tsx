import { useState } from "react"
import { IconCopy, IconCheck } from "@tabler/icons-react"

interface CodeBlockProps {
    children: string
    className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    // Extract language from className (e.g., "language-python")
    const language = className?.replace("language-", "") || "text"

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={handleCopy}
                    className="p-2 rounded-md bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                    title={copied ? "Copied!" : "Copy code"}
                >
                    {copied ? (
                        <IconCheck className="size-4 text-green-500" />
                    ) : (
                        <IconCopy className="size-4" />
                    )}
                </button>
            </div>
            <pre className={`${className} overflow-x-auto`}>
                <code className={className}>{children}</code>
            </pre>
            {language !== "text" && (
                <span className="absolute left-3 top-2 text-xs text-muted-foreground/60 uppercase">
                    {language}
                </span>
            )}
        </div>
    )
}
