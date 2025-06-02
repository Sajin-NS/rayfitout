"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navItems = [
    "Projects",
    "Services",
    "Systems",
    "Products",
    "About",
    "Contact",
  ];

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
    <>
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
              {/* Logo */}
              <div className="flex items-center">
                <h1
                  className={`text-4xl font-bold transition-colors duration-300 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                >
                  Rayfitout
                </h1>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-8 text-small font-mont tracking-wide uppercase">
                {navItems.map((item) => (
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

              {/* Mobile Menu Button */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setMobileOpen(true)}
              >
                <Menu
                  size={28}
                  className={`${isScrolled ? "text-black" : "text-white"}`}
                />
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-screen w-full bg-white z-[9999] flex flex-col px-8 py-10"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setMobileOpen(false)}
                className="text-black"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col justify-center items-center h-full space-y-6 font-mont text-xl uppercase text-black">
              {navItems.map((item) => (
                <Link key={item} href="#">
                  <span
                    className="cursor-pointer hover:text-gray-600 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
