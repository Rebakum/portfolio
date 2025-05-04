// components/Bannar.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Bannar() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-zinc-900">
      {/* Background image */}
      <Image
        src="/profile_banner.jpg"
        alt="Background"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-30"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl   font-extrabold text-white leading-tight">
            WellCome
          </h1>
          <h1
            className="text-xl font-bold uppercase md:text-3xl lg:text-4xl text-pink-500"
            data-aos="zoom-in"
          >
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm",
                  "Mst. Rebeka Sultana",
                  "a Front-End Web Developer",
                  "From Bangladesh!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="mt-4 text-lg text-zinc-200 max-w-xl mx-auto">
            A passionate web developer crafting beautiful and performant
            websites using the latest tech.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
            >
              Hire Me
            </Link>
            <Link
              href="/#projects"
              className="px-6 py-3 rounded-full border border-pink-600 text-pink-600 font-semibold hover:bg-pink-100 dark:hover:bg-pink-950 transition"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
