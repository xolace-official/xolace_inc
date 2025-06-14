"use client";

import type React from "react";
import {
  Heart,
  Shield,
  Users,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

type ValueItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  backgroundColor: string;
  index: number;
};

const ValueItem = ({
  icon,
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
  backgroundColor,
  index,
}: ValueItemProps) => {
  return (
    <section className={cn("py-16 sm:py-20", backgroundColor)} id="vlaues">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div
          className={cn(
            "flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16",
            isReversed && "lg:flex-row-reverse"
          )}
        >
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 inline-flex">{icon}</div>
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-light mb-4 sm:mb-6 text-gray-50 leading-tight">
              <span className="font-medium text-gray-50">{title}</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-50 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* Image Container with proper containment */}
              <div className="aspect-square relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={imageSrc || "/placeholder.svg?height=400&width=400"}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 400px, 480px"
                    className="object-contain"
                    quality={95}
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Values() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const valuesData = [
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Privacy & Anonymity",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot1.webp",
      imageAlt: "mascot with mask",
      backgroundColor: "bg-teal-900",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-500" />,
      title: "Empathy First",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot2.webp",
      imageAlt: "mascot hugging",
      backgroundColor: "bg-black",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Community Healing",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot3.webp",
      imageAlt: "mascot community",
      backgroundColor: "bg-teal-900",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-500" />,
      title: "Expert Help",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot4.webp",
      imageAlt: "mascot expert help",
      backgroundColor: "bg-black",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % valuesData.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(
      (prev) => (prev - 1 + valuesData.length) % valuesData.length
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <main>
      {/* Header Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-3xl font-light text-gray-50 mb-4">
              Our Values
            </h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-2xl mx-auto text-base sm:text-lg">
              These core principles guide everything we do at Xolace, from how
              we build our platform to how we interact with our community
              members.
            </p>
          </div>
        </div>
      </section>

      {/* Values Items - Desktop */}
      <div className="hidden lg:block">
        {valuesData.map((value, index) => (
          <ValueItem
            key={index}
            icon={value.icon}
            title={value.title}
            description={value.description}
            imageSrc={value.imageSrc}
            imageAlt={value.imageAlt}
            backgroundColor={value.backgroundColor}
            isReversed={index % 2 !== 0}
            index={index}
          />
        ))}
      </div>

      {/* Values Items - Mobile Carousel */}
      <div className="lg:hidden">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {valuesData.map((value, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <section
                  className={cn("py-16 sm:py-20", value.backgroundColor)}
                >
                  <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                    <div className="flex flex-col items-center gap-8 text-center">
                      {/* Icon */}
                      <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                        {value.icon}
                      </div>

                      {/* Image */}
                      <div className="w-full max-w-sm relative">
                        <div className="aspect-square relative bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10 overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={
                                value.imageSrc ||
                                "/placeholder.svg?height=400&width=400"
                              }
                              alt={value.imageAlt}
                              fill
                              sizes="320px"
                              className="object-contain"
                              quality={95}
                              priority={index < 2}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-light mb-4 text-gray-50 leading-tight">
                          <span className="font-medium text-gray-50">
                            {value.title}
                          </span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-50 mb-6 leading-relaxed max-w-2xl mx-auto">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 px-4 bg-black border-none">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous value"
          >
            <ChevronLeft className="w-5 h-5 text-gray-50" />
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {valuesData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed",
                  index === currentSlide
                    ? "bg-teal-500 scale-125"
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Go to value ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next value"
          >
            <ChevronRight className="w-5 h-5 text-gray-50" />
          </button>
        </div>

        {/* Progress Indicator */}
        <div className="px-4 bg-black">
          <div className="text-center text-sm text-gray-50/60 mb-2 border-none">
            {currentSlide + 1} of {valuesData.length}
          </div>
          <div className="w-full bg-white/20 rounded-full h-1">
            <div
              className="bg-teal-500 h-1 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((currentSlide + 1) / valuesData.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
