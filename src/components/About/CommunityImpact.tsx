import { Users, MessageCircle, Heart, Clock, TrendingUp, Shield } from "lucide-react"

export default function CommunityImpact() {
  const metrics = [
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      value: "52,847",
      label: "Community Members",
      description: "Individuals finding support and connection",
      growth: "+127% this year",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-teal-600" />,
      value: "1.2M+",
      label: "Support Sessions",
      description: "Anonymous conversations and counseling sessions",
      growth: "+89% this year",
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      value: "98%",
      label: "Positive Outcomes",
      description: "Users report improved mental wellbeing",
      growth: "Consistent rating",
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      value: "24/7",
      label: "Crisis Support",
      description: "Emergency intervention and immediate help",
      growth: "Always available",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-teal-600" />,
      value: "73%",
      label: "Reduced Anxiety",
      description: "Average improvement in anxiety levels",
      growth: "Clinical study results",
    },
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      value: "100%",
      label: "Anonymous",
      description: "Complete privacy protection maintained",
      growth: "Zero breaches",
    },
  ]

  const testimonials = [
    {
      quote:
        "I found my voice here when I thought I'd lost it forever. The anonymity allowed me to be completely honest about my struggles for the first time.",
      impact: "Overcame social anxiety",
      timeframe: "6 months on platform",
      id: "Member #4,821",
    },
    {
      quote:
        "Having access to licensed counselors without the fear of judgment changed everything. I finally got the help I needed.",
      impact: "Started therapy journey",
      timeframe: "3 months on platform",
      id: "Member #7,392",
    },
    {
      quote:
        "The community support groups made me realize I wasn't alone. Connecting with others who understood my experience was healing.",
      impact: "Built support network",
      timeframe: "1 year on platform",
      id: "Member #2,156",
    },
    {
      quote:
        "The crisis support feature literally saved my life. Having someone available immediately when I needed help most was everything.",
      impact: "Crisis intervention success",
      timeframe: "Emergency support",
      id: "Member #9,847",
    },
    {
      quote:
        "I've tried traditional therapy before, but the anonymous format here let me open up in ways I never could face-to-face.",
      impact: "Breakthrough in treatment",
      timeframe: "8 months on platform",
      id: "Member #5,634",
    },
    {
      quote:
        "Being able to help others while working through my own challenges created a sense of purpose I didn't know I was missing.",
      impact: "Peer support volunteer",
      timeframe: "2 years on platform",
      id: "Member #1,203",
    },
  ]

  const impactAreas = [
    {
      title: "Crisis Prevention",
      description: "Early intervention and support preventing escalation",
      stat: "89% reduction in crisis episodes among active users",
    },
    {
      title: "Treatment Accessibility",
      description: "Breaking down barriers to mental healthcare",
      stat: "67% of users accessed therapy for the first time through our platform",
    },
    {
      title: "Stigma Reduction",
      description: "Normalizing mental health conversations",
      stat: "94% feel more comfortable discussing mental health after joining",
    },
    {
      title: "Community Building",
      description: "Creating lasting support networks",
      stat: "78% maintain connections beyond the platform",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-teal-800 mb-6">Our Community Impact</h2>
          <div className="w-24 h-1 bg-amber-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real numbers, real stories, real impact. See how our community is transforming mental healthcare through
            connection and support.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium text-teal-700 text-center mb-12">Impact by the Numbers</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-teal-50 p-3 rounded-lg">{metric.icon}</div>
                  <div>
                    <div className="text-3xl font-bold text-teal-700">{metric.value}</div>
                    <div className="text-sm text-amber-600 font-medium">{metric.growth}</div>
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-2">{metric.label}</h4>
                <p className="text-gray-600 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Areas */}
        <div className="mb-20">
          <h3 className="text-2xl font-medium text-teal-700 text-center mb-12">Areas of Impact</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-amber-300">
                <h4 className="text-lg font-medium text-teal-700 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{area.description}</p>
                <div className="bg-teal-50 p-3 rounded-lg">
                  <p className="text-teal-700 font-medium text-sm">{area.stat}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Stories */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-medium text-teal-700 mb-4">Stories from Our Community</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Anonymous testimonials from real community members who found healing, support, and hope through our
              platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-teal-50 p-6 rounded-xl">
                <div className="mb-4">
                  <svg className="w-8 h-8 text-teal-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed mb-4">`{testimonial.quote}`</p>
                </div>
                <div className="border-t border-teal-200 pt-4">
                  <div className="flex justify-between items-start text-sm">
                    <div>
                      <p className="font-medium text-teal-700">{testimonial.impact}</p>
                      <p className="text-gray-500">{testimonial.timeframe}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs">{testimonial.id}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-amber-50 p-6 rounded-xl inline-block">
              <p className="text-amber-700 font-medium mb-2">Research Validation</p>
              <p className="text-gray-600 text-sm max-w-2xl">
                Our impact metrics are validated through independent research studies conducted in partnership with
                leading universities and mental health organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
