import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconSearch, IconCommand } from "@tabler/icons-react"

interface FilterBarProps {
    categories?: string[]
    onFilterChange?: (category: string) => void
    searchQuery?: string
    onSearchChange?: (query: string) => void
}

export function FilterBar({
    categories = ["All", "Engineering", "Research", "Industry", "Tutorial"],
    onFilterChange,
    searchQuery = "",
    onSearchChange
}: FilterBarProps) {
    const [activeCategory, setActiveCategory] = useState("All")
    const [isMac, setIsMac] = useState(false)
    const searchInputRef = useRef<HTMLInputElement>(null)

    // Detect if user is on Mac for proper keyboard shortcut display
    useEffect(() => {
        setIsMac(navigator.platform.toUpperCase().indexOf('MAC') >= 0)
    }, [])

    // Handle Ctrl+K / Cmd+K keyboard shortcut
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault()
                searchInputRef.current?.focus()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    const handleClick = (category: string) => {
        setActiveCategory(category)
        onFilterChange?.(category)
    }

    return (
        <section className="px-6 pb-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                size="sm"
                                onClick={() => handleClick(category)}
                                className="text-xs"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Search Bar with keyboard shortcut hint */}
                    <div className="relative w-full sm:w-72">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                            className="pl-9 pr-16 h-9 text-sm"
                        />
                        {/* Keyboard shortcut hint */}
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-0.5 text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded border">
                            {isMac ? (
                                <>
                                    <IconCommand className="size-3" />
                                    <span>K</span>
                                </>
                            ) : (
                                <span>Ctrl+K</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
