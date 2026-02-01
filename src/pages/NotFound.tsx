import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-primary/20">404</h1>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                    Go Back Home
                </Link>
            </div>
        </main>
    )
}
