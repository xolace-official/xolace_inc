"use client";

import {
  TrendingUp,
  Users,
  Heart,
  MessageCircle,
  Star,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function CommunityImpact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      number: "50K+",
      label: "Community Members",
      description: "People finding support and connection",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-500" />,
      number: "1M+",
      label: "Support Messages",
      description: "Conversations that changed lives",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      number: "95%",
      label: "Feel Less Alone",
      description: "Members report reduced isolation",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-500" />,
      number: "87%",
      label: "Improved Wellbeing",
      description: "Members show measurable progress",
    },
  ];

  const testimonials = [
    {
      quote:
        "Xolace gave me the courage to seek help. The anonymous support helped me open up about my anxiety for the first time.",
      author: "Sarah M.",
      role: "Community Member",
      rating: 5,
    },
    {
      quote:
        "As a therapist on the platform, I've seen incredible breakthroughs. The community support amplifies the healing process.",
      author: "Dr. James L.",
      role: "Licensed Therapist",
      rating: 5,
    },
    {
      quote:
        "I found my tribe here. People who understand my struggles and celebrate my victories. It's been life-changing.",
      author: "Alex R.",
      role: "Community Member",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="bg-teal-900 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-300/20 rounded-full mb-6">
            <Award className="w-8 h-8 text-teal-500" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">
            Community Impact
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Every day, our community creates ripples of positive change. Here's
            how we're making a difference in the lives of people seeking mental
            health support.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-gray-50 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-medium text-gray-50 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-50/80">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Impact Visualization */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-50 text-center mb-8">
            Growth Over Time
          </h3>
          <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <div className="flex items-end justify-between h-40 gap-4">
              {[20, 35, 45, 60, 75, 85, 100].map((height, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-lg transition-all duration-1000 ease-out"
                    style={{ height: `${height}%` }}
                  ></div>
                  <div className="text-xs text-gray-50/60 mt-2">
                    {2018 + index}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-50/80">
                Community Growth (in thousands)
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials - Desktop */}
        <div className="hidden md:block">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-50 text-center mb-8">
            Stories of Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-teal-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-50 mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-medium text-gray-50">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-50/70">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials - Mobile Carousel */}
        <div className="md:hidden">
          <h3 className="text-xl font-medium text-gray-50 text-center mb-8">
            Stories of Impact
          </h3>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 text-center">
                    {/* Rating Stars */}
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-teal-500 fill-current"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-50 mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="border-t border-white/20 pt-4">
                      <div className="font-medium text-gray-50 text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-50/70 mt-1">
                        {testimonial.role}
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
              onClick={prevSlide}
              disabled={isTransitioning}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-50" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-teal-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-50" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <div className="text-sm text-gray-50/60 mb-2">
              {currentSlide + 1} of {testimonials.length}
            </div>
            <div className="w-full max-w-xs mx-auto bg-white/20 rounded-full h-1">
              <div
                className="bg-teal-500 h-1 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
