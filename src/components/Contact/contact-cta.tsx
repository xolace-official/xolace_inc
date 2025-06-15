"use client";

import { motion } from "motion/react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Rocket, Users, Zap } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { section } from "motion/react-client";

export default function ContactCTA() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden">
          <CardContent className="relative p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of satisfied customers who trust Xolace for
                  their business needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid md:grid-cols-3 gap-8 mb-12"
              >
                <div className="flex flex-col items-center">
                  <Rocket className="w-12 h-12 mb-4 text-yellow-300" />
                  <h3 className="text-lg font-semibold mb-2">Fast Setup</h3>
                  <p className="text-blue-100 text-sm">
                    Get started in minutes, not hours
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 mb-4 text-yellow-300" />
                  <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                  <p className="text-blue-100 text-sm">
                    24/7 support from our expert team
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Zap className="w-12 h-12 mb-4 text-yellow-300" />
                  <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                  <p className="text-blue-100 text-sm">
                    Join 10,000+ successful businesses
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <InteractiveHoverButton
                  onClick={() => (window.location.href = "/xolace")}
                  className="bg-white hover:bg-gray-100 text-blue-600 border-white text-lg px-8 py-3"
                >
                  Start Free Trial
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  onClick={() => (window.location.href = "/demo")}
                  className="bg-transparent hover:bg-white/10 text-white border-white text-lg px-8 py-3"
                >
                  Schedule Demo
                </InteractiveHoverButton>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-blue-200 text-sm mt-8"
              >
                No credit card required • 14-day free trial • Cancel anytime
              </motion.p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
