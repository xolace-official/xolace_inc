"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
    <section
      className="relative bg-black text-white h-[38rem] items-center 
      overflow-hidden flex justify-between px-[15rem]"
    >
      {/* mascot */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className=""
          src="/photos/Landing/mascotLanding.webp"
          alt="Next.js logo"
          width={280}
          height={200}
          priority
        />
      </motion.div>

      {/* Hero page text   */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-right">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <span className="text-[#00FFFF]">Officia perspiciatis</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro
          assumenda. Praesentium, similique porro fugiat ad amet sapiente
          doloribus veniam alias dolorem quia esse? Odit reprehenderit nostrum
          iste laudantium consequuntur?
        </p>
        {/* <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>
        </Link> */}
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />
    </section>

        <section
      className="relative bg-black text-white h-[38rem] items-center 
      overflow-hidden flex justify-between px-[15rem]"
    >
      {/* mascot */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className=""
          src="/photos/Landing/mascotLanding.webp"
          alt="Next.js logo"
          width={280}
          height={200}
          priority
        />
      </motion.div>

      {/* Hero page text   */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-right">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <span className="text-[#00FFFF]">Officia perspiciatis</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro
          assumenda. Praesentium, similique porro fugiat ad amet sapiente
          doloribus veniam alias dolorem quia esse? Odit reprehenderit nostrum
          iste laudantium consequuntur?
        </p>
        {/* <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>
        </Link> */}
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />
    </section>


    <section
      className="relative bg-black text-white h-[38rem] items-center 
      overflow-hidden flex justify-between px-[15rem]"
    >
      {/* mascot */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className=""
          src="/photos/Landing/mascotLanding.webp"
          alt="Next.js logo"
          width={280}
          height={200}
          priority
        />
      </motion.div>

      {/* Hero page text   */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-right">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <span className="text-[#00FFFF]">Officia perspiciatis</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro
          assumenda. Praesentium, similique porro fugiat ad amet sapiente
          doloribus veniam alias dolorem quia esse? Odit reprehenderit nostrum
          iste laudantium consequuntur?
        </p>
        {/* <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>
        </Link> */}
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />
    </section>


    <section
      className="relative bg-black text-white h-[38rem] items-center 
      overflow-hidden flex justify-between px-[15rem]"
    >
      {/* mascot */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className=""
          src="/photos/Landing/mascotLanding.webp"
          alt="Next.js logo"
          width={280}
          height={200}
          priority
        />
      </motion.div>

      {/* Hero page text   */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-right">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <span className="text-[#00FFFF]">Officia perspiciatis</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro
          assumenda. Praesentium, similique porro fugiat ad amet sapiente
          doloribus veniam alias dolorem quia esse? Odit reprehenderit nostrum
          iste laudantium consequuntur?
        </p>
        {/* <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>
        </Link> */}
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />
    </section>


    <section
      className="relative bg-black text-white h-[38rem] items-center 
      overflow-hidden flex justify-between px-[15rem]"
    >
      {/* mascot */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className=""
          src="/photos/Landing/mascotLanding.webp"
          alt="Next.js logo"
          width={280}
          height={200}
          priority
        />
      </motion.div>

      {/* Hero page text   */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 max-w-3xl z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-right">
          Lorem ipsum dolor sit amet consectetur.{" "}
          <span className="text-[#00FFFF]">Officia perspiciatis</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, porro
          assumenda. Praesentium, similique porro fugiat ad amet sapiente
          doloribus veniam alias dolorem quia esse? Odit reprehenderit nostrum
          iste laudantium consequuntur?
        </p>
        {/* <Link href="/signup">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FFFF] text-black font-semibold rounded-full shadow-md hover:bg-cyan-400 transition"
          >
            Get Started
            <ArrowRight size={18} />
          </motion.button>
        </Link> */}
      </motion.div>

      {/* Background Effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-noise-pattern opacity-20"
      />
    </section>

    </>

    
  );
};

export default HeroSection;
