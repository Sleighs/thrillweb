"use client"; 

import '../app/globals.css';
import '../public/styles/home.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import HeroSectionSocialMedia from "./components/home/HeroSectionSocialMedia";
import HomeServicesPreview from './components/home/HomeServicesPreview';
import HomeTrustedWorldwideSection from './components/home/HomeTrustedWorldwideSection';
import HomeNumbersSection from './components/home/HomeNumbersSection';
import HomeWhyUsSection from './components/home/HomeWhyUsSection';
import HomeContactForm from './components/home/HomeContactForm';
import HomePortfolioHighlight from './components/home/HomePortfolioHighlight';
import { DataContextProvider } from './contexts/DataContext';

export default function Home() {
  return (
    <DataContextProvider>
      <main className="main">
        <Navigation />
        <HeroSection />
        <HeroSectionSocialMedia />
        <HomeServicesPreview />
        <HomeTrustedWorldwideSection />
        <HomeNumbersSection />
        <HomeWhyUsSection />
        <HomePortfolioHighlight />
        {/* <HomeContactForm /> */}
        <Footer />
      </main>
    </DataContextProvider>
    
  );
}
