"use client"

import { Shield, Users, Heart, Clock, CheckCircle, Zap } from "lucide-react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"

export default function ServicesSupport() {
  const supportOptions = [
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Peer Support Groups",
      description: "Connect with others who understand your journey in moderated group sessions",
      features: ["Anonymous participation", "24/7 group availability", "Topic-specific groups", "Peer moderation"],
      availability: "Always Available",
      fluxVariation: "Community Flux",
      gradient: "from-teal-900 to-teal-800",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      title: "Professional Therapy",
      description: "One-on-one sessions with licensed therapists in a completely private environment",
      features: ["Licensed professionals", "Flexible scheduling", "Complete anonymity", "Specialized expertise"],
      availability: "By Appointment",
      fluxVariation: "Wise Flux",
      gradient: "from-black to-gray-900",
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-500" />,
      title: "Crisis Support",
      description: "Immediate help when you need it most with trained crisis counselors",
      features: ["Instant connection", "Crisis-trained staff", "24/7 availability", "Emergency protocols"],
      availability: "Immediate",
      fluxVariation: "Guardian Flux",
      gradient: "from-teal-900 to-teal-800",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Self-Care Tools",
      description: "Guided resources and tools for daily mental wellness maintenance",
      features: ["Meditation guides", "Mood tracking", "Coping strategies", "Progress insights"],
      availability: "Self-Paced",
      fluxVariation: "Empathetic Flux",
      gradient: "from-black to-gray-900",
    },
  ]

  const howItWorksSteps = [
    {
      step: 1,
      title: "Choose Your Path",
      description: "Select the type of support that feels right for you today",
      icon: <Heart className="w-6 h-6 text-teal-300" />,
    },
    {
      step: 2,
      title: "Connect Anonymously",
      description: "Join without revealing personal information - your privacy is protected",
      icon: <Shield className="w-6 h-6 text-blue-300" />,
    },
    {
      step: 3,
      title: "Start Your Journey",
      description: "Begin healing with community support and professional guidance",
      icon: <Users className="w-6 h-6 text-purple-300" />,
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Your Path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">Healing</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Multiple support options designed to meet you wherever you are in your mental health journey
          </p>
        </div>

        {/* Support Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="group p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-50 mb-2">{option.title}</h3>
                  <p className="text-gray-50/80 leading-relaxed mb-4">{option.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                    <Clock className="w-4 h-4 text-green-300" />
                    <span className="text-sm text-green-300">{option.availability}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {option.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0" />
                    <span className="text-gray-50/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <InteractiveHoverButton className="w-full px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                Get Started
              </InteractiveHoverButton>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">How It Works</h3>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  {step.icon}
                </div>
              </div>
              <h4 className="text-lg font-medium text-gray-50 mb-3">{step.title}</h4>
              <p className="text-gray-50/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
