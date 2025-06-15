"use client";

import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";

const HeroSection = () => {
  return (
    <>
      {/* first section-heropage */}
      <section className="text-white bg-black px-4 sm:px-6 lg:px-12 py-10 flex justify-center">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:px-34">
          {/* Image on Left (on large screens) */}
          <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
            <Image
              src="/assets/photos/Landing/mascotLanding.png"
              alt="mascot image"
              width={400}
              height={400}
              priority
              className="w-64 sm:w-72 md:w-[45vw] lg:w-80 xl:w-96 h-auto pt-3 lg:pt-0"
            />
          </div>

          {/* Text on Right */}
          <div className="w-full lg:w-1/2 text-left lg:text-left">
            <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 text-white">
              Where minds connects and {" "}
              <span className="font-medium text-teal-700">hearts heal.</span> 
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-50 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
             Xolace is a safe, anonymous space to share your struggles, seek
              support, and connect with others. It’s more than just a platform;
              it’s a community where your story matters, and healing begins
              through shared experiences. 🌿
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <InteractiveHoverButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium text-sm sm:text-base">
                Join Our Community
              </InteractiveHoverButton>
              <InteractiveHoverButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors font-medium text-sm sm:text-base">
                Learn More
              </InteractiveHoverButton>
            </div>
              {/* <InteractiveHoverButton className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                Join Our Community
              </InteractiveHoverButton>
              <InteractiveHoverButton className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg hover:bg-teal-50 transition-colors">
                Learn More
              </InteractiveHoverButton> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
