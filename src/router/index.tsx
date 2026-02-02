import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/components/layout"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import { LazyPage } from "@/components/LazyPage"

// Lazy load all pages for code splitting
const Home = lazy(() => import("@/pages/Home"))
const About = lazy(() => import("@/pages/About"))
const Services = lazy(() => import("@/pages/Services"))
const Blog = lazy(() => import("@/pages/Blog"))
const BlogPost = lazy(() => import("@/pages/BlogPost"))
const Contact = lazy(() => import("@/pages/Contact"))
const NotFound = lazy(() => import("@/pages/NotFound"))

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
