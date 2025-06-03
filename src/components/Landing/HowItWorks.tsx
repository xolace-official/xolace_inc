"use client"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    title: "1. Share Anonymously",
    description: "Open the app, post your thoughts without an identity. No pressure, no filters—just real you.",
    icon: "/icons/anonymous.svg",
  },
  {
    title: "2. Reactions Only",
    description: "Get authentic feedback. Others react with emojis—no comments, no judgment.",
    icon: "/icons/reactions.svg",
  },
  {
    title: "3. Connect Silently",
    description: "Find your tribe through vibes. Follow and be followed based on your anonymous energy.",
    icon: "/icons/connect.svg",
  },
  {
    title: "4. Feel Lighter",
    description: "Vent, express, release. Xolace is your safe space to feel heard—without saying a word.",
    icon: "/icons/relief.svg",
  },
]

export default function HowXolaceWorks() {
  return (
    <section className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] py-16 px-6 md:px-20" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          How Xolace Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                  <Image
                    src={step.icon || "/placeholder.svg"}
                    alt={`${step.title} icon`}
                    width={28}
                    height={28}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-black text-white text-lg font-medium shadow-lg hover:bg-gray-900 hover:shadow-xl transition-all duration-300"
          >
            Try Xolace Now <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
