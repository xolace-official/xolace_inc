import { Megaphone, Leaf, Shield, HeartHandshake } from "lucide-react";
import { InteractiveHoverButton } from "../ui/magicui/interactive-hover-button";
import Image from "next/image";
import Link from "next/link";

export default function WhyXolaceSection() {
  const features = [
    {
      icon: Megaphone,
      title: "Anonymity empowers honesty",
      description:
        "Many people hold back or avoid seeking help when they feel exposed.",
    },
    {
      icon: HeartHandshake,
      title: " Peer support meets expert guidance",
      description:
        "Connect with those who’ve been there and tap into our Guides (licensed pros) to fuel your growth.",
    },
    {
      icon: Leaf,
      title: "Warm, human support, not a cold help desk",
      description: "Xolace is your digital campfire: a safe, empathetic space for sharing and connecting experiences.",
    },
    {
      icon: Shield,
      title: "Trusted, Scalable, Barrier-Free Support",
      description: "Guides earn organic trust through genuine community engagement, no waitlists, paywalls, or ads.",
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
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-3 text-left">
            Why <span className="text-white">Xolace?</span>
          </h2>
          <h1 className="text-lg md:text-[18px] text-white max-w-3xl  leading-relaxed text-left">
            Because mental health needs a scalable, low-barrier support network
            especially for those who hesitate to seek help. Xolace unites social
            validation with expert care, unlocking a larger, untapped market of
            privacy-focused wellness seekers while fulfilling a deep social
            mission.
          </h1>

          <div className="flex justify-center lg:justify-start w-full lg:w-1/2 absolute top-[13rem] sm:top-[8rem] lg:right-[-3rem] bg-black md:top-[6rem] lg:top-[-3.5rem]">
            <Image
              src="/assets/photos/Landing/mascotLanding2.png"
              alt="mascot image"
              width={400}
              height={400}
              priority
              className="w-54 sm:w-60 md:w-[35vw] lg:w-80 xl:w-96 h-auto lg:pt-0 absolute right-[-5rem] md:right-[-7rem] lg:right-[-3rem]"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[11rem] md:mt-50 lg:mt-40">
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
        <div className="flex justify-center py-20 items-centerb border-none">
          <Link href="https://xolace.app/">  
          <InteractiveHoverButton className="bg-teal-400 text-black">
            Explore Xolace
          </InteractiveHoverButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
