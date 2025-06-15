"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with:", email);
    setEmail("");
    // You would typically send this to your API
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  };

  const socialHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-black text-white">
      <motion.div
        className="container px-4 md:px-6 py-12 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2"
              variants={pulseVariants}
              animate="animate"
            >
              <div className="flex items-center space-x-3">
                <Image
                  className="dark:invert w-8 h-8 sm:w-10 sm:h-10"
                  src="/assets/photos/Navbar/favicon.png"
                  alt="Xolace logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                xolace inc
              </span>
            </motion.div>
            <p className="text-sm text-gray-400 max-w-xs">
              At Xolace, we craft digital experiences that uplift and connect.
              Rooted in empathy, innovation, and user-centered design, we’re
              dedicated to supporting mental well-being through thoughtful,
              meaningful technology
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Instagram", "Twitter", "Linkedin"].map(
                (social) => (
                  <motion.div
                    key={social}
                    initial="initial"
                    whileHover="hover"
                    variants={socialHoverVariants}
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {social === "Facebook" && (
                        <Facebook className="h-5 w-5" />
                      )}
                      {social === "Instagram" && (
                        <Instagram className="h-5 w-5" />
                      )}
                      {social === "Twitter" && <Twitter className="h-5 w-5" />}
                      {social === "Linkedin" && (
                        <Linkedin className="h-5 w-5" />
                      )}
                      <span className="sr-only">{social}</span>
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Company", "Product", "Resources", "Support", "About Us"].map(
                (link, index) => (
                  <motion.li
                    key={link}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      },
                    }}
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-300">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <motion.li
                className="flex items-start space-x-3"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <MapPin className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                <span className="text-gray-400">
                 Koforidua Ghana
                </span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.1 },
                  },
                }}
              >
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-3"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                }}
              >
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">xolace25@gmail.com</span>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-300">
              Newsletter
            </h3>
            <p className="text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-full bg-gray-900 border-gray-700 text-white placeholder:text-gray-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white"
                >
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} xolace inc. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 md:mt-0">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Accessibility",
            ].map((policy, index) => (
              <motion.div
                key={policy}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href="#"
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {policy}
                </Link>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </motion.div>
    </footer>
  );
}
