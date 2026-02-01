import { useState } from "react"
import { IconPlus, IconMinus } from "@tabler/icons-react"

const faqItems = [
    {
        question: "What Qualcomm chips do you specialize in?",
        answer: "We have deep expertise with the Snapdragon 8 Gen series, 700 series, and the Snapdragon XR platform. We also work extensively with the Qualcomm Robotics RB5 and RB6 development kits.",
    },
    {
        question: "Do you provide ongoing maintenance?",
        answer: "Yes. We offer OTA update infrastructure design and can provide ongoing support packages including model updates, performance monitoring, and bug fixes.",
    },
    {
        question: "What's your typical project timeline?",
        answer: "Timelines vary based on complexity. A focused optimization project might take 4-8 weeks, while a full-stack autonomous system could be 6-12 months. We provide detailed timelines after our technical assessment.",
    },
    {
        question: "Can you work with existing codebases?",
        answer: "Absolutely. We often integrate with existing ROS 2 stacks, PyTorch models, or custom embedded systems. Our engineers are experienced in code audits and incremental optimization.",
    },
    {
        question: "Do you handle hardware procurement?",
        answer: "We can advise on hardware selection and have partnerships with major distributors. However, we primarily focus on software and optimization. We leave manufacturing to our clients.",
    },
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col gap-3">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-medium pr-4">{item.question}</span>
                                {openIndex === index ? (
                                    <IconMinus className="size-5 text-primary flex-shrink-0" />
                                ) : (
                                    <IconPlus className="size-5 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                                    }`}
                            >
                                <div className="p-4 pt-0 text-sm text-muted-foreground border-t bg-muted/30">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
