import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FilterBarProps {
    categories?: string[]
    onFilterChange?: (category: string) => void
}

export function FilterBar({ categories = ["All", "Engineering", "Research", "Industry", "Tutorial"], onFilterChange }: FilterBarProps) {
    const [activeCategory, setActiveCategory] = useState("All")

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

                    {/* Sort Dropdown (Styled as text) */}
                    <span className="text-sm text-muted-foreground">
                        Showing latest articles
                    </span>
                </div>
            </div>
        </section>
    )
}
