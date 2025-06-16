"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/text-area";
import ContactHero from "@/components/Contact/contact-hero";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0c1a] to-[#131325] text-white p-6 flex flex-col items-center justify-center pt-10">
      <ContactHero />
      <motion.div
        className="max-w-2xl w-full space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-light text-center text-white">
          Mail us.
        </h1>
        <p className="text-center text-gray-400">
          Whether you have feedback, a question, or just want to connect. We're
          here for you.
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4 bg-[#1a1a2e] p-6 rounded-2xl shadow-xl border border-[#2e2e45]"
          >
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Your Name
              </label>
              <Input
                className="bg-[#131325] border border-[#2e2e45] text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Email Address
              </label>
              <Input
                type="email"
                className="bg-[#131325] border border-[#2e2e45] text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1">
                Your Message
              </label>
              <Textarea
                className="bg-[#131325] border border-[#2e2e45] text-white"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#7c4dff] hover:bg-[#693de5] transition-colors"
            >
              Send Message
            </Button>
          </form>
        ) : (
          <div className="bg-[#1a1a2e] p-6 rounded-2xl shadow-xl border border-[#2e2e45] text-center">
            <h2 className="text-2xl font-semibold text-[#7c4dff]">
              Thank you!
            </h2>
            <p className="text-gray-400 mt-2">
              We’ve received your message and will respond soon.
            </p>
          </div>
        )}

        <div className="text-center text-sm text-gray-500 pt-8">
          Prefer email? Reach us directly at{" "}
          <span className="text-[#7c4dff]">xolace25@gmail.com</span>
        </div>
      </motion.div>
    </main>
  );
}
