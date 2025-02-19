"use client"; 

import '../app/globals.css';
import '../styles/home.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import HeroSectionSocialMedia from "./components/home/HeroSectionSocialMedia";
import HomeServicesPreview from './components/home/HomeServicesPreview';
import HomeTrustedWorldwideSection from './components/home/HomeTrustedWorldwideSection';
import HomeNumbersSection from './components/home/HomeNumbersSection';
import HomeWhyUsSection from './components/home/HomeWhyUsSection';

export default function Home() {
  return (
    <main className="main">
      <Navigation />
      <HeroSection />
      <HeroSectionSocialMedia />
      <HomeServicesPreview />
      <HomeTrustedWorldwideSection />
      <HomeNumbersSection />
      <HomeWhyUsSection />
      <Footer />
    </main>
  );
}
