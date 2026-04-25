import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import InstaVideos from "@/components/InstaVideos";
import BrandShowcase from "@/components/BrandShowcase";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <InstaVideos />
      <BrandShowcase />
      <Footer />
      <BackToTop />
    </main>
  );
}
