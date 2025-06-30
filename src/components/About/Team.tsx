import { div } from "motion/react-client"
import Image from "next/image"

export default function Team() {
  const team = [
    // {
    //   name: "Dr. Sarah Chen",
    //   role: "Clinical Director",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Licensed psychologist with 15+ years specializing in trauma and anxiety disorders.",
    // },
    // {
    //   name: "Michael Rodriguez",
    //   role: "Community Lead",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Mental health advocate with experience building supportive online communities.",
    // },
    // {
    //   name: "Dr. James Wilson",
    //   role: "Head of Counseling",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Board-certified therapist focused on accessible mental healthcare for all.",
    // },
    // {
    //   name: "Aisha Patel",
    //   role: "User Experience Director",
    //   image: "/placeholder.svg?height=300&width=300",
    //   bio: "Designs safe digital spaces that promote healing and genuine connection.",
    // },
  ]

  return (
    <section className="py-20 bg-teal-50" id="team">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-teal-800 mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-amber-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the certified professionals and passionate advocates behind Xolace. Each team member brings unique
            expertise and a deep commitment to mental wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* when length of team is zero show message */}
          {team.length === 0 ? (
            <div className="col-span-12">
              <p className="text-gray-600 text-center">Updating team soon...</p>
            </div>
          ) : (
            team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square relative">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-teal-700">{member.name}</h3>
                <p className="text-amber-600 text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          )))}
        </div>
      </div>
    </section>
  )
}
