import type React from "react"
import { Heart, Shield, Users, MessageCircle } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type ValueItemProps = {
  icon: React.ReactNode
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  isReversed?: boolean
  backgroundColor: string
  index: number
}

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
    <section className={cn("py-16 sm:py-20", backgroundColor)}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div
          className={cn(
            "flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16",
            isReversed && "lg:flex-row-reverse",
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
              <div className="aspect-square relative bg-transparent p-6 overflow-hidden">
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
  )
}

export default function Values() {
  const valuesData = [
    {
      icon: <Shield className="w-10 h-10 text-teal-600" />,
      title: "Privacy & Anonymity",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot1.webp",
      imageAlt: "mascot with mask",
      backgroundColor: "bg-black",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Empathy First",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot2.webp",
      imageAlt: "mascot hugging",
      backgroundColor: "bg-teal-900",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Community Healing",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot3.webp",
      imageAlt: "mascot community",
      backgroundColor: "bg-black",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-600" />,
      title: "Expert Help",
      description:
        "At Xolace, we believe in the power of shared experiences and expert guidance. A safe space where you can be yourself, find support, and grow—all while maintaining your privacy.",
      imageSrc: "/assets/photos/About/aboutMascot4.webp",
      imageAlt: "mascot expert help",
      backgroundColor: "bg-teal-900",
    },
  ]

  return (
    <main>
      {/* Header Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
            <p className="text-gray-50 max-w-2xl mx-auto text-base sm:text-lg">
              These core principles guide everything we do at Xolace, from how we build our platform to how we interact
              with our community members.
            </p>
          </div>
        </div>
      </section>

      {/* Values Items */}
      <div>
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
    </main>
  )
}
