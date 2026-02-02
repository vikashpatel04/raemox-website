import { LoaderIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SpinnerProps extends React.ComponentProps<"svg"> {
    size?: "sm" | "md" | "lg"
}

export function Spinner({ className, size = "md", ...props }: SpinnerProps) {
    const sizeClasses = {
        sm: "size-3",
        md: "size-4",
        lg: "size-6",
    }

    return (
        <LoaderIcon
            role="status"
            aria-label="Loading"
            className={cn("animate-spin", sizeClasses[size], className)}
            {...props}
        />
    )
}

export function SpinnerCustom({ className }: { className?: string }) {
    return (
        <div className={cn("flex items-center gap-4", className)}>
            <Spinner />
        </div>
    )
}

export function LoadingOverlay({ message = "Loading..." }: { message?: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Spinner size="lg" />
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    )
}
