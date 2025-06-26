import {
  Rocket,
  Globe,
  Star,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
export default function TheFutureWeEnvision() {
  const visionPoints = [
    {
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      title: "A Global Fireside",
      description:
        "A world where language, location, or income never stand in the way of getting the emotional support you need.",
    },
    ,
    {
      icon: <Zap className="w-6 h-6 text-teal-500" />,
      title: "Guided Discovery",
      description:
        "Intelligent, empathetic technology that gently guides you to the 'Sparks' and 'Guides' most relevant to your journey.",
    },
    {
      icon: <Star className="w-6 h-6 text-teal-500" />,
      title: "Preventive Care",
      description:
        "Tools and nudges designed to build self-awareness and emotional strength, helping you navigate life's challenges before they become overwhelming.",
    },
  ];

  const roadmapItems = [
    {
      year: "2024",
      title: "Enhanced Platform",
      description:
        "Advanced matching algorithms and expanded therapist network",
      status: "in-progress",
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Launch in 10 new countries with localized support",
      status: "planned",
    },
    {
      year: "2026",
      title: "AI Integration",
      description:
        "Smart wellness tracking and personalized intervention tools",
      status: "planned",
    },
    {
      year: "2027",
      title: "Community Hubs",
      description: "Physical wellness centers integrated with digital platform",
      status: "planned",
    },
  ];

  return (
    <section className="bg-black py-16 sm:py-20" id="future">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-300/20 rounded-full mb-6">
            <Rocket className="w-8 h-8 text-teal-500" />
          </div>
          <h2 className="text-4xl sm:text-3xl font-light text-gray-50 mb-4">
            The Future We Envision
          </h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            We envision a future where sharing our journey is second nature, and
            vulnerability is met with understanding, not judgment. We&apos;re
            building a world where the &apos;Digital Campfire&apos; is always lit, where
            technology fades into the background, and the most powerful form of
            support is the shared wisdom of those who have walked the path
            before.
          </p>
        </div>

        {/* Vision Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Vision Points */}
          <div>
            <div className="space-y-6">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-50 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-50/80 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Illustration */}
          <div className="relative">
            <div className="aspect-square relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/20 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="/assets/photos/About/aboutFuture.png"
                  alt="Illustration of our future vision"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-purple-300/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-6 w-6 h-6 bg-blue-300/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-50 text-center mb-8">
            Our Roadmap
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-gray-50">
                      {item.year}
                    </span>
                    {item.status === "in-progress" ? (
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    ) : (
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <h4 className="text-lg font-medium text-gray-50 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-50/80 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  {item.status === "in-progress" && (
                    <div className="mt-4 flex items-center text-green-300 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      In Progress
                    </div>
                  )}
                </div>
                {index < roadmapItems.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-50/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-teal-900 rounded-2xl p-8 sm:p-12 backdrop-blur-sm border border-white/10">
          <h3 className="text-xl sm:text-2xl font-medium text-gray-50 mb-4">
            Join Us in Building the Future
          </h3>
          <p className="text-lg text-gray-50 max-w-3xl mx-auto mb-8 leading-relaxed">
            The future of experience sharing and mental health support
            isn&apos;t just something we&apos;re building, it&apos;s something
            we&apos;re building together. Every member, every conversation,
            every moment of connection brings us closer to our vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <InteractiveHoverButton className="px-8 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
              Join Our Community
            </InteractiveHoverButton>
            <InteractiveHoverButton className="px-8 py-3 bg-white/10 hover:bg-white/20 text-gray-50 font-medium rounded-lg border border-white/20">
              Learn More
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </section>
  );
}
