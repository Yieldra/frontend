// app/page.tsx
"use client";

// import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import YieldCalculator from "../components/YieldCalculator";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";
// import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* <Header /> */}
      <Hero />
      <Features />
      <HowItWorks />
      <YieldCalculator />
      {/* <Stats /> */}
      <FAQ />
      <CTASection />
      {/* <Footer /> */}
    </main>
  );
}
