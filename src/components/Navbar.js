"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.header
          key="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            isScrolled ? "bg-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-9xl mx-auto px-global_x py-6 flex justify-between items-center">
            <div className="flex items-center">
              <h1
                className={`text-4xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                Rayfitout
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8 text-small font-mont tracking-wide uppercase">
              {[
                "Projects",
                "Services",
                "Systems",
                "Products",
                "About",
                "Contact",
              ].map((item) => (
                <Link key={item} href="#">
                  <span
                    className={`cursor-pointer transition duration-200 hover:underline hover:underline-offset-8 text-[16px] ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                  >
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
