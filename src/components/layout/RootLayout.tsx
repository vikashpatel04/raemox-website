import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function RootLayout() {
    const { pathname } = useLocation()

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="pt-16 flex-1 flex flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
