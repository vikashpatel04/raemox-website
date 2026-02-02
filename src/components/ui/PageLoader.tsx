import { Spinner } from "@/components/ui/spinner"

export function PageLoader() {
    return (
        <div className="flex min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Spinner size="lg" />
                <span className="text-sm text-muted-foreground animate-pulse">
                    Loading...
                </span>
            </div>
        </div>
    )
}
