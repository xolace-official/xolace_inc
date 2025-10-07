"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  ChevronDown,
  Menu,
  X,
  Package,
  BookOpen,
  Workflow,
  GlobeLock,
  GalleryHorizontal,
  Flame,
  UsersRound,
  Phone,
} from "lucide-react"
import Image from "next/image"
import { InteractiveHoverButton } from "../magicui/interactive-hover-button"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
  exact?: boolean // Add this for exact matching
}

const MotionLink = motion(Link)

const navigationData: NavItem[] = [
  {
    label: "Home",
    href: "/",
    exact: true, // Exact match for home
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "Our Mission & Vision",
        href: "/about#mission-vision",
        description: "Learn about our purpose and future goals",
        icon: <Flame className="w-4 h-4" />,
      },
      {
        label: "The Future We Envision",
        href: "/about#future",
        description: "Our vision for tomorrow",
        icon: <GlobeLock className="w-4 h-4" />,
      },
      {
        label: "Our Story",
        href: "/about#story",
        description: "How Xolace came to be",
        icon: <BookOpen className="w-4 h-4" />,
      },
      {
        label: "Values",
        href: "/about#value",
        description: "The principles that guide us",
        icon: <Workflow className="w-4 h-4" />,
      },
      {
        label: "Team",
        href: "/about#team",
        description: "Meet our leadership team",
        icon: <UsersRound className="w-4 h-4" />,
      },
      // {
      //   label: "Expert Team",
      //   href: "/about#expert-team",
      //   description: "Our specialized professionals",
      //   icon: <UsersRound className="w-4 h-4" />,
      // },
      {
        label: "Community Impact",
        href: "/about#community-impact",
        description: "How we're making a difference",
        icon: <GalleryHorizontal className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    dropdown: [
      {
        label: "Brand Showcase",
        href: "/company#brand-showcase",
        description: "Explore our brand identity and values",
        icon: <Package className="w-4 h-4" />,
      },
      {
        label: "Services & Support",
        href: "/company#services-support",
        description: "Comprehensive support solutions",
        icon: <Workflow className="w-4 h-4" />,
      },
      // {
      //   label: "Support Finder",
      //   href: "/company#support-finder",
      //   description: "Find the right support for you",
      //   icon: <UsersRound className="w-4 h-4" />,
      // },
      // {
      //   label: "Success Stories",
      //   href: "/company#success-stories",
      //   description: "Real stories from our community",
      //   icon: <BookOpen className="w-4 h-4" />,
      // },
      // {
      //   label: "Community Showcase",
      //   href: "/company#community-showcase",
      //   description: "Celebrating our community",
      //   icon: <GalleryHorizontal className="w-4 h-4" />,
      // },
      {
        label: "Accessibility & Privacy",
        href: "/company#accessibility-privacy",
        description: "Our commitment to accessibility and privacy",
        icon: <GlobeLock className="w-4 h-4" />,
      },
    ],
  },
  {
    label: "Media",
    href: "/media",
    dropdown: [
      {
        label: "Xolace Media",
        href: "/media",
        description: "Xolace Media Resources",
        icon: <GalleryHorizontal className="w-4 h-4" />,
      },
      // {
      //   label: "Media Kit",
      //   href: "/media#media-kit",
      //   description: "Brand assets and media resources",
      //   icon: <Package className="w-4 h-4" />,
      // },
      // {
      //   label: "News Coverage",
      //   href: "/media#news",
      //   description: "Xolace in the news",
      //   icon: <BookOpen className="w-4 h-4" />,
      // },

      {
        label: "Media Contact",
        href: "/media#media-contact",
        description: "Contact Xolace for media inquiries",
        icon: <Phone className="w-4 h-4" />,
      },

      {
        label: "Crisis Resources",
        href: "/media#crisis-resources",
        description: "Crisis resources",
        icon: <BookOpen className="w-4 h-4" />,
      },
      // {
      //   label: "Blog",
      //   href: "/media#blog",
      //   description: "Insights, updates, and stories",
      //   icon: <ReceiptText className="w-4 h-4" />,
      // },
    ],
  },
  // {
  //   label: "Careers",
  //   href: "/careers",
  // },
  {
    label: "Contact",
    href: "/contact",
  },
]

