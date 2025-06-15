"use client"
import { motion } from "framer-motion"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import {
  Ghost,
  SmilePlus,
  Waves,
  Feather,
} from "lucide-react"

const steps = [
  {
    title: "1. Share Anonymously",
    description: "Open the app, post your thoughts without an identity. No pressure, no filters, just the real you.",
    Icon: Ghost,
  },
  {
    title: "2. Reactions Only",
    description: "Get authentic feedback. Others react with emojis no comments, no judgment.",
    Icon: SmilePlus,
  },
  {
    title: "3. Connect Silently",
    description: "Find your tribe through vibes. Follow and be followed based on your anonymous energy.",
    Icon: Waves,
  },
  {
    title: "4. Feel Lighter",
    description: "Vent, express, release. Xolace is your safe space to feel heard without saying a word.",
    Icon: Feather,
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
          className="text-4xl md:text-5xl font-light text-center mb-10"
        >
          How Xolace Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map(({ title, description, Icon }, index) => (
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
                  <Icon className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:flex justify-center py-20 hidden">
          <InteractiveHoverButton className="bg-teal-400 text-black">Explore Xolace</InteractiveHoverButton>
        </div>
        <div className="flex justify-center">
          <button className="md:hidden bg-black text-teal-300 py-2 px-5 mt-10 border-teal-300 border-2 rounded-4xl">
            Try Xolace Now
          </button>
        </div>
      </div>
    </section>
  )
}
