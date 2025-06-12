"use client"

import { Star, Quote, Heart, TrendingUp, Users, Shield } from "lucide-react"
import { useState } from "react"

export default function SuccessStories() {
  const [activeStory, setActiveStory] = useState(0)

  const testimonials = [
    {
      quote:
        "I was skeptical about online support, but Xolace changed everything. The anonymous community gave me courage to share my struggles with anxiety for the first time. Six months later, I'm managing my panic attacks and helping others too.",
      author: "Sarah M.",
      role: "Community Member",
      journey: "Anxiety & Panic Disorders",
      timeframe: "6 months",
      rating: 5,
      impact: "Reduced panic attacks by 80%",
      category: "anxiety",
    },
    {
      quote:
        "As a therapist on Xolace, I've witnessed incredible breakthroughs. The combination of peer support and professional guidance creates a unique healing environment. My clients feel safer to open up here than in traditional settings.",
      author: "Dr. James L.",
      role: "Licensed Therapist",
      journey: "Professional Perspective",
      timeframe: "2 years",
      rating: 5,
      impact: "Helped 200+ individuals",
      category: "professional",
    },
    {
      quote:
        "After losing my job, I fell into deep depression. The 24/7 community support kept me going during my darkest nights. Now I'm not just surviving - I'm thriving and have found my purpose helping others.",
      author: "Alex R.",
      role: "Community Member",
      journey: "Depression & Career Transition",
      timeframe: "1 year",
      rating: 5,
      impact: "From crisis to community leader",
      category: "depression",
    },
    {
      quote:
        "The crisis support saved my life. When I was at my lowest point, having someone available immediately made all the difference. The follow-up care helped me build long-term coping strategies.",
      author: "Jordan K.",
      role: "Community Member",
      journey: "Crisis Intervention & Recovery",
      timeframe: "8 months",
      rating: 5,
      impact: "Prevented self-harm, built resilience",
      category: "crisis",
    },
  ]

  const impactStats = [
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      number: "50,000+",
      label: "Lives Touched",
      description: "People who found support and healing",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      number: "95%",
      label: "Feel Less Alone",
      description: "Report reduced isolation and loneliness",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
      number: "87%",
      label: "Improved Wellbeing",
      description: "Show measurable mental health progress",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      number: "100%",
      label: "Privacy Protected",
      description: "Anonymous support with zero data breaches",
    },
  ]

  const journeyStages = [
    { stage: "Crisis", percentage: 15, color: "bg-teal-900" },
    { stage: "Seeking Help", percentage: 25, color: "bg-teal-800" },
    { stage: "Building Support", percentage: 35, color: "bg-teal-700" },
    { stage: "Growing Stronger", percentage: 45, color: "bg-teal-600" },
    { stage: "Helping Others", percentage: 25, color: "bg-teal-500" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-teal-900">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Stories of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Transformation
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people who found healing, hope, and community through Xolace
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-50 mb-2">{stat.number}</div>
              <div className="text-lg font-medium text-gray-50 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-50/80">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-teal-500" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonials[activeStory].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-300 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-50 leading-relaxed mb-6">
                  "{testimonials[activeStory].quote}"
                </blockquote>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-gray-50 mb-1">{testimonials[activeStory].author}</div>
                    <div className="text-sm text-gray-50/70 mb-2">{testimonials[activeStory].role}</div>
                    <div className="text-sm text-teal-300">{testimonials[activeStory].journey}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-50/80 mb-1">
                      <strong>Journey Length:</strong> {testimonials[activeStory].timeframe}
                    </div>
                    <div className="text-sm text-green-300">
                      <strong>Impact:</strong> {testimonials[activeStory].impact}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex gap-2 justify-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeStory ? "bg-teal-500" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Healing Journey Visualization */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-medium text-gray-50 mb-4">The Healing Journey</h3>
          <p className="text-gray-50/80 mb-8">Where our community members are in their mental health journey</p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {journeyStages.map((stage, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-32 text-right text-sm text-gray-50/80">{stage.stage}</div>
                  <div className="flex-1 bg-white/10 rounded-full h-8 overflow-hidden">
                    <div
                      className={`h-full ${stage.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-4`}
                      style={{ width: `${stage.percentage}%` }}
                    >
                      <span className="text-sm font-medium text-white">{stage.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-teal-300" />
            <span className="font-medium text-gray-50">Privacy Protected</span>
          </div>
          <p className="text-sm text-gray-50/80">
            All stories shared with permission. Names and identifying details have been changed to protect privacy while
            maintaining the authenticity of each journey.
          </p>
        </div>
      </div>
    </section>
  )
}
