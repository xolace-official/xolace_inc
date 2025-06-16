"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { Card, CardContent } from "../ui/card"

const faqs = [
  {
    question: "How quickly do you respond to inquiries?",
    answer:
      "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we offer live chat support that's available 24/7.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Please include as much detail as possible about your inquiry, including your company name, specific questions or issues, and any relevant background information. This helps us provide you with the most accurate and helpful response.",
  },
  {
    question: "Do you offer phone support?",
    answer:
      "Yes, we offer phone support during business hours (Monday-Friday, 9 AM-6 PM PST). You can also schedule a call with our team for more complex discussions or demonstrations.",
  },
  {
    question: "Can I visit your offices?",
    answer:
      "We welcome visitors to our offices. Please contact us in advance to schedule a meeting or tour. We have locations in San Francisco, New York, London, and Tokyo.",
  },
  {
    question: "How do I report a technical issue?",
    answer:
      "For technical issues, please use our support form and select 'Technical Support' as the subject. Include details about the problem, steps to reproduce it, and any error messages you're seeing.",
  },
  {
    question: "Do you offer partnership opportunities?",
    answer:
      "Yes, we're always interested in exploring partnership opportunities. Please select 'Partnership' as your inquiry subject and tell us about your organization and how you'd like to collaborate.",
  },
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find quick answers to common questions about contacting us.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-lg border-0 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Still have questions? We&apos;re here to help!</p>
          <InteractiveHoverButton
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
          >
            Contact Us Directly
          </InteractiveHoverButton>
        </motion.div>
      </div>
    </section>
  )
}
