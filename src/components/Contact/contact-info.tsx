"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Clock, MessageCircle, Users } from "lucide-react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "support@xolace.com",
    action: "Send Email",
    href: "mailto:support@xolace.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak with our team",
    contact: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with us in real-time",
    contact: "Available 24/7",
    action: "Start Chat",
    href: "#",
  },
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      {/* Contact Methods */}
      <Card className="shadow-xl border-0">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                  <p className="text-gray-800 font-medium mb-3">{method.contact}</p>
                  <InteractiveHoverButton
                    onClick={() => window.open(method.href, "_blank")}
                    className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200 text-sm px-4 py-2"
                  >
                    {method.action}
                  </InteractiveHoverButton>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="shadow-xl border-0">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <Clock className="w-6 h-6 text-blue-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
          </div>
          <div className="space-y-4">
            {businessHours.map((schedule, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
              >
                <span className="font-medium text-gray-700">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> For urgent matters outside business hours, please use our live chat or email
              support.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className="shadow-xl border-0 bg-gradient-to-br from-purple-50 to-blue-50">
        <CardContent className="p-8">
          <div className="flex items-center mb-6">
            <Users className="w-6 h-6 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Why Choose Us</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24h</div>
              <div className="text-sm text-gray-600">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
