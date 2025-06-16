"use client"

import { Award, BookOpen, Heart, Shield, CheckCircle, Globe } from "lucide-react"
import Image from "next/image"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
export default function ExpertTeam() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      title: "Chief Clinical Officer",
      credentials: "PhD, Licensed Clinical Psychologist",
      specialties: ["Anxiety Disorders", "Trauma Recovery", "Mindfulness-Based Therapy"],
      experience: "15+ years",
      languages: ["English", "Mandarin"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specializes in evidence-based treatments for anxiety and trauma. Pioneer in digital mental health platforms.",
      approach: "Combines traditional CBT with innovative digital tools for accessible mental health care.",
    },
    {
      name: "Dr. Marcus Johnson",
      title: "Senior Therapist",
      credentials: "LCSW, Certified Crisis Counselor",
      specialties: ["Depression", "Crisis Intervention", "Group Therapy"],
      experience: "12+ years",
      languages: ["English", "Spanish"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in crisis intervention and community-based mental health support with extensive emergency response experience.",
      approach: "Focuses on immediate stabilization and long-term resilience building through community connection.",
    },
    {
      name: "Dr. Priya Patel",
      title: "Trauma Specialist",
      credentials: "MD, Psychiatrist, EMDR Certified",
      specialties: ["PTSD", "Complex Trauma", "EMDR Therapy"],
      experience: "18+ years",
      languages: ["English", "Hindi", "Gujarati"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Leading expert in trauma-informed care with extensive research in digital therapeutic interventions.",
      approach: "Integrates traditional trauma therapies with peer support for comprehensive healing.",
    },
    {
      name: "Dr. Alex Rivera",
      title: "Adolescent Specialist",
      credentials: "PsyD, Licensed Child Psychologist",
      specialties: ["Teen Mental Health", "Family Therapy", "Identity Issues"],
      experience: "10+ years",
      languages: ["English", "Spanish", "Portuguese"],
      image: "/placeholder.svg?height=300&width=300",
      bio: "Dedicated to supporting young people through mental health challenges with culturally sensitive approaches.",
      approach: "Creates safe spaces for teens to explore identity and build coping skills through peer connection.",
    },
  ]

  const qualifications = [
    {
      icon: <Award className="w-6 h-6 text-teal-500" />,
      title: "Licensed Professionals",
      description: "All therapists are licensed in their respective states and countries",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-teal-500" />,
      title: "Continuous Education",
      description: "Regular training in latest mental health research and digital therapy methods",
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-500" />,
      title: "Privacy Trained",
      description: "Specialized training in anonymous therapy and digital privacy protection",
    },
    {
      icon: <Heart className="w-6 h-6 text-teal-500" />,
      title: "Trauma-Informed",
      description: "All staff trained in trauma-informed care and crisis intervention",
    },
  ]

  const vettingProcess = [
    {
      step: 1,
      title: "Credential Verification",
      description: "Thorough verification of licenses, certifications, and educational background",
    },
    {
      step: 2,
      title: "Experience Assessment",
      description: "Minimum 5 years clinical experience with demonstrated expertise",
    },
    {
      step: 3,
      title: "Digital Platform Training",
      description: "Specialized training in anonymous therapy and digital mental health tools",
    },
    {
      step: 4,
      title: "Ongoing Supervision",
      description: "Regular peer consultation and continuous professional development",
    },
  ]

  return (
    <section className="py-16 sm:py-20 bg-teal-900" id="expert-team">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-50 mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Expert Team
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            Licensed mental health professionals dedicated to providing compassionate, evidence-based care in a safe,
            anonymous environment
          </p>
        </div>

        {/* Team Qualifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {qualifications.map((qual, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                {qual.icon}
              </div>
              <h3 className="font-medium text-gray-50 mb-2">{qual.title}</h3>
              <p className="text-sm text-gray-50/80 leading-relaxed">{qual.description}</p>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-purple-300/20 to-blue-300/20 flex-shrink-0">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    quality={95}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-gray-50 mb-1">{member.name}</h3>
                  <p className="text-purple-300 font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-gray-50/80 mb-3">{member.credentials}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-50/70">
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {member.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {member.languages.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-50 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, specIndex) => (
                      <span
                        key={specIndex}
                        className="inline-block px-3 py-1 bg-teal-900/20 text-teal-500 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-50 mb-2">About</h4>
                  <p className="text-sm text-gray-50/80 leading-relaxed mb-3">{member.bio}</p>
                  <p className="text-sm text-gray-50/70 italic">&quot;{member.approach}&quot;</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vetting Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-gray-50 mb-4">Our Rigorous Vetting Process</h3>
            <p className="text-gray-50/80 max-w-2xl mx-auto">
              Every mental health professional on our platform undergoes extensive screening to ensure the highest
              quality of care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vettingProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-teal-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-white">{process.step}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <CheckCircle className="w-4 h-4 text-green-300" />
                  </div>
                </div>
                <h4 className="font-medium text-gray-50 mb-3">{process.title}</h4>
                <p className="text-sm text-gray-50/80 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-teal-500 mb-2">50+</div>
            <div className="text-sm text-gray-50/80">Licensed Professionals</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-teal-500 mb-2">15</div>
            <div className="text-sm text-gray-50/80">Languages Supported</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="text-3xl font-bold text-teal-500 mb-2">24/7</div>
            <div className="text-sm text-gray-50/80">Crisis Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
          <h3 className="text-xl font-medium text-gray-50 mb-4">Ready to Connect with a Professional?</h3>
          <p className="text-gray-50/80 mb-6 max-w-2xl mx-auto">
            Our matching system connects you with the right therapist based on your needs, preferences, and availability
          </p>
          <InteractiveHoverButton className="px-8 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700">
            Find Your Therapist
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  )
}
