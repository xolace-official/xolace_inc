"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// import Image from "next/image";

const navigationItems = [
  {
    label: "Company",
    href: "#",
    dropdown: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    label: "Product",
    href: "#",
    dropdown: [
      { label: "Xolace App", href: "#" },
      { label: "Features", href: "#" },
      { label: "How It Works", href: "#" },
      { label: "Download", href: "#" },
      { label: "Products", href: "#" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    dropdown: [
      { label: "Blog", href: "#" },
      { label: "Newsroom", href: "#" },
    ],
  },
  {
    label: "Support",
    href: "#",
    dropdown: [
      { label: "Contact Us", href: "#" },
      { label: "Partnerships", href: "#" },
    ],
  },
];

export default function Component() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      <div className="p-2">
        <nav className="flex items-center justify-between bg-amber-400 px-40 sm:p-6 h-[7rem]">
          {/* Logo */}
          <div className="text-2xl font-bold uppercase">xolace</div>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8">
            {navigationItems.map((item) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.a
                  href={item.href}
                  className="relative py-2 px-1 text-gray-900 font-medium transition-colors duration-200 hover:text-gray-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}

                  {/* Animated Underline */}
                  {hoveredItem === item.label && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-gray-900"
                      layoutId="underline"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredItem === item.label && (
                    <motion.div
                      className="absolute left-0 top-full mt-2 bg-amber-400 text-gray-800 z-50"
                      style={{
                        width:
                          item.label === "Product" || item.label === "Support"
                            ? "12rem"
                            : "10rem",
                      }}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, index) => (
                          <motion.a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-150"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            {dropdownItem.label}
                          </motion.a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              className="p-2 text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#"
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
          >
            Head to Xolace
          </motion.a>
        </nav>
      </div>
    </>
  );
}

// export default function Home() {
//   return (
//     <div className="  bg-red-300 min-h-screen p-3 ">
//       <nav className="flex items-center justify-between bg-amber-400 px-38 py-4 h-[6rem]">
//   {/* Logo */}
//   <p className="uppercase font-aicon text-lg">xolace</p>

//   {/* Navigation Links */}
//   <ul className="hidden md:flex gap-10 text-lg font-medium justify-r">
//     {/* Company */}
//     <li className="group relative cursor-pointer">
//       <span className="hover-underline">Company</span>
//       <ul className="absolute hidden group-hover:block top-8 left-0 bg-white text-black p-2 rounded-md shadow-lg space-y-2 text-sm">
//         <li className="hover:text-amber-500">About Us</li>
//         <li className="hover:text-amber-500">Careers</li>
//       </ul>
//     </li>

//     {/* Product */}
//     <li className="group relative cursor-pointer">
//       <span className="hover-underline">Product</span>
//       <ul className="absolute hidden group-hover:block top-8 left-0 bg-white text-black p-2 rounded-md shadow-lg space-y-2 text-sm">
//         <li className="hover:text-amber-500">Xolace App</li>
//         <li className="hover:text-amber-500">Features</li>
//         <li className="hover:text-amber-500">How It Works</li>
//         <li className="hover:text-amber-500">Download</li>
//         <li className="hover:text-amber-500">Products</li>
//       </ul>
//     </li>

//     {/* Resources */}
//     <li className="group relative cursor-pointer">
//       <span className="hover-underline">Resources</span>
//       <ul className="absolute hidden group-hover:block top-8 left-0 bg-white text-black p-2 rounded-md shadow-lg space-y-2 text-sm">
//         <li className="hover:text-amber-500">Blog</li>
//         <li className="hover:text-amber-500">Newsroom</li>
//         <li className="hover:text-amber-500">Press Releases</li>
//         <li className="hover:text-amber-500">Insights</li>
//       </ul>
//     </li>

//     {/* Support & Contact */}
//     <li className="group relative cursor-pointer">
//       <span className="hover-underline">Support & Contact</span>
//       <ul className="absolute hidden group-hover:block top-8 left-0 bg-white text-black p-2 rounded-md shadow-lg space-y-2 text-sm">
//         <li className="hover:text-amber-500">Contact Us</li>
//         <li className="hover:text-amber-500">Partnerships</li>
//       </ul>
//     </li>
//   </ul>

//   {/* CTA Button */}
//   <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/80">
//     Get Started
//   </button>
// </nav>

//       {/* <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="bg-yellow-300 list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="bg-green-300 flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main> */}
//       {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer> */}
//     </div>
//   );
// }
