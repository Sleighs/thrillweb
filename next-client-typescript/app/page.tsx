"use client"; 

import '../app/globals.css';
import '../styles/home.css';
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import Navigation from "./components/Navigation";
import HeroSectionSocialMedia from "./components/home/HeroSectionSocialMedia";


export default function Home() {
  return (
    <main className="main">
      <Navigation />
      <HeroSection />
      <HeroSectionSocialMedia />
      <Footer />
    </main>
  );
}
