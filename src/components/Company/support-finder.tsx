"use client"

import { Heart, Brain, Users, Zap, RotateCcw, CheckCircle } from "lucide-react"
import { useState } from "react"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"

export default function SupportFinder() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: "feeling",
      title: "How are you feeling right now?",
      subtitle: "Choose what best describes your current emotional state",
      options: [
        {
          value: "overwhelmed",
          label: "Overwhelmed",
          icon: <Brain className="w-5 h-5" />,
          color: "from-teal-900 to-teal-800",
        },
        {
          value: "anxious",
          label: "Anxious",
          icon: <Zap className="w-5 h-5" />,
          color: "from-teal-800 to-teal-700",
        },
        {
          value: "sad",
          label: "Sad or Down",
          icon: <Heart className="w-5 h-5" />,
          color: "from-teal-700 to-teal-600",
        },
        { value: "lonely", label: "Lonely", icon: <Users className="w-5 h-5" />, color: "from-teal-600 to-teal-500" },
        {
          value: "stable",
          label: "Stable but seeking growth",
          icon: <CheckCircle className="w-5 h-5" />,
          color: "from-teal-500 to-teal-400",
        },
      ],
    },
    {
      id: "urgency",
      title: "How urgent is your need for support?",
      subtitle: "This helps us recommend the right type of help",
      options: [
        {
          value: "crisis",
          label: "Crisis - I need help now",
          icon: <Zap className="w-5 h-5" />,
          color: "from-red-600 to-red-500",
        },
        {
          value: "urgent",
          label: "Urgent - Within 24 hours",
          icon: <Heart className="w-5 h-5" />,
          color: "from-orange-600 to-orange-500",
        },
        {
          value: "soon",
          label: "Soon - Within a week",
          icon: <Brain className="w-5 h-5" />,
          color: "from-yellow-600 to-yellow-500",
        },
        {
          value: "flexible",
          label: "Flexible - When available",
          icon: <Users className="w-5 h-5" />,
          color: "from-green-600 to-green-500",
        },
      ],
    },
    {
      id: "support_type",
      title: "What type of support appeals to you?",
      subtitle: "Different approaches work for different people",
      options: [
        {
          value: "peer",
          label: "Peer Support Groups",
          icon: <Users className="w-5 h-5" />,
          color: "from-blue-600 to-cyan-600",
        },
        {
          value: "professional",
          label: "Professional Therapy",
          icon: <Brain className="w-5 h-5" />,
          color: "from-purple-600 to-indigo-600",
        },
        {
          value: "both",
          label: "Both Peer & Professional",
          icon: <Heart className="w-5 h-5" />,
          color: "from-green-600 to-teal-600",
        },
        {
          value: "self_help",
          label: "Self-Help Resources",
          icon: <CheckCircle className="w-5 h-5" />,
          color: "from-amber-600 to-orange-600",
        },
      ],
    },
    {
      id: "experience",
      title: "Have you sought mental health support before?",
      subtitle: "This helps us tailor the experience to your comfort level",
      options: [
        {
          value: "first_time",
          label: "This is my first time",
          icon: <Heart className="w-5 h-5" />,
          color: "from-pink-600 to-rose-600",
        },
        {
          value: "some_experience",
          label: "I have some experience",
          icon: <Users className="w-5 h-5" />,
          color: "from-blue-600 to-indigo-600",
        },
        {
          value: "experienced",
          label: "I'm experienced with therapy",
          icon: <Brain className="w-5 h-5" />,
          color: "from-green-600 to-teal-600",
        },
        {
          value: "returning",
          label: "Returning after a break",
          icon: <RotateCcw className="w-5 h-5" />,
          color: "from-purple-600 to-violet-600",
        },
      ],
    },
  ]

  const getRecommendation = () => {
    const { feeling, urgency, support_type, experience } = answers

    if (urgency === "crisis") {
      return {
        primary: "Crisis Support",
        description: "Immediate connection with crisis-trained counselors",
        action: "Connect Now",
        secondary: ["24/7 Crisis Hotline", "Emergency Resources"],
        color: "from-teal-900 to-teal-800",
        icon: <Zap className="w-8 h-8 text-white" />,
      }
    }

    if (support_type === "peer" || (feeling === "lonely" && support_type !== "professional")) {
      return {
        primary: "Peer Support Groups",
        description: "Connect with others who understand your experience",
        action: "Join a Group",
        secondary: ["Anonymous participation", "Topic-specific groups", "24/7 availability"],
        color: "from-blue-600 to-cyan-600",
        icon: <Users className="w-8 h-8 text-white" />,
      }
    }

    if (support_type === "professional" || urgency === "urgent") {
      return {
        primary: "Professional Therapy",
        description: "One-on-one sessions with licensed therapists",
        action: "Find a Therapist",
        secondary: ["Licensed professionals", "Flexible scheduling", "Specialized expertise"],
        color: "from-purple-600 to-indigo-600",
        icon: <Brain className="w-8 h-8 text-white" />,
      }
    }

    if (support_type === "both") {
      return {
        primary: "Comprehensive Support",
        description: "Combination of peer groups and professional therapy",
        action: "Get Started",
        secondary: ["Best of both worlds", "Holistic approach", "Flexible options"],
        color: "from-green-600 to-teal-600",
        icon: <Heart className="w-8 h-8 text-white" />,
      }
    }

    return {
      primary: "Self-Help Resources",
      description: "Guided tools and resources for independent growth",
      action: "Explore Resources",
      secondary: ["Self-paced learning", "Practical tools", "Progress tracking"],
      color: "from-amber-600 to-orange-600",
      icon: <CheckCircle className="w-8 h-8 text-white" />,
    }
  }

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }))

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const resetQuiz = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
  }

  const recommendation = showResults ? getRecommendation() : null

  return (
    <section className="py-16 sm:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-4xl font-bold text-white mb-6">
            Find Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">
              Perfect Support
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-2xl mx-auto leading-relaxed">
            Answer a few questions to get personalized recommendations for your mental health journey
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-50/80">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-sm text-gray-50/80">
                  {Math.round(((currentStep + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-teal-500 to-teal-400 h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Current Question */}
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
              <h3 className="text-2xl font-medium text-gray-50 mb-3">{questions[currentStep].title}</h3>
              <p className="text-gray-50/80 mb-8">{questions[currentStep].subtitle}</p>

              <div className="grid gap-4">
                {questions[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="group p-4 bg-white/5 hover:bg-white/15 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        {option.icon}
                      </div>
                      <span className="text-gray-50 font-medium group-hover:text-white transition-colors">
                        {option.label}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            {currentStep > 0 && (
              <div className="text-center">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="px-6 py-2 text-gray-50/80 hover:text-white transition-colors"
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Results */
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${recommendation!.color} rounded-full mb-4`}
                >
                  {recommendation!.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-50 mb-3">Recommended: {recommendation!.primary}</h3>
                <p className="text-gray-50/80 text-lg leading-relaxed">{recommendation!.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {recommendation!.secondary.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-gray-50/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <InteractiveHoverButton
                  className={`flex-1 px-6 py-3 bg-teal-900 hover:bg-teal-800 text-white font-medium rounded-lg border-teal-700`}
                >
                  {recommendation!.action}
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  onClick={resetQuiz}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-gray-50 font-medium rounded-lg border border-white/20"
                >
                  Start Over
                </InteractiveHoverButton>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 text-center">
              <h4 className="font-medium text-gray-50 mb-3">Not sure about this recommendation?</h4>
              <p className="text-sm text-gray-50/80 mb-4">
                You can always explore other options or speak with our support team for personalized guidance.
              </p>
              <button className="text-teal-500 hover:text-teal-400 text-sm font-medium transition-colors">
                Speak with Support →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
