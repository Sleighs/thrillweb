import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import Navigation from "./components/Navigation";
import '../styles/home.css';

export default function Home() {
  return (
    <main className="main">
      <Navigation />
      <HeroSection />
      <Footer />
    </main>
  );
}
