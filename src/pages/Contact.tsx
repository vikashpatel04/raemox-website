import { SEOHead } from "@/components/SEOHead"
import {
    ContactInfo,
    ContactForm,
    ContactProcessTimeline,
    FAQ,
} from "@/components/contact"

export default function Contact() {
    return (
        <>
            <SEOHead
                title="Contact Us"
                url="/contact"
                description="Get in touch with RaeMox for Edge AI consulting, robotics engineering, and Qualcomm platform optimization. Let's build intelligence for your edge devices."
                keywords={["Contact RaeMox", "Edge AI Consulting", "Robotics Engineering Services"]}
            />
            <main className="flex-1">
                {/* Hero Section with Two Columns */}
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <ContactInfo />
                            <ContactForm />
                        </div>
                    </div>
                </section>

                <ContactProcessTimeline />
                <FAQ />
            </main>
        </>
    )
}
