import { Heart, Shield, Users, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Values() {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Privacy & Anonymity",
      description:
        "We protect your identity so you can share openly without fear of judgment or exposure.",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Empathy First",
      description:
        "Every interaction on our platform is guided by deep empathy and understanding.",
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Community Healing",
      description:
        "We believe in the transformative power of shared experiences and collective support.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-600" />,
      title: "Expert Guidance",
      description:
        "Our certified counselors provide professional support based on proven methods.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-teal-800">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-50 mb-4">Our Values</h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-50 max-w-2xl mx-auto text-base sm:text-lg">
            These core principles guide everything we do at Xolace, from how we build our platform to how we interact
            with our community members.
          </p>
        </div>

        <div className="space-y-20">
          {values.map((value, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Content Side */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm mx-auto md:mx-0 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-gray-50">{value.title}</h3>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed">{value.description}</p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src="/assets/photos/Landing/mascotLanding1.png"
                  alt="Company Mascot"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
