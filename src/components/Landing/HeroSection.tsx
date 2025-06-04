"use client";

import Image from "next/image";

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
            <h4 className="text-4xl sm:text-4xl md:text-6xl font-extrabold mb-6">
              <span className="text-teal-200">The anonymous circle </span>
              where minds connect and hearts heal.
            </h4>
            <h1 className="text-[18px] text-left sm:text-2xl md:text-xl leading-relaxed">
              Xolace is a safe, anonymous space to share your struggles, seek
              support, and connect with others. It’s more than just a platform;
              it’s a community where your story matters, and healing begins
              through shared experiences. 🌿
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
