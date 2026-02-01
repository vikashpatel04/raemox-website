import {
    ContactInfo,
    ContactForm,
    ContactProcessTimeline,
    FAQ,
} from "@/components/contact"

export default function Contact() {
    return (
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
    )
}
