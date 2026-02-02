import { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/components/layout"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { PageLoader } from "@/components/ui/PageLoader"

// Lazy load all pages for code splitting
const Home = lazy(() => import("@/pages/Home"))
const About = lazy(() => import("@/pages/About"))
const Services = lazy(() => import("@/pages/Services"))
const Blog = lazy(() => import("@/pages/Blog"))
const BlogPost = lazy(() => import("@/pages/BlogPost"))
const Contact = lazy(() => import("@/pages/Contact"))
const NotFound = lazy(() => import("@/pages/NotFound"))

// Wrapper to add Suspense to lazy components
function LazyPage({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<PageLoader />}>
            {children}
        </Suspense>
    )
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <LazyPage><Home /></LazyPage>,
            },
            {
                path: "about",
                element: <LazyPage><About /></LazyPage>,
            },
            {
                path: "services",
                element: <LazyPage><Services /></LazyPage>,
            },
            {
                path: "blog",
                element: <LazyPage><Blog /></LazyPage>,
            },
            {
                path: "blog/:slug",
                element: <LazyPage><BlogPost /></LazyPage>,
            },
            {
                path: "contact",
                element: <LazyPage><Contact /></LazyPage>,
            },
            {
                path: "*",
                element: <LazyPage><NotFound /></LazyPage>,
            },
        ],
    },
])