export default function Navigation() {
  const router = useRouter()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-close mobile menu on scroll (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      // Check if screen width is less than 768px (mobile)
      if (window.innerWidth < 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true })
    }

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobileMenuOpen])

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

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className={`sticky top-0 z-50 border-b py-3 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-gray-200/60 shadow-lg"
          : "bg-white/95 backdrop-blur-md border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href={"/"}>
            <motion.div
              className="flex-shrink-0 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
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
                <div
                  className={`text-xl sm:text-2xl font-aicon  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 ${
                    scrolled ? "opacity-90" : "opacity-100"
                  }`}
                >
                  xolace inc
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-1 xl:space-x-4">
              {navigationData.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <motion.button
                    className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm xl:text-base font-medium flex items-center gap-1 transition-all duration-300 rounded-lg hover:bg-gray-50 ${
                      scrolled ? "text-gray-600" : "text-gray-700"
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.dropdown ? (
                      <>
                        {item.label}
                        <ChevronDown
                          className={`w-3 h-3 xl:w-4 xl:h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </>
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </motion.button>

                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.label && item.dropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 xl:w-80 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
                      >
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <MotionLink
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-start gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 rounded-lg mx-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.2,
                              delay: dropdownIndex * 0.05,
                            }}
                            whileHover={{ x: 5 }}
                          >
                            <div className="text-blue-600 mt-0.5 flex-shrink-0">{dropdownItem.icon}</div>
                            <div className="min-w-0">
                              <div className="font-medium text-gray-900 truncate">{dropdownItem.label}</div>
                              {dropdownItem.description && (
                                <div className="text-gray-500 text-xs mt-1 line-clamp-2">
                                  {dropdownItem.description}
                                </div>
                              )}
                            </div>
                          </MotionLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden lg:block flex-shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <InteractiveHoverButton
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 xl:px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm xl:text-base"
                onClick={() => router.push("https://xolace.app/")}
              >
                Head to Xolace
              </InteractiveHoverButton>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* CTA Button - Mobile (smaller) */}
            <motion.div
              className="hidden sm:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="https://xolace.app/"
                target="_blank"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-1.5 rounded-lg font-medium text-xs"
              >
                Xolace
              </Link>
            </motion.div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50 lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationData.map((item, index) => (
                  <MobileNavItem
                    key={item.label}
                    item={item}
                    index={index}
                    onLinkClick={() => {
                      if (window.innerWidth < 768) {
                        setIsMobileMenuOpen(false)
                      }
                    }}
                  />
                ))}

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: navigationData.length * 0.1,
                  }}
                  className="pt-4 sm:hidden"
                >
                  <button
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      router.push("https://xolace.app/")
                    }}
                  >
                    Head to Xolace
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

function MobileNavItem({
  item,
  index,
  onLinkClick,
}: {
  item: NavItem
  index: number
  onLinkClick: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 py-3 font-medium text-base transition-colors duration-200 min-h-[44px]"
      >
        {item.dropdown ? (
          <>
            {item.label}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
            />
          </>
        ) : (
          <Link href={item.href} className="w-full" onClick={onLinkClick}>
            {item.label}
          </Link>
        )}
      </button>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="ml-4 mt-2 space-y-1">
              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                <MotionLink
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  className="flex items-start gap-3 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg px-3 -mx-3 transition-colors duration-200 min-h-[44px]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: dropdownIndex * 0.05 }}
                  onClick={onLinkClick}
                >
                  <div className="text-blue-600 mt-1 flex-shrink-0">{dropdownItem.icon}</div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-gray-900">{dropdownItem.label}</div>
                    {dropdownItem.description && (
                      <div className="text-gray-500 text-xs mt-1 line-clamp-2">{dropdownItem.description}</div>
                    )}
                  </div>
                </MotionLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
