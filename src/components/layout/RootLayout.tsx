import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

export function RootLayout() {
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
