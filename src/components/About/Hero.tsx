import Image from "next/image"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"

export default function Hero() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 overflow-hidden bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 C40,33 60,67 100,100 L0,100 Z" fill="currentColor" className="text-teal-900" />
          <path d="M0,0 C20,33 40,67 100,100 L0,100 Z" fill="currentColor" className="text-amber-300" />
        </svg>
      </div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-teal-800 leading-tight">
              Your journey to <span className="font-medium text-teal-700">healing</span> starts with connection
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can
              be yourself, find support, and grow, all while maintaining your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <InteractiveHoverButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm sm:text-base">
                Join Our Community
              </InteractiveHoverButton>
              <InteractiveHoverButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium text-sm sm:text-base">
                Learn More
              </InteractiveHoverButton>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
              {/* Main Image Container */}
              <div className="aspect-square relative">
                <Image
                  src="/assets/photos/About/aboutHero.webp?height=400&width=400"
                  alt="People supporting each other"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Testimonial Card */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 lg:-bottom-6 lg:-right-6 bg-amber-100 p-3 sm:p-4 lg:p-5 rounded-xl shadow-md max-w-[280px] sm:max-w-xs lg:max-w-sm">
                <p className="text-teal-800 font-medium text-sm sm:text-base leading-snug">
                  I found my voice here when I thought I had lost it forever.
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-2">Anonymous Member</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
            Trusted by thousands of people on their healing journey
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">100% Anonymous</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Licensed Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">Safe Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
