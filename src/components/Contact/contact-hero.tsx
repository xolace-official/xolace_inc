"use client"

import { motion } from "motion/react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative bg-transparent  text-white py-24 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Mail className="w-8 h-8 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100 text-sm">xolace25@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <Phone className="w-8 h-8 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100 text-sm">+233xxxxxxxxx</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <MapPin className="w-8 h-8 mb-4 text-yellow-300" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100 text-sm text-center">Koforidua Adweso</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
