import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Do I need to book an appointment?",
    answer:
      "While we do accept walk-ins when availability allows, we highly recommend booking an appointment to guarantee your preferred time slot. You can book online through our website or give us a call.",
  },
  {
    question: "What forms of payment do you accept?",
    answer:
      "We accept all major credit and debit cards, Apple Pay, Google Pay, and cash. We also offer contactless payment options for your convenience.",
  },
  {
    question: "How long does a typical appointment take?",
    answer:
      "A standard haircut takes approximately 30-45 minutes. Beard trims are around 20 minutes, and our full experience package takes about 75 minutes. We never rush — your time with us is dedicated to you.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer:
      "We understand that plans change. Please give us at least 24 hours notice if you need to cancel or reschedule. This allows us to offer the slot to another client.",
  },
  {
    question: "Do you offer any loyalty rewards?",
    answer:
      "Yes! We have a loyalty programme where every 10th haircut is on us. We also offer exclusive discounts to returning clients and special rates for students and seniors.",
  },
  {
    question: "What products do you use and sell?",
    answer:
      "We use and stock a range of premium men's grooming products including styling clays, pomades, beard oils, and skincare. Our barbers can recommend the best products for your hair type and style.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <HelpCircle className="h-5 w-5 text-primary" />
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-serif text-4xl font-bold uppercase tracking-tight text-foreground sm:text-5xl">
            Frequently Asked
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before your visit
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
