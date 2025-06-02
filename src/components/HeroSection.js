"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="relative w-full h-[100vh] overflow-hidden">
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/HeroBackground.jpg"
          alt="Aluminum Systems"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-9xl mx-auto px-6 md:px-global_x pt-40 text-white h-full flex flex-col justify-end pb-30"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="text-small uppercase tracking-widest text-gray-300 font-mont mb-2"
          variants={fadeUp}
        >
          Services / Aluminium Systems
        </motion.p>

        <motion.h1
          className="text-title font-extralight font-mont mb-6 leading-tight uppercase"
          variants={fadeUp}
        >
          Aluminum Systems
        </motion.h1>

        <motion.p
          className="text-medium uppercase tracking-widest text-gray-300 font-mont mb-2"
          variants={fadeUp}
        >
          CONTEMPORARY SYSTEMS, SEAMLESS INTEGRATION
        </motion.p>
      </motion.div>
    </section>
  );
}
