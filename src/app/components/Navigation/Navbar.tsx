"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown, Menu, X, Building2, Package, BookOpen, HelpCircle } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"

interface DropdownItem {
  label: string
  href: string
  description?: string
  icon?: React.ReactNode
}

interface NavItem {
  label: string
  href: string
  dropdown?: DropdownItem[]
}

const navigationData: NavItem[] = [
  {
    label: "Company",
    href: "/company",
    dropdown: [
      {
        label: "About Us",
        href: "/about",
        description: "Learn about our mission and values",
        icon: <Building2 className="w-4 h-4" />,
      },
      {
        label: "Careers",
        href: "/careers",
        description: "Join our growing team",
        icon: <Building2 className="w-4 h-4" />,
      },
      { label: "News", href: "/news", description: "Latest company updates", icon: <Building2 className="w-4 h-4" /> },
      {
        label: "Contact",
        href: "/contact",
        description: "Get in touch with us",
        icon: <Building2 className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      {
        label: "Platform",
        href: "/platform",
        description: "Our core platform solution",
        icon: <Package className="w-4 h-4" />,
      },
      {
        label: "Analytics",
        href: "/analytics",
        description: "Advanced data insights",
        icon: <Package className="w-4 h-4" />,
      },
      { label: "API", href: "/api", description: "Developer tools and APIs", icon: <Package className="w-4 h-4" /> },
      {
        label: "Integrations",
        href: "/integrations",
        description: "Connect with your tools",
        icon: <Package className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      {
        label: "Documentation",
        href: "/docs",
        description: "Comprehensive guides",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        label: "Blog",
        href: "/blog",
        description: "Industry insights and tips",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Customer success stories",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        label: "Webinars",
        href: "/webinars",
        description: "Live and recorded sessions",
        icon: <BookOpen className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Support",
    href: "/support",
    dropdown: [
      {
        label: "Help Center",
        href: "/help",
        description: "Find answers quickly",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        label: "Community",
        href: "/community",
        description: "Connect with other users",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        label: "Status",
        href: "/status",
        description: "System status and updates",
        icon: <HelpCircle className="w-4 h-4" />,
      },
      {
        label: "Contact Support",
        href: "/support/contact",
        description: "Get personalized help",
        icon: <HelpCircle className="w-4 h-4" />,
      },
    ],
  },
]

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 h-[6rem] flex justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
         <Image
          className="dark:invert"
          src=""
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-2xl font-bold font-aicon-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Xolace
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-[12rem] flex items-baseline space-x-8">
              {navigationData.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-[19px] font-medium flex items-center gap-1 transition-colors duration-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <motion.a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="text-blue-600 mt-0.5">{dropdownItem.icon}</div>
                            <div>
                              <div className="font-medium text-gray-900">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-gray-500 text-xs mt-1">{dropdownItem.description}</div>
                              )}
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => (window.location.href = "/xolace")}
              >
                Head to Xolace
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationData.map((item, index) => (
                <MobileNavItem key={item.label} item={item} index={index} />
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: navigationData.length * 0.1 }}
                className="pt-4"
              >
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium"
                  onClick={() => (window.location.href = "/xolace")}
                >
                  Head to Xolace
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

function MobileNavItem({ item, index }: { item: NavItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-2 space-y-2"
          >
            {item.dropdown.map((dropdownItem, dropdownIndex) => (
              <motion.a
                key={dropdownItem.label}
                href={dropdownItem.href}
                className="flex items-start gap-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
              >
                <div className="text-blue-600 mt-0.5">{dropdownItem.icon}</div>
                <div>
                  <div className="font-medium">{dropdownItem.label}</div>
                  {dropdownItem.description && (
                    <div className="text-gray-500 text-xs mt-1">{dropdownItem.description}</div>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
