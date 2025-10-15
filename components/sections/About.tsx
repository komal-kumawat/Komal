"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code, MapPin, Phone } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative px-4 sm:px-8 lg:px-16 xl:px-24 py-16 sm:py-24 
        bg-white dark:bg-black backdrop-blur-md overflow-x-hidden
      "
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="
          text-2xl sm:text-3xl md:text-4xl 
          flex items-center justify-center 
          text-gray-900 dark:text-gray-100 
          mb-10 sm:mb-16

        "
      >
        ABOUT ME
      </motion.h2>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-10 sm:gap-14 md:gap-16">

        {/* Left Section - Profile Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start space-y-8"
        >
          {/* Image */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700 shadow-md">
            <Image
              src="/image.png"
              alt="Komal Kumawat"
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* Name */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            Komal Kumawat
          </h3>

          {/* Info */}
          <div className="space-y-4 w-full">
            {[
              { icon: <Code size={18} />, text: "Software Engineer" },
              { icon: <MapPin size={18} />, text: "Bengaluru, Karnataka, India" },
              { icon: <Phone size={18} />, text: "+91 6350444789" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-base sm:text-lg text-gray-700 dark:text-gray-300"
              >
                <span
                  className="
                    rounded-full border p-2 bg-white text-black border-gray-400
                    dark:bg-black dark:text-white dark:border-gray-600
                    hover:scale-105 transition-transform
                    shrink-0
                  "
                >
                  {item.icon}
                </span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - About Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col space-y-6 text-center md:text-left"
        >
<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.4 }}
  className="
    text-base sm:text-lg md:text-xl font-mono leading-relaxed
    text-gray-700 dark:text-gray-300
  "
>
  Hi, I’m <span className="font-semibold">Komal Kumawat</span> — a passionate{" "}
  <span className="font-semibold">Software Developer</span> with strong expertise
  in crafting scalable, intuitive, and modern web applications. I love turning
  ideas into impactful digital solutions through clean code, thoughtful design,
  and innovative problem-solving.
</motion.p>

<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="
    text-base sm:text-lg md:text-xl font-mono leading-relaxed
    text-gray-700 dark:text-gray-300
  "
>
  I specialize in building efficient front-end experiences with React and
  seamless back-end systems using Node.js and MongoDB. I’m driven by curiosity,
  collaboration, and the pursuit of excellence — continuously learning, building,
  and evolving to create products that inspire and empower users.
</motion.p>

<motion.h3
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.6 }}
  className="
    text-lg sm:text-xl md:text-2xl font-bold
    text-gray-900 dark:text-gray-100 tracking-wide
  "
>
  BUILD | INNOVATE | INSPIRE
</motion.h3>

        </motion.div>
      </div>
    </section>
  );
}
