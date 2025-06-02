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

export default function Home() {
  return (
    <div className="font-mont">
      <Navbar />
      <main>
        <HeroSection />
        <AboutBlock />
        <ProductGrid />
        <FeatureCards />
        <ValueProps />
        <InquirySection />
        {/* djaskd */}
        <MaterialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
