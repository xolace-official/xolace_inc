"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <main className="min-h-screen">
        {/* first section-heropage */}
        <section className="text-white bg-black px-4 sm:px-6 lg:px-12 py-10 h-screen flex justify-center">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 lg:px-34">
            {/* Image on Left (on large screens) */}
            <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
              <Image
                src="/assets/photos/Landing/mascotLanding.webp"
                alt="mascot image"
                width={300}
                height={300}
                priority
                className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 h-auto pt-5 lg:pt-0"
              />
            </div>

            {/* Text on Right */}
            <div className="w-full lg:w-1/2 text-left lg:text-left">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
                <span className="text-teal-200">The anonymous circle </span>
                where minds connect and hearts heal.
              </h4>
              <h1 className="text-left sm:text-lg md:text-xl leading-relaxed">
                Xolace is a safe, anonymous space to share your struggles, seek
                support, and connect with others. It’s more than just a platform
                — it’s a community where your story matters, and healing begins
                through shared experiences. 🌿
              </h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroSection;
