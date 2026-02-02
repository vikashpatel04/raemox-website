import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string
    alt: string
    width?: number
    height?: number
    priority?: boolean
    placeholder?: "blur" | "empty"
    blurDataUrl?: string
    sizes?: string
}

export function OptimizedImage({
    src,
    alt,
    width,
    height,
    priority = false,
    placeholder = "empty",
    blurDataUrl,
    sizes = "100vw",
    className,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const imgRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        if (priority) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    observer.disconnect()
                }
            },
            { rootMargin: "50px" }
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

    const showBlur = placeholder === "blur" && blurDataUrl && !isLoaded

    return (
        <div
            ref={imgRef}
            className={cn("relative overflow-hidden", className)}
            style={{ width, height }}
        >
            {/* Blur placeholder */}
            {showBlur && (
                <img
                    src={blurDataUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg"
                />
            )}

            {/* Main image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                    onLoad={() => setIsLoaded(true)}
                    className={cn(
                        "w-full h-full object-cover transition-opacity duration-300",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    {...props}
                />
            )}

            {/* Loading skeleton */}
            {!isLoaded && !showBlur && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
        </div>
    )
}
