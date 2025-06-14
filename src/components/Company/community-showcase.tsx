"use client"

import { Users, MessageCircle, Globe, Calendar, Heart, Clock, MapPin } from "lucide-react"
import { useState, useEffect } from "react"

export default function CommunityShowcase() {
  const [liveStats, setLiveStats] = useState({
    onlineNow: 1247,
    activeGroups: 23,
    messagesLast24h: 3891,
    countriesActive: 47,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats((prev) => ({
        onlineNow: prev.onlineNow + Math.floor(Math.random() * 10) - 5,
        activeGroups: Math.max(15, prev.activeGroups + Math.floor(Math.random() * 3) - 1),
        messagesLast24h: prev.messagesLast24h + Math.floor(Math.random() * 20),
        countriesActive: Math.min(50, Math.max(40, prev.countriesActive + Math.floor(Math.random() * 3) - 1)),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const featuredGroups = [
    {
      name: "Anxiety Support Circle",
      members: 1247,
      activeNow: 23,
      topic: "Managing daily anxiety",
      lastActivity: "2 min ago",
      mood: "supportive",
      color: "from-teal-900 to-teal-800",
    },
    {
      name: "Depression Warriors",
      members: 892,
      activeNow: 18,
      topic: "Finding light in dark times",
      lastActivity: "5 min ago",
      mood: "hopeful",
      color: "from-black to-gray-900",
    },
    {
      name: "New Parent Support",
      members: 634,
      activeNow: 12,
      topic: "Postpartum mental health",
      lastActivity: "1 min ago",
      mood: "caring",
      color: "from-teal-900 to-teal-800",
    },
    {
      name: "LGBTQ+ Safe Space",
      members: 756,
      activeNow: 15,
      topic: "Identity and acceptance",
      lastActivity: "3 min ago",
      mood: "inclusive",
      color: "from-black to-gray-900",
    },
  ]

  const upcomingEvents = [
    {
      title: "Mindfulness Monday",
      time: "Today, 7:00 PM EST",
      participants: 45,
      type: "Guided Meditation",
      facilitator: "Dr. Sarah Chen",
    },
    {
      title: "Anxiety Toolkit Workshop",
      time: "Tomorrow, 2:00 PM EST",
      participants: 67,
      type: "Educational",
      facilitator: "Licensed Therapist",
    },
    {
      title: "Peer Support Circle",
      time: "Wed, 6:00 PM EST",
      participants: 23,
      type: "Open Discussion",
      facilitator: "Community Led",
    },
  ]

  const globalActivity = [
    { region: "North America", active: 423, color: "bg-teal-900" },
    { region: "Europe", active: 312, color: "bg-teal-800" },
    { region: "Asia Pacific", active: 267, color: "bg-teal-700" },
    { region: "Latin America", active: 156, color: "bg-teal-600" },
    { region: "Africa", active: 89, color: "bg-teal-500" },
  ]

  return (
    <section className="py-16 sm:py-20 bg-black" id="community-showcase">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-white mb-4">Our Purpose
            Our Thriving{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-300">Community</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 to-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-50 max-w-3xl mx-auto leading-relaxed">
            A vibrant, global community where healing happens through connection, understanding, and shared experiences
          </p>
        </div>

        {/* Live Community Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold text-gray-50 mb-2">{liveStats.onlineNow.toLocaleString()}</div>
            <div className="text-sm text-gray-50/80">Online Now</div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
              <Users className="w-8 h-8 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-gray-50 mb-2">{liveStats.activeGroups}</div>
            <div className="text-sm text-gray-50/80">Active Groups</div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-gray-50 mb-2">{liveStats.messagesLast24h.toLocaleString()}</div>
            <div className="text-sm text-gray-50/80">Messages (24h)</div>
          </div>

          <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/20 rounded-full mb-4">
              <Globe className="w-8 h-8 text-teal-500" />
            </div>
            <div className="text-3xl font-bold text-gray-50 mb-2">{liveStats.countriesActive}</div>
            <div className="text-sm text-gray-50/80">Countries</div>
          </div>
        </div>

        {/* Featured Groups */}
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-gray-50 text-center mb-8">Active Support Groups</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredGroups.map((group, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-medium text-gray-50 mb-2">{group.name}</h4>
                    <p className="text-gray-50/80 text-sm mb-3">"{group.topic}"</p>
                    <div className="flex items-center gap-4 text-sm text-gray-50/70">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {group.members.toLocaleString()} members
                      </span>
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {group.activeNow} online
                      </span>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${group.color} rounded-lg flex items-center justify-center`}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-50/60 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {group.lastActivity}
                  </span>
                  <span className="inline-block px-2 py-1 bg-white/10 text-xs text-gray-50 rounded-full">
                    {group.mood}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-medium text-gray-50 mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-300" />
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-50">{event.title}</h4>
                    <span className="text-xs text-blue-300 bg-blue-300/20 px-2 py-1 rounded-full">{event.type}</span>
                  </div>
                  <p className="text-sm text-gray-50/80 mb-2">{event.time}</p>
                  <div className="flex items-center justify-between text-xs text-gray-50/70">
                    <span>{event.participants} registered</span>
                    <span>Led by {event.facilitator}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Global Activity */}
          <div>
            <h3 className="text-2xl font-medium text-gray-50 mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-green-300" />
              Global Activity
            </h3>
            <div className="space-y-4">
              {globalActivity.map((region, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-24 text-sm text-gray-50/80">{region.region}</div>
                  <div className="flex-1 bg-white/10 rounded-full h-6 overflow-hidden">
                    <div
                      className={`h-full ${region.color} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3`}
                      style={{ width: `${(region.active / 423) * 100}%` }}
                    >
                      <span className="text-xs font-medium text-white">{region.active}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-gray-50/80 text-center">
                Support available in 12 languages across all time zones
              </p>
            </div>
          </div>
        </div>

        {/* Community Impact */}
        <div className="text-center p-8 bg-gradient-to-r from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20">
          <h3 className="text-xl font-medium text-gray-50 mb-4">Community Impact This Month</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold text-teal-500 mb-1">2,847</div>
              <div className="text-sm text-gray-50/80">New connections made</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-500 mb-1">156</div>
              <div className="text-sm text-gray-50/80">Crisis interventions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-teal-500 mb-1">4.9/5</div>
              <div className="text-sm text-gray-50/80">Community satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
