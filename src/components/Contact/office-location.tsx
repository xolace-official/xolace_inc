"use client"

import { motion } from "motion/react"
import { MapPin, Phone, Mail } from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"
import { Card, CardContent } from "../ui/card"

const offices = [
  {
    city: "San Francisco",
    country: "United States",
    address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "sf@xolace.com",
    isHeadquarters: true,
  },
  {
    city: "New York",
    country: "United States",
    address: "456 Business Ave, Floor 15, New York, NY 10001",
    phone: "+1 (555) 987-6543",
    email: "ny@xolace.com",
    isHeadquarters: false,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "789 Tech Street, London EC2A 4DP, United Kingdom",
    phone: "+44 20 7123 4567",
    email: "london@xolace.com",
    isHeadquarters: false,
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "1-2-3 Innovation District, Shibuya, Tokyo 150-0001, Japan",
    phone: "+81 3-1234-5678",
    email: "tokyo@xolace.com",
    isHeadquarters: false,
  },
]

export default function OfficeLocations() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We have offices around the world to better serve our global community.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {offices.map((office, index) => (
          <motion.div
            key={office.city}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className={`h-full shadow-xl border-0 ${office.isHeadquarters ? "ring-2 ring-blue-500" : ""}`}>
              <CardContent className="p-6">
                {office.isHeadquarters && (
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-4">
                    Headquarters
                  </div>
                )}

                <div className="flex items-start mb-4">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{office.city}</h3>
                    <p className="text-gray-600 text-sm mb-3">{office.country}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700">{office.email}</span>
                  </div>
                </div>

                <InteractiveHoverButton
                  onClick={() =>
                    window.open(`https://maps.google.com/?q=${encodeURIComponent(office.address)}`, "_blank")
                  }
                  className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200 text-sm"
                >
                  View on Map
                </InteractiveHoverButton>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
