"use client";

import {
  Shield,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Users,
  CheckCircle,
  Award,
} from "lucide-react";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
export default function AccessibilityPrivacy() {
  const privacyFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-teal-500" />,
      title: "Zero Data Collection",
      description:
        "We don't collect, store, or share any personal identifying information",
      details: [
        "No real names required",
        "No email verification",
        "No location tracking",
        "Anonymous user IDs only",
      ],
    },
    {
      icon: <Lock className="w-8 h-8 text-teal-500" />,
      title: "End-to-End Encryption",
      description: "All conversations are encrypted and secure from end to end",
      details: [
        "Military-grade encryption",
        "Secure data transmission",
        "Encrypted storage",
        "Regular security audits",
      ],
    },
    {
      icon: <Eye className="w-8 h-8 text-teal-500" />,
      title: "Anonymous Participation",
      description:
        "Participate in all activities without revealing your identity",
      details: [
        "Choose your own username",
        "Avatar-based profiles",
        "No photo requirements",
        "Optional voice distortion",
      ],
    },
    {
      icon: <Users className="w-8 h-8 text-teal-500" />,
      title: "Safe Community",
      description: "Moderated spaces with strict community guidelines",
      details: [
        "24/7 moderation",
        "Report system",
        "Community guidelines",
        "Zero tolerance for harassment",
      ],
    },
  ];

  const accessibilityFeatures = [
    {
      icon: <Smartphone className="w-6 h-6 text-teal-500" />,
      title: "Mobile Optimized",
      description: "Full functionality across all devices and screen sizes",
    },
    {
      icon: <Globe className="w-6 h-6 text-teal-500" />,
      title: "Multi-Language Support",
      description: "Available in 15+ languages with cultural sensitivity",
    },
    {
      icon: <Eye className="w-6 h-6 text-teal-500" />,
      title: "Screen Reader Compatible",
      description: "Full compatibility with assistive technologies",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-500" />,
      title: "Inclusive Design",
      description: "Designed for users of all abilities and backgrounds",
    },
  ];

  const certifications = [
    {
      name: "HIPAA Compliant",
      description: "Healthcare privacy standards",
      icon: <Shield className="w-6 h-6 text-teal-500" />,
    },
    {
      name: "SOC 2 Type II",
      description: "Security and availability",
      icon: <Lock className="w-6 h-6 text-teal-500" />,
    },
    {
      name: "WCAG 2.1 AA",
      description: "Web accessibility guidelines",
      icon: <Eye className="w-6 h-6 text-teal-500" />,
    },
    {
      name: "ISO 27001",
      description: "Information security management",
      icon: <Award className="w-6 h-6 text-teal-500" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Our Purpose
            Privacy &{" "}
            <span className="text-3xl font-light text-transparent ddddddddmdb-4 bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Accessibility
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Your safety, privacy, and accessibility are at the core of
            everything we do. Learn how we protect and empower every user.
          </p>
        </div>

        {/* Privacy Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 text-center mb-8">
            Privacy Protection
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {privacyFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-50 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-50/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-300 flex-shrink-0" />
                      <span className="text-gray-50/90 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 text-center mb-8">
            Accessibility Commitment
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessibilityFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-medium text-gray-50 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-50/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 text-center mb-8">
            Trust & Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                  {cert.icon}
                </div>
                <h4 className="font-medium text-gray-50 mb-2">{cert.name}</h4>
                <p className="text-sm text-gray-50/80">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="text-center p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
          <h3 className="text-xl font-medium text-gray-50 mb-4">
            See Our Privacy in Action
          </h3>
          <p className="text-gray-50/80 mb-6 max-w-2xl mx-auto">
            Experience how our platform protects your privacy while providing
            full functionality. Try our interactive demo to see the difference.
          </p>
          <InteractiveHoverButton className="px-8 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
            Try Interactive Demo
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
