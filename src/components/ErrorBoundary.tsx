import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { IconAlertTriangle, IconHome, IconRefresh } from "@tabler/icons-react"

export function ErrorBoundary() {
    const error = useRouteError()

    let title = "Something Went Wrong"
    let message = "An unexpected error occurred. Please try again."
    let statusCode: number | null = null

    if (isRouteErrorResponse(error)) {
        statusCode = error.status
        if (error.status === 404) {
            title = "Page Not Found"
            message = "The page you're looking for doesn't exist or has been moved."
        } else if (error.status === 500) {
            title = "Server Error"
            message = "Something went wrong on our end. Please try again later."
        } else {
            title = `Error ${error.status}`
            message = error.statusText || message
        }
    } else if (error instanceof Error) {
        message = error.message
        if (import.meta.env.DEV) {
            // Show stack trace in development
            console.error("Route Error:", error)
        }
    }

    return (
        <main className="flex-1 flex items-center justify-center min-h-screen p-6">
            <div className="max-w-md w-full text-center">
                {/* Error Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                    <IconAlertTriangle className="size-8 text-destructive" />
                </div>

                {/* Status Code */}
                {statusCode && (
                    <p className="text-7xl font-black text-muted-foreground/20 mb-2">
                        {statusCode}
                    </p>
                )}

                {/* Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>

                {/* Message */}
                <p className="text-muted-foreground mb-8">{message}</p>

                {/* Development error details */}
                {import.meta.env.DEV && error instanceof Error && error.stack && (
                    <details className="mb-8 text-left">
                        <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                            View stack trace
                        </summary>
                        <pre className="mt-2 p-4 bg-muted rounded-lg text-xs overflow-auto max-h-48 text-left">
                            {error.stack}
                        </pre>
                    </details>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button
                        variant="outline"
                        onClick={() => window.location.reload()}
                    >
                        <IconRefresh className="size-4 mr-2" />
                        Try Again
                    </Button>
                    <Button asChild>
                        <Link to="/">
                            <IconHome className="size-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
