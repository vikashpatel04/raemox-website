import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { IconSend } from "@tabler/icons-react"

const projectTypes = [
    "Edge AI Optimization",
    "Autonomous Navigation",
    "Computer Vision",
    "Voice/Audio AI",
    "LLM Integration",
    "Custom Hardware",
    "Other",
]

export function ContactForm() {
    const [selectedType, setSelectedType] = useState<string>("")

    return (
        <div className="bg-card rounded-xl border p-6 md:p-8">
            <h2 className="text-xl font-bold mb-6">Project Inquiry</h2>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                {/* Name & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Full Name
                        </label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm font-medium">
                            Company
                        </label>
                        <Input
                            id="company"
                            placeholder="Acme Robotics"
                        />
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Work Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                    />
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium">
                        Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                            <button
                                key={type}
                                type="button"
                                onClick={() => setSelectedType(type)}
                                className={`px-3 py-1.5 text-xs rounded-lg border transition-all ${selectedType === type
                                        ? "bg-primary text-primary-foreground border-primary"
                                        : "bg-background hover:border-primary/50"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="details" className="text-sm font-medium">
                        Project Details
                    </label>
                    <Textarea
                        id="details"
                        placeholder="Tell us about your project requirements, timeline, and any specific hardware constraints..."
                        rows={5}
                    />
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full mt-2">
                    <IconSend className="size-4 mr-2" />
                    Send Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                    We typically respond within 1-2 business days.
                </p>
            </form>
        </div>
    )
}
