import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutBlock from "@/components/AboutBlock";
import FeatureCards from "@/components/FeatureCards";
import ProductGrid from "@/components/ProductGrid";
import ValueProps from "@/components/ValueProps";
import FAQSection from "@/components/FAQSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
import MaterialsSection from "@/components/MaterialsSection";
import Services from "@/components/Services";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Home() {
  return (
    <div className="font-mont">
      <Navbar />
      <main>
        {[
          <HeroSection />,
          <AboutBlock />,
          <ProductGrid />,
          <FeatureCards />,
          <ValueProps />,
          <InquirySection />,
          <MaterialsSection />,
          <FAQSection />,
          <Services />,
        ].map((Component, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {Component}
          </motion.div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
