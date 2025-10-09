"use client";

import { motion } from "motion/react";
import { Heart, Users, EyeOff, Globe2, BrainCircuit } from "lucide-react";
import { InteractiveHoverButton } from "../ui/magicui/interactive-hover-button";

export default function WhatMakesXolaceDifferent() {
  const highlights = [
    {
      icon: Users,
      title: "Social Meets Therapy",
      description:
        "Most platforms choose either connection or care - Xolace unites both. You can share your story, connect with peers, and access licensed professionals - all in one trusted space.",
    },
    {
      icon: EyeOff,
      title: "Anonymity That Protects You",
      description:
        "Choose when to reveal your identity. Anonymity encourages honesty, making it easier to speak your truth without fear or stigma.",
    },
    {
      icon: BrainCircuit,
      title: "The Internet’s Inner Voice",
      description:
        "Xolace is more than a platform - it’s your companion for mental clarity, reflection, and self-expression in a noisy digital world.",
    },
    {
      icon: Globe2,
      title: "A Global Safe Space",
      description:
        "Xolace is built for everyone, everywhere. We bridge cultures and conversations, connecting voices that need to be heard, no matter where they come from.",
    },
    {
      icon: Heart,
      title: "Built with Empathy at the Core",
      description:
        "Every design choice, feature, and community guideline revolves around empathy, safety, and healing - not engagement metrics or ads.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0b0c1a] to-[#131325] text-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(124,77,255,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(20,184,166,0.06),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            What Makes <span className="text-teal-400">Xolace</span> Different?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Xolace is redefining mental wellness by merging social connection with
            professional care - creating a safe, honest, and human space for
            everyone to be heard.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {highlights.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-400/10">
                  <Icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <InteractiveHoverButton className="bg-teal-400 text-black">
            Join the Xolace Movement
          </InteractiveHoverButton>
        </div>
      </motion.div>
    </section>
  );
}
