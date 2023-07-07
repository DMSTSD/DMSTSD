import React from "react";
import HeroSection from "../../components/hero-section";
import MainContent from "./components/main-contents-section";
import Footer from "../../components/footer";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  );
}
