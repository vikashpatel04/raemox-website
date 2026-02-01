import { createBrowserRouter } from "react-router-dom"
import { RootLayout } from "@/components/layout"
import { ErrorBoundary } from "@/components/ErrorBoundary"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import Blog from "@/pages/Blog"
import BlogPost from "@/pages/BlogPost"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "services",
                element: <Services />,
            },
            {
                path: "blog",
                element: <Blog />,
            },
            {
                path: "blog/:slug",
                element: <BlogPost />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
])

