import { Suspense } from "react"
import { PageLoader } from "@/components/ui/PageLoader"

// Wrapper to add Suspense to lazy components
export function LazyPage({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<PageLoader />}>
            {children}
        </Suspense>
    )
}
