"use client"

import { Shield, Users, Heart, Clock, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"

export default function ServicesSupport() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

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
    // {
    //   icon: <Zap className="w-8 h-8 text-teal-500" />,
    //   title: "Crisis Support",
    //   description: "Immediate help when you need it most with trained crisis counselors",
    //   features: ["Instant connection", "Crisis-trained staff", "24/7 availability", "Emergency protocols"],
    //   availability: "Immediate",
    //   fluxVariation: "Guardian Flux",
    //   gradient: "from-teal-900 to-teal-800",
    // },
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
      title: "Join Our Campfire",
      description: "Create an account and join our community of supporters for free",
      icon: <Heart className="w-6 h-6 text-teal-300" />,
    },
    {
      step: 2,
      title: "Connect Anonymously",
      description: "Find a peer support campfire, professional therapist or Mentors to connect with anonymously",
      icon: <Shield className="w-6 h-6 text-blue-300" />,
    },
    {
      step: 3,
      title: "Professional Support Just a Step Away",
      description: "Easily scale up to one-on-one sessions with health professionals by means of video calls, voice calls, or chat",
      icon: <Users className="w-6 h-6 text-purple-300" />,
    },
  ]

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % supportOptions.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + supportOptions.length) % supportOptions.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 6000)
    return () => clearInterval(interval)
  }, [isTransitioning])

  return (
    <section className="py-16 sm:py-20 bg-black" id="services-support">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6">
            Your Path to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">Healing</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Multiple support options designed to meet you wherever you are in your mental health journey
          </p>
        </div>

        {/* Support Options Grid - Desktop */}
        <div className="hidden md:block">
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

                <InteractiveHoverButton className="w-[430px] px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                  Get Started
                </InteractiveHoverButton>
              </div>
            ))}
          </div>
        </div>

        {/* Support Options - Mobile Carousel */}
        <div className="md:hidden mb-20">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {supportOptions.map((option, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                    {/* Icon */}
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      {option.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-medium text-gray-50 mb-3">{option.title}</h3>
                    <p className="text-gray-50/80 leading-relaxed mb-4">{option.description}</p>

                    {/* Availability */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                      <Clock className="w-4 h-4 text-green-300" />
                      <span className="text-sm text-green-300">{option.availability}</span>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {option.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3 justify-center">
                          <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
                          <span className="text-gray-50/90 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <InteractiveHoverButton className="w-full px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
                      Get Started
                    </InteractiveHoverButton>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5 text-gray-50" />
            </button>

            <div className="flex gap-2">
              {supportOptions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-teal-500 scale-125" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5 text-gray-50" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-50/60 mb-2">
              {currentSlide + 1} of {supportOptions.length}
            </div>
            <div className="w-full max-w-xs mx-auto bg-white/20 rounded-full h-1">
              <div
                className="bg-teal-500 h-1 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentSlide + 1) / supportOptions.length) * 100}%` }}
              />
            </div>
          </div>
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
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
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
