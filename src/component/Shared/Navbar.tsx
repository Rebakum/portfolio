"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import useScrollSpy from "../Hook/ScrollSpy";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { title: "About", href: "/#about" },
    { title: "Services", href: "/#services" },
    { title: "Skills", href: "/#skills" },
    { title: "Projects", href: "/#projects" },
    { title: "Blogs", href: "/#blogs" },
    { title: "Contact", href: "/#contact" },
  ];

  const activeId = useScrollSpy(
    navItems.map((item) => item.href.replace("/#", "")),
    100
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-md bg-gray-950 text-white"
          : "bg-transparent text-gray-100"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl">
          гє๒єкค✍
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-2 transition-colors duration-200 ${
                activeId === item.href.replace("/#", "")
                  ? "text-pink-500"
                  : "text-white"
              }`}
            >
              {item.title}
            </a>
          ))}
        </ul>
        {/* Desktop social */}
        <ul className="hidden md:flex space-x-4">
          <li className="hidden md:flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/mst-rebeka-sultana-reba05/"
              target="_blank"
              className="text-pink-50 hover:text-blue-700 transition duration-200 "
            >
              <FaLinkedin className="rounded-full text-xl " />
            </Link>
          </li>
          <li className="hidden md:flex space-x-4">
            <Link
              href="https://github.com/Rebakum"
              target="_blank"
              className="text-pink-50 hover:text-gray-700 transition duration-200"
            >
              <FaGithub className="rounded-full text-xl " />
            </Link>
          </li>
          <li className="hidden md:flex space-x-4">
            <Link
              href="https://www.facebook.com/profile.php?id=61554784244564"
              target="_blank"
              className="text-pink-50 hover:text-blue-700 transition duration-200"
            >
              <FaFacebook className="rounded-full text-xl " />
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden  px-6 pt-4 pb-6 shadow-md bg-gray-950"
          >
            <ul className="space-y-4 ">
              {navItems.map(({ title, href }) => {
                const id = href.replace("/#", "");
                const isActive = activeId === id;
                return (
                  <li key={title} className="list-none">
                    <Link
                      href={`/#${id}`} // ✅ anchor link
                      onClick={() => setIsOpen(false)}
                      className={`font-medium transition-colors duration-200 ${
                        isActive ? "text-pink-500" : "hover:text-pink-500"
                      }`}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
