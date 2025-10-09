"use client";

import { motion } from "motion/react";
import { CheckCircle, XCircle } from "lucide-react";

export default function XolaceComparisonSection() {
  const comparisons = [
    {
      feature: "Access to qualified professionals",
      xolace: true,
      therapy: true,
      social: false,
    },
    {
      feature: "Requires physical visits",
      xolace: false,
      therapy: true,
      social: false,
    },
    {
      feature: "Safe & supportive community",
      xolace: true,
      therapy: false,
      social: false,
    },
    {
      feature: "Real-time messaging & peer support",
      xolace: true,
      therapy: false,
      social: true,
    },
    {
      feature: "Privacy & anonymity options",
      xolace: true,
      therapy: false,
      social: false,
    },
    {
      feature: "AI-powered emotional insights",
      xolace: true,
      therapy: false,
      social: false,
    },
    {
      feature: "Structured professional help",
      xolace: true,
      therapy: true,
      social: false,
    },
    {
      feature: "Moderation & mental health safety",
      xolace: true,
      therapy: true,
      social: false,
    },
    {
      feature: "Affordable & flexible access",
      xolace: true,
      therapy: false,
      social: true,
    },
    {
      feature: "Personal growth tracking tools",
      xolace: true,
      therapy: false,
      social: false,
    },
  ];

  return (
    <section className="relative bg-[#050511] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(168,85,247,0.1),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-5 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Xolace vs Traditional Therapy vs Social Platforms
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Xolace redefines support - merging professional guidance, social connection,
            and emotional intelligence into a single modern ecosystem.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-2xl backdrop-blur-md bg-white/5 shadow-2xl border border-white/10">
          <table className="w-full border-separate border-spacing-y-2">
            <thead>
            <tr className="bg-white/10 text-left text-gray-300">
              <th className="py-5 px-6 text-lg font-semibold rounded-tl-2xl">
                Features
              </th>
              <th className="py-5 px-6 text-center text-lg font-semibold text-teal-400">
                Xolace
              </th>
              <th className="py-5 px-6 text-center text-lg font-semibold text-blue-300">
                Traditional Therapy
              </th>
              <th className="py-5 px-6 text-center text-lg font-semibold text-purple-400 rounded-tr-2xl">
                Social Platforms
              </th>
            </tr>
            </thead>
            <tbody>
            {comparisons.map((item, index) => (
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg"
              >
                <td className="py-4 px-6 text-gray-200 text-[1rem] font-medium">
                  {item.feature}
                </td>
                <td className="py-4 px-6 text-center">
                  {item.xolace ? (
                    <CheckCircle className="text-teal-400 inline-block w-6 h-6" />
                  ) : (
                    <XCircle className="text-red-500 inline-block w-6 h-6" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {item.therapy ? (
                    <CheckCircle className="text-blue-300 inline-block w-6 h-6" />
                  ) : (
                    <XCircle className="text-red-500 inline-block w-6 h-6" />
                  )}
                </td>
                <td className="py-4 px-6 text-center">
                  {item.social ? (
                    <CheckCircle className="text-purple-400 inline-block w-6 h-6" />
                  ) : (
                    <XCircle className="text-red-500 inline-block w-6 h-6" />
                  )}
                </td>
              </motion.tr>
            ))}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            🪄 <span className="text-teal-400 font-semibold">Xolace</span> transforms
            how we connect, care, and grow - blending the trust of therapy and
            the freedom of community into one powerful digital space.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
