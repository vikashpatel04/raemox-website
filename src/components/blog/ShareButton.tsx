import { useState } from "react"
import { Button } from "@/components/ui/button"
import { IconShare, IconCheck, IconBrandTwitter, IconBrandLinkedin, IconLink } from "@tabler/icons-react"

interface ShareButtonProps {
    title: string
    slug: string
}

export function ShareButton({ title, slug }: ShareButtonProps) {
    const [copied, setCopied] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const url = `${window.location.origin}/blog/${slug}`

    const handleCopyLink = async () => {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => {
            setCopied(false)
            setShowMenu(false)
        }, 2000)
    }

    const shareToTwitter = () => {
        window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
            "_blank"
        )
    }

    const shareToLinkedIn = () => {
        window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            "_blank"
        )
    }

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setShowMenu(!showMenu)}
                className="gap-2"
            >
                <IconShare className="size-4" />
                Share
            </Button>

            {showMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-card border rounded-lg shadow-lg p-2 z-50">
                    <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                    >
                        {copied ? (
                            <IconCheck className="size-4 text-green-500" />
                        ) : (
                            <IconLink className="size-4" />
                        )}
                        {copied ? "Copied!" : "Copy link"}
                    </button>
                    <button
                        onClick={shareToTwitter}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                    >
                        <IconBrandTwitter className="size-4" />
                        Share on Twitter
                    </button>
                    <button
                        onClick={shareToLinkedIn}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                    >
                        <IconBrandLinkedin className="size-4" />
                        Share on LinkedIn
                    </button>
                </div>
            )}
        </div>
    )
}
