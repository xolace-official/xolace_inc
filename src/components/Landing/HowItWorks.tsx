"use client"
import { motion } from "motion/react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import {
  Ghost,
  SmilePlus,
  Waves,
  ListVideo
} from "lucide-react"
import { useRouter } from "next/navigation"

const steps = [
  {
    title: "Express Freely",
    description: "Share Sparks✨ of your thoughts, moments, and experiences; anonymous or not",
    Icon: Ghost,
  },
  {
    title: "Get Support",
    description: "Receive responses/tips/advice from peers and verified guides",
    Icon: SmilePlus,
  },
  {
    title: "Mental Health Hub",
    description: "Curated resources for therapy, coping strategies, and professional help.",
    Icon: Waves,
  },
  {
    title: "Social Experiencing",
    description: "Watch and learn from our curated “Experience feed” of video mentors sharing real-world experiences.",
    Icon: ListVideo,
  },
]

export default function HowXolaceWorks() {
  const router = useRouter()
  return (
    <section className="bg-gradient-to-b from-[#fdfbfb] to-[#ebedee] py-16 px-6 md:px-20" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium text-center mb-10"
        >
          How Xolace Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
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

        <div className="flex justify-center py-20 items-center">
          <InteractiveHoverButton onClick={()=> router.push("https://xolace.app/")} className="bg-teal-400 text-black">Explore Xolace</InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
}
