"use client";

import { ArrowRight, Play, Users, Shield, Heart, Star } from "lucide-react";
import Image from "next/image";

export default function CompanyHero() {
  const stats = [
    { number: "50K+", label: "Community Members" },
    { number: "1M+", label: "Support Messages" },
    { number: "95%", label: "Feel Less Alone" },
    { number: "24/7", label: "Support Available" },
  ];

  const trustIndicators = [
    {
      icon: <Shield className="w-5 h-5 text-teal-300" />,
      text: "Privacy Protected",
    },
    {
      icon: <Users className="w-5 h-5 text-blue-300" />,
      text: "Licensed Therapists",
    },
    { icon: <Heart className="w-5 h-5 text-rose-300" />, text: "Peer Support" },
    { icon: <Star className="w-5 h-5 text-amber-300" />, text: "4.9/5 Rating" },
  ];

  return (
    <section className="relative p-10 min-h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-teal-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-300/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-amber-300/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-rose-300/30 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center min-h-screen py-12 lg:py-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-50">
                Trusted by 50,000+ people worldwide
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
              Your Safe Space for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Mental Wellness
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-50/90 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Connect with a supportive community and licensed professionals in
              a completely anonymous environment. Because healing happens best
              when you feel truly safe.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                >
                  {indicator.icon}
                  <span className="text-sm text-gray-50">{indicator.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center gap-2">
                  Join Our Community
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Watch Our Story
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-50/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main Hero Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-300/10 via-transparent to-cyan-300/10 rounded-3xl"></div>

                {/* Hero Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Xolace community support illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain drop-shadow-2xl"
                    quality={95}
                    priority
                  />
                </div>

                {/* Floating UI Elements */}
                <div className="absolute top-6 right-6 p-3 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white font-medium">
                      Online Now
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 max-w-48">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-teal-300/30 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-teal-300" />
                    </div>
                    <div>
                      <div className="text-xs text-white font-medium">
                        Support Message
                      </div>
                      <div className="text-xs text-white/70">2 min ago</div>
                    </div>
                  </div>
                  <p className="text-xs text-white/90">
                    "You're not alone in this journey..."
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-amber-300/20 to-rose-300/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex flex-col items-center gap-2 text-gray-50/60">
          <span className="text-sm">Discover More</span>
          <div className="w-6 h-10 border-2 border-gray-50/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-50/60 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
