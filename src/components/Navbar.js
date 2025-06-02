"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-9xl mx-auto px-global_x py-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-bold">Rayfitout</h1>
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
              <span className="hover:underline hover:underline-offset-8 transition duration-200 cursor-pointer text-white text-[16px]">
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
