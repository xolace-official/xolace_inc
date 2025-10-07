import {
  Heart,
  Shield,
  Users,
  Star,
  Zap,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function BrandShowcase() {
  const mascotVariations = [
    {
      image: "/assets/photos/Brand/guardian-flux.png",
      name: "Guardian Flux",
      description: "Representing privacy and protection",
      emotion: "Protective",
    },
    {
      image: "/assets/photos/Brand/caring-flux.png",
      name: "Caring Flux",
      description: "Showing empathy and compassion",
      emotion: "Empathetic",
    },
    {
      image: "/assets/photos/Brand/community-flux.png",
      name: "Community Flux",
      description: "Celebrating togetherness and support",
      emotion: "Joyful",
    },
    {
      image: "/assets/photos/Brand/wise-flux.png",
      name: "Wise Flux",
      description: "Providing expert guidance and wisdom",
      emotion: "Knowledgeable",
    },
  ];

  const usps = [
    {
      icon: <Shield className="w-8 h-8 text-teal-300" />,
      title: "Anonymous by Design",
      description:
        "Complete privacy protection with no personal data collection or identity exposure.",
      differentiator:
        "Unlike traditional therapy platforms that require full identification",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-300" />,
      title: "Community-First Approach",
      description:
        "Peer support combined with professional guidance for holistic healing.",
      differentiator: "Most platforms focus only on 1-on-1 therapy sessions",
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-300" />,
      title: "Instant Connection",
      description:
        "24/7 community support with immediate access to help when you need it most.",
      differentiator: "No waiting lists or appointment scheduling required",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-300" />,
      title: "Global Accessibility",
      description:
        "Breaking down geographical and financial barriers to mental health support.",
      differentiator: "Traditional therapy is limited by location and cost",
    },
  ];

  // const colorPalette = [
  //   {
  //     name: "Primary Teal",
  //     hex: "#0f766e",
  //     usage: "Main brand color, headers, CTAs",
  //   },
  //   { name: "Teal Light", hex: "#5eead4", usage: "Accents, highlights, icons" },
  //   {
  //     name: "Amber Accent",
  //     hex: "#fbbf24",
  //     usage: "Dividers, special highlights",
  //   },
  //   { name: "Slate Dark", hex: "#1e293b", usage: "Text, backgrounds" },
  //   { name: "Gray Light", hex: "#f9fafb", usage: "Light backgrounds, cards" },
  //   { name: "White", hex: "#ffffff", usage: "Text on dark backgrounds" },
  // ];

  const brandValues = [
    {
      icon: <Heart className="w-6 h-6 text-rose-300" />,
      title: "Empathy",
      description:
        "Every interaction is guided by genuine understanding and compassion",
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-300" />,
      title: "Privacy",
      description:
        "Your identity and personal information are always protected",
    },
    {
      icon: <Users className="w-6 h-6 text-green-300" />,
      title: "Community",
      description: "Healing happens best when we support each other",
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-300" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900" id="brand-showcase">
      {/* Hero Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-300/20 rounded-full mb-6">
              <Award className="w-10 h-10 text-teal-300" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet <span className="text-teal-300">Xolace</span>
            </h1>
            <div className="w-24 h-1.5 bg-amber-300 mx-auto mb-8"></div>
            <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
              Where mental health support meets community connection. Discover
              the brand that&apos;s revolutionizing how we approach healing, growth,
              and human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-teal-800 via-cyan-800 to-blue-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">
              Meet Flux
            </h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Flux is more than a mascot, it&apos;s the vibrant spirit of Xolace. With
              a flame shaped head and a soft rainbow gradient body, Flux brings
              warmth, comfort, and the spark of resilience to every journey.
            </p>
          </div>

          {/* Mascot Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-50 mb-6">
                The Story Behind Flux
              </h3>
              <div className="space-y-4 text-gray-50 leading-relaxed">
                <p>
                  <strong className="text-teal-300">Flux</strong> is a
                  comforting presence for anyone navigating emotional ups and
                  downs. Its flame shaped head symbolizes transformation, while
                  the soft gradients represent gentle transitions through
                  emotion and healing.
                </p>
                <p>
                  Designed to be colorful, cute, and emotionally expressive,
                  Flux invites users into a safe space where every feeling is
                  valid. Its black eyes show attentive care, and its glow-like
                  presence mirrors the inner light we often forget we carry.
                </p>
                <p>
                  Flux isn&apos;t just a visual symbol; it&apos;s a reminder that change
                  is okay, and that you’re never alone. In moments of darkness,
                  Flux is the light that gently says, “You’re seen. You matter.
                  And you’re not alone.”
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {mascotVariations.map((variation, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/20 text-center"
                >
                  <div className="aspect-square relative mb-4 bg-white/5 rounded-lg overflow-hidden">
                    <Image
                      src={
                        variation.image ||
                        "/placeholder.svg?height=150&width=150"
                      }
                      alt={variation.name}
                      fill
                      sizes="(max-width: 640px) 150px, 200px"
                      className="object-contain"
                      quality={95}
                    />
                  </div>
                  <h4 className="font-medium text-gray-50 mb-1">
                    {variation.name}
                  </h4>
                  <p className="text-sm text-gray-50/80 mb-2">
                    {variation.description}
                  </p>
                  <span className="inline-block px-2 py-1 bg-teal-300/20 text-teal-300 text-xs rounded-full">
                    {variation.emotion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Motive Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-800 via-teal-800 to-green-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">
              Our Core Motive
            </h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-50 mb-6">
                The Driving Force
              </h3>
              <div className="space-y-6">
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="text-lg font-medium text-gray-50 mb-3">
                    Breaking the Silence
                  </h4>
                  <p className="text-gray-50/90 leading-relaxed">
                    Mental health struggles affect 1 in 4 people, yet stigma
                    keeps millions suffering in silence. We exist to shatter
                    these barriers and create a world where seeking help is seen
                    as strength.
                  </p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="text-lg font-medium text-gray-50 mb-3">
                    Democratizing Support
                  </h4>
                  <p className="text-gray-50/90 leading-relaxed">
                    Quality mental health support shouldn&apos;t be a privilege.
                    We&apos;re committed to making it accessible, affordable, and
                    available to everyone, regardless of their circumstances.
                  </p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="text-lg font-medium text-gray-50 mb-3">
                    Empowering Communities
                  </h4>
                  <p className="text-gray-50/90 leading-relaxed">
                    We believe in the healing power of shared experiences. Our
                    platform connects people with others who understand their
                    journey, creating communities of support and growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
                <h4 className="text-2xl font-bold text-gray-50 mb-4">
                  Our Promise
                </h4>
                <p className="text-lg text-gray-50 leading-relaxed">
                  &quot;Every person deserves a safe space to heal, grow, and thrive.
                  We&apos;re here to ensure that space exists for everyone.&quot;
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {brandValues.map((value, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                      {value.icon}
                    </div>
                    <h5 className="font-medium text-gray-50 mb-2">
                      {value.title}
                    </h5>
                    <p className="text-sm text-gray-50/80">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-800 via-indigo-800 to-purple-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">
              What Makes Us Different
            </h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
              Xolace isn&apos;t just another mental health pla tform. Here&apos;s what sets
              us apart from the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {usps.map((usp, index) => (
              <div
                key={index}
                className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    {usp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-50 mb-2">
                      {usp.title}
                    </h3>
                    <p className="text-gray-50/90 leading-relaxed mb-4">
                      {usp.description}
                    </p>
                    <div className="p-3 bg-amber-300/10 rounded-lg border-l-4 border-amber-300">
                      <p className="text-sm text-amber-200">
                        <strong>Competitive Advantage:</strong>{" "}
                        {usp.differentiator}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-800 via-pink-800 to-rose-900">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">
              Visual Identity
            </h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
         
            <div>
              <h3 className="text-xl font-medium text-gray-50 mb-6 flex items-center gap-2">
                <Type className="w-6 h-6 text-teal-300" />
                Logo & Typography
              </h3>
              <div className="space-y-6">
                <div className="p-8 bg-white rounded-xl text-center">
                  <div className="text-4xl font-bold text-teal-800 mb-2">
                    Xolace
                  </div>
                  <p className="text-gray-600 text-sm">Primary Logo</p>
                </div>
                <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
                  <h4 className="font-medium text-gray-50 mb-3">
                    Typography Guidelines
                  </h4>
                  <div className="space-y-2 text-gray-50/90">
                    <p>
                      <strong>Primary:</strong> Inter (Clean, modern,
                      accessible)
                    </p>
                    <p>
                      <strong>Headers:</strong> Font-weight 300-700
                    </p>
                    <p>
                      <strong>Body:</strong> Font-weight 400-500
                    </p>
                  </div>
                </div>
              </div>
            </div>

          
            <div>
              <h3 className="text-xl font-medium text-gray-50 mb-6 flex items-center gap-2">
                <Palette className="w-6 h-6 text-teal-300" />
                Color Palette
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {colorPalette.map((color, index) => (
                  <div
                    key={index}
                    className="bg-white/10 rounded-lg p-4 backdrop-blur-sm border border-white/20"
                  >
                    <div
                      className="w-full h-16 rounded-lg mb-3 border-2 border-white/20"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <h4 className="font-medium text-gray-50 text-sm mb-1">
                      {color.name}
                    </h4>
                    <p className="text-gray-50/70 text-xs mb-2">{color.hex}</p>
                    <p className="text-gray-50/80 text-xs">{color.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

   
          <div className="mt-12 p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
            <h3 className="text-xl font-medium text-gray-50 mb-6 text-center">
              Brand Personality
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-medium text-teal-300 mb-2">Voice</h4>
                <p className="text-gray-50/90 text-sm">
                  Warm, empathetic, professional yet approachable
                </p>
              </div>
              <div>
                <h4 className="font-medium text-blue-300 mb-2">Tone</h4>
                <p className="text-gray-50/90 text-sm">
                  Supportive, non-judgmental, encouraging, authentic
                </p>
              </div>
              <div>
                <h4 className="font-medium text-purple-300 mb-2">
                  Personality
                </h4>
                <p className="text-gray-50/90 text-sm">
                  Trustworthy, innovative, inclusive, hopeful
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
