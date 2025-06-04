import { Megaphone, Leaf, Shield, HeartHandshake } from "lucide-react";
import { InteractiveHoverButton } from "../ui/magicui/interactive-hover-button";
import Image from "next/image";

export default function WhyXolaceSection() {
  const features = [
    {
      icon: Megaphone,
      title: "Share Without Fear",
      description:
        "Post and share your thoughts and experiences anonymously, without judgment.",
    },
    {
      icon: HeartHandshake,
      title: " Find Your Tribe",
      description:
        "Connect with people who understand and share your struggles.",
    },
    {
      icon: Leaf,
      title: "A Space to Heal",
      description: "Quietly process, reflect, and grow at your own pace.",
    },
    {
      icon: Shield,
      title: "Your Privacy, Our Priority",
      description: "Your data is safe. Your identity stays yours.",
    },
  ];

  return (
    <section className="relative w-full px-4 pb-16 pt-8 md:px-20 md:py-24 bg-teal-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 text-left">
            Why <span className="text-white">Xolace?</span>
          </h2>
          <h1 className="text-lg md:text-[18px] text-white max-w-3xl  leading-relaxed text-left">
            Life can be overwhelming. Xolace is here to make it a little
            lighter, by helping you share, connect, and heal. We all have a
            story. At Xolace, you’re never alone. Your voice matters, and your
            journey deserves a safe space.
          </h1>

          <div className="flex justify-center lg:justify-start w-full lg:w-1/2 absolute top-[11rem] lg:right-[-2.5rem] bg-black md:top-[-3.5rem]">
            <Image
              src="/assets/photos/Landing/mascotLanding2.png"
              alt="mascot image"
              width={400}
              height={400}
              priority
              className="w-54 sm:w-72 md:w-[45vw] lg:w-80 xl:w-96 h-auto lg:pt-0 absolute right-[-3rem]"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[8rem]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-teal-300/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20"
              >
                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-teal-300/10 flex items-center justify-center group-hover:bg-teal-300/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-teal-300 stroke-2" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-teal-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-teal-50 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* CTA button */}
        <div className="md:flex justify-center py-20 hidden">
          <InteractiveHoverButton>Explore Xolace</InteractiveHoverButton>
        </div>
        <div className="flex justify-center">
          <button className="md:hidden bg-black text-teal-300 py-2 px-5 mt-10 border-teal-300 border-2 rounded-4xl">
            Explore Xolace
          </button>
        </div>
      </div>
    </section>
  );
}
