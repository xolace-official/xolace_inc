"use client"

import {
  Heart,
  Shield,
  Users,
  Zap,
  Globe,
  Palette,
  Type,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import { useState } from "react"

export default function BrandSection() {
  const [currentFluxSlide, setCurrentFluxSlide] = useState(0)
  const [currentValueSlide, setCurrentValueSlide] = useState(0)
  const [currentUspSlide, setCurrentUspSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const fluxVariations = [
    {
      image: "/assets/photos/About/aboutMascot1.png",
      name: "Guardian Flux",
      description: "Protecting your privacy and creating safe spaces",
      emotion: "Protective",
      symbolism: "Shield-like posture representing security and trust",
      colors: ["#0f766e", "#06b6d4", "#3b82f6"],
    },
    {
      image: "/assets/photos/About/aboutMascot2.png",
      name: "Empathetic Flux",
      description: "Showing compassion and understanding",
      emotion: "Caring",
      symbolism: "Open arms representing acceptance and warmth",
      colors: ["#ec4899", "#f59e0b", "#ef4444"],
    },
    {
      image: "/assets/photos/About/aboutMascot3.png",
      name: "Community Flux",
      description: "Celebrating connection and togetherness",
      emotion: "Joyful",
      symbolism: "Multiple forms representing diverse community",
      colors: ["#10b981", "#8b5cf6", "#06b6d4"],
    },
    {
      image: "/assets/photos/About/aboutMascot4.png",
      name: "Wise Flux",
      description: "Providing guidance and expert support",
      emotion: "Knowledgeable",
      symbolism: "Thoughtful pose representing wisdom and expertise",
      colors: ["#7c3aed", "#f59e0b", "#0f766e"],
    },
  ]

  const coreValues = [
    {
      icon: <Shield className="w-8 h-8 text-teal-300" />,
      title: "Privacy First",
      description: "Complete anonymity and data protection in every interaction",
      fluxConnection: "Guardian Flux embodies this through its protective stance and secure presence",
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-300" />,
      title: "Empathy Always",
      description: "Every conversation guided by genuine understanding and compassion",
      fluxConnection: "Empathetic Flux shows this through open, welcoming gestures",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-300" />,
      title: "Community Power",
      description: "Healing happens best when we support each other",
      fluxConnection: "Community Flux represents the strength found in togetherness",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-300" />,
      title: "Expert Wisdom",
      description: "Professional guidance when you need it most",
      fluxConnection: "Wise Flux symbolizes the knowledge and expertise available",
    },
  ]

  const usps = [
    {
      icon: <Shield className="w-6 h-6 text-teal-300" />,
      title: "Anonymous by Design",
      description: "Complete privacy protection with zero personal data collection",
      differentiator: "Unlike traditional platforms requiring full identification",
      impact: "Users feel safe to share without fear of judgment or exposure",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-300" />,
      title: "Dual Support System",
      description: "Peer community + licensed professionals in one platform",
      differentiator: "Most platforms offer only one-on-one therapy sessions",
      impact: "Comprehensive support addressing all aspects of mental wellness",
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-300" />,
      title: "Instant Connection",
      description: "24/7 community support with immediate access to help",
      differentiator: "No waiting lists, appointments, or scheduling barriers",
      impact: "Support available exactly when crisis moments occur",
    },
    {
      icon: <Globe className="w-6 h-6 text-green-300" />,
      title: "Global Accessibility",
      description: "Breaking down geographical and financial barriers",
      differentiator: "Traditional therapy limited by location and high costs",
      impact: "Mental health support available to anyone, anywhere",
    },
  ]

  const createCarouselHandlers = (
    currentSlide: number,
    setCurrentSlide: (value: number) => void,
    arrayLength: number,
  ) => ({
    next: () => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide((currentSlide + 1) % arrayLength)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    prev: () => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide((currentSlide - 1 + arrayLength) % arrayLength)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    goTo: (index: number) => {
      if (isTransitioning || index === currentSlide) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
  })

  const fluxHandlers = createCarouselHandlers(currentFluxSlide, setCurrentFluxSlide, fluxVariations.length)
  const valueHandlers = createCarouselHandlers(currentValueSlide, setCurrentValueSlide, coreValues.length)
  const uspHandlers = createCarouselHandlers(currentUspSlide, setCurrentUspSlide, usps.length)

  const brandColors = [
    { name: "Primary Teal", hex: "#0f766e", usage: "Main brand color, primary CTAs" },
    { name: "Teal Light", hex: "#5eead4", usage: "Accents, highlights, interactive elements" },
    { name: "Cyan Bright", hex: "#06b6d4", usage: "Secondary accents, gradients" },
    { name: "Amber Accent", hex: "#fbbf24", usage: "Special highlights, dividers" },
    { name: "Slate Dark", hex: "#1e293b", usage: "Text, dark backgrounds" },
    { name: "Gray Light", hex: "#f8fafc", usage: "Light backgrounds, cards" },
  ]

  return (
    <div className="bg-black">
      {/* Section Header */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full mb-6">
              <Sparkles className="w-10 h-10 text-teal-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">Xolace</span>{" "}
              Brand
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-50 max-w-4xl mx-auto leading-relaxed">
              More than just a platform—Xolace is a movement toward accessible, empathetic mental health support.
              Discover the story, values, and vision that drive everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Flux Mascot Section */}
      <section className="py-16 sm:py-20 bg-teal-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">Meet Flux</h3>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Our beloved mascot embodies the fluid, adaptive nature of healing and growth. Flux represents the
              transformative journey every person takes toward mental wellness.
            </p>
          </div>

          {/* Flux Story and Origin */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h4 className="text-xl sm:text-2xl font-medium text-gray-50 mb-6">The Story Behind Flux</h4>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-teal-300 mb-3">Name Origin</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    <strong>&quot;Flux&quot;</strong> represents constant, positive change—the natural flow of emotions, growth,
                    and healing. Just as mental health is not a destination but a journey, Flux embodies the beautiful,
                    ever-changing nature of human experience.
                  </p>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-blue-300 mb-3">Design Philosophy</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    Flux&apos;s fluid, adaptable form reflects our belief that healing isn&apos;t linear. The soft, organic shapes
                    create a sense of comfort and approachability, while the ability to transform represents resilience
                    and growth.
                  </p>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-purple-300 mb-3">Symbolic Meaning</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    Each variation of Flux tells a story: protection when you need safety, empathy when you need
                    understanding, community when you need connection, and wisdom when you need guidance. Flux is your
                    companion through every emotion.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Flux mascot main illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                    quality={95}
                  />
                </div>
                {/* Floating elements around main Flux */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-teal-300/20 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-cyan-300/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-4 w-6 h-6 bg-amber-300/20 rounded-full animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>

          {/* Flux Variations - Desktop */}
          <div className="hidden sm:block">
            <h4 className="text-xl sm:text-2xl font-medium text-gray-50 text-center mb-8">Flux Expressions</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fluxVariations.map((variation, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="aspect-square relative mb-4 bg-white/5 rounded-lg overflow-hidden">
                    <Image
                      src={variation.image || "/placeholder.svg?height=200&width=200"}
                      alt={variation.name}
                      fill
                      sizes="(max-width: 640px) 200px, 250px"
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      quality={95}
                    />
                  </div>

                  <h5 className="font-medium text-gray-50 mb-2">{variation.name}</h5>
                  <p className="text-sm text-gray-50/80 mb-3">{variation.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-50/60">Emotion:</span>
                      <span className="inline-block px-2 py-1 bg-teal-300/20 text-teal-300 text-xs rounded-full">
                        {variation.emotion}
                      </span>
                    </div>

                    <div className="text-xs text-gray-50/70 leading-relaxed">
                      <strong>Symbolism:</strong> {variation.symbolism}
                    </div>

                    <div className="flex gap-1 mt-2">
                      {variation.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-4 h-4 rounded-full border border-white/20"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flux Variations - Mobile Carousel */}
          <div className="sm:hidden">
            <h4 className="text-xl font-medium text-gray-50 text-center mb-8">Flux Expressions</h4>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentFluxSlide * 100}%)` }}
              >
                {fluxVariations.map((variation, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                      <div className="aspect-square relative mb-4 bg-white/5 rounded-lg overflow-hidden max-w-xs mx-auto">
                        <Image
                          src={variation.image || "/placeholder.svg?height=200&width=200"}
                          alt={variation.name}
                          fill
                          sizes="300px"
                          className="object-contain"
                          quality={95}
                        />
                      </div>

                      <h5 className="font-medium text-gray-50 mb-2 text-lg">{variation.name}</h5>
                      <p className="text-sm text-gray-50/80 mb-4">{variation.description}</p>

                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xs text-gray-50/60">Emotion:</span>
                          <span className="inline-block px-3 py-1 bg-teal-300/20 text-teal-300 text-xs rounded-full">
                            {variation.emotion}
                          </span>
                        </div>

                        <div className="text-xs text-gray-50/70 leading-relaxed">
                          <strong>Symbolism:</strong> {variation.symbolism}
                        </div>

                        <div className="flex gap-1 justify-center mt-2">
                          {variation.colors.map((color, colorIndex) => (
                            <div
                              key={colorIndex}
                              className="w-5 h-5 rounded-full border border-white/20"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={fluxHandlers.prev}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-gray-50" />
              </button>

              <div className="flex gap-2">
                {fluxVariations.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => fluxHandlers.goTo(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentFluxSlide ? "bg-teal-500 scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={fluxHandlers.next}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-gray-50" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Flux Connection */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-800 via-teal-800 to-green-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">How Flux Embodies Our Values</h3>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Every aspect of Flux&apos;s design intentionally reflects our core values, creating a visual representation of
              what Xolace stands for.
            </p>
          </div>

          {/* Core Values - Desktop */}
          <div className="hidden md:block">
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-50 mb-2">{value.title}</h4>
                      <p className="text-gray-50/90 leading-relaxed mb-4">{value.description}</p>
                      <div className="p-3 bg-amber-300/10 rounded-lg border-l-4 border-amber-300">
                        <p className="text-sm text-amber-200">
                          <strong>Flux Connection:</strong> {value.fluxConnection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values - Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentValueSlide * 100}%)` }}
              >
                {coreValues.map((value, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                      <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {value.icon}
                      </div>
                      <h4 className="text-xl font-medium text-gray-50 mb-3">{value.title}</h4>
                      <p className="text-gray-50/90 leading-relaxed mb-4">{value.description}</p>
                      <div className="p-3 bg-amber-300/10 rounded-lg border-l-4 border-amber-300">
                        <p className="text-sm text-amber-200">
                          <strong>Flux Connection:</strong> {value.fluxConnection}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={valueHandlers.prev}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-gray-50" />
              </button>

              <div className="flex gap-2">
                {coreValues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => valueHandlers.goTo(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentValueSlide ? "bg-teal-500 scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={valueHandlers.next}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-gray-50" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Motive */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-300/20 rounded-full mb-6">
              <Target className="w-8 h-8 text-purple-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">Our Core Motive</h3>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h4 className="text-xl sm:text-2xl font-medium text-gray-50 mb-6">The Driving Force Behind Xolace</h4>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-blue-300 mb-3">Breaking Mental Health Stigma</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    1 in 4 people struggle with mental health, yet shame and stigma keep millions suffering in silence.
                    We exist to normalize seeking help and create a world where mental wellness is prioritized.
                  </p>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-purple-300 mb-3">Democratizing Access</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    Quality mental health support shouldn&apos;t be a privilege reserved for the few. We&apos;re committed to
                    making it accessible, affordable, and available to everyone, everywhere.
                  </p>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="text-lg font-medium text-green-300 mb-3">Harnessing Community Power</h5>
                  <p className="text-gray-50/90 leading-relaxed">
                    Healing happens best in community. We believe in the transformative power of shared experiences and
                    peer support, combined with professional expertise.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-white/15 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20 text-center">
                <h5 className="text-xl font-bold text-gray-50 mb-4">Our Promise</h5>
                <p className="text-lg text-gray-50 leading-relaxed italic">
                &quot;Every person deserves a safe space to heal, grow, and thrive. We&apos;re here to ensure that space exists
                  for everyone.&quot;
                </p>
              </div>

              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                <h5 className="font-medium text-gray-50 mb-3">Our Commitment</h5>
                <ul className="space-y-2 text-sm text-gray-50/90">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                    Privacy-first platform design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    24/7 community support
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                    Licensed professional guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    Continuous platform improvement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs - Desktop */}
      <div className="hidden md:block">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-800 via-pink-800 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-300/20 rounded-full mb-6">
                <Award className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">What Makes Xolace Unique</h3>
              <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
              <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                We&apos;re not just another mental health platform. Here&apos;s what sets us apart from the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {usps.map((usp, index) => (
                <div
                  key={index}
                  className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {usp.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-gray-50 mb-2">{usp.title}</h4>
                      <p className="text-gray-50/90 leading-relaxed">{usp.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-red-300/10 rounded-lg border-l-4 border-red-300">
                      <p className="text-sm text-red-200">
                        <strong>Traditional Approach:</strong> {usp.differentiator}
                      </p>
                    </div>

                    <div className="p-3 bg-green-300/10 rounded-lg border-l-4 border-green-300">
                      <p className="text-sm text-green-200">
                        <strong>Xolace Impact:</strong> {usp.impact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* USPs - Mobile Carousel */}
      <div className="md:hidden">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-rose-800 via-pink-800 to-purple-900">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-300/20 rounded-full mb-6">
                <Award className="w-8 h-8 text-rose-300" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">What Makes Xolace Unique</h3>
              <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
              <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                We&apos;re not just another mental health platform. Here&apos;s what sets us apart from the competition.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentUspSlide * 100}%)` }}
              >
                {usps.map((usp, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        {usp.icon}
                      </div>
                      <h4 className="text-xl font-medium text-gray-50 mb-3">{usp.title}</h4>
                      <p className="text-gray-50/90 leading-relaxed mb-4">{usp.description}</p>

                      <div className="space-y-3">
                        <div className="p-3 bg-red-300/10 rounded-lg border-l-4 border-red-300">
                          <p className="text-sm text-red-200">
                            <strong>Traditional:</strong> {usp.differentiator}
                          </p>
                        </div>

                        <div className="p-3 bg-green-300/10 rounded-lg border-l-4 border-green-300">
                          <p className="text-sm text-green-200">
                            <strong>Xolace:</strong> {usp.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={uspHandlers.prev}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronLeft className="w-5 h-5 text-gray-50" />
              </button>

              <div className="flex gap-2">
                {usps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => uspHandlers.goTo(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentUspSlide ? "bg-teal-500 scale-125" : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={uspHandlers.next}
                disabled={isTransitioning}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              >
                <ChevronRight className="w-5 h-5 text-gray-50" />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Visual Identity */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-300/20 rounded-full mb-6">
              <Palette className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">Visual Identity</h3>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Logo & Typography */}
            <div>
              <h4 className="text-xl font-medium text-gray-50 mb-6 flex items-center gap-2">
                <Type className="w-6 h-6 text-teal-300" />
                Logo & Typography
              </h4>

              <div className="space-y-6">
                <div className="p-8 bg-white rounded-xl text-center">
                  <div className="text-5xl font-bold text-teal-800 mb-4">Xolace</div>
                  <p className="text-gray-600">Primary Wordmark</p>
                </div>

                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h5 className="font-medium text-gray-50 mb-4">Typography System</h5>
                  <div className="space-y-3 text-gray-50/90">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold">Headlines</span>
                      <span className="text-sm text-gray-50/60">Inter Bold</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-medium">Subheadings</span>
                      <span className="text-sm text-gray-50/60">Inter Medium</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base">Body Text</span>
                      <span className="text-sm text-gray-50/60">Inter Regular</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-light">Captions</span>
                      <span className="text-sm text-gray-50/60">Inter Light</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <h4 className="text-xl font-medium text-gray-50 mb-6 flex items-center gap-2">
                <Palette className="w-6 h-6 text-teal-300" />
                Brand Colors
              </h4>

              <div className="grid grid-cols-2 gap-4">
                {brandColors.map((color, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20">
                    <div
                      className="w-full h-16 rounded-lg mb-3 border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h5 className="font-medium text-gray-50 text-sm mb-1">{color.name}</h5>
                    <p className="text-gray-50/70 text-xs mb-2 font-mono">{color.hex}</p>
                    <p className="text-gray-50/80 text-xs leading-relaxed">{color.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Brand Guidelines CTA */}
          <div className="mt-12 text-center">
            <InteractiveHoverButton className="px-8 py-4 bg-teal-900 hover:bg-teal-800 text-white font-semibold rounded-xl border-teal-700">
              Download Brand Guidelines
            </InteractiveHoverButton>
          </div>
        </div>
      </section>
    </div>
  )
}
