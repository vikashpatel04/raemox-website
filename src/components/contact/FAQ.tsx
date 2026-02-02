import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"

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
    return (
        <section className="py-16 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg mb-3 px-4">
                            <AccordionTrigger className="text-left font-medium">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

