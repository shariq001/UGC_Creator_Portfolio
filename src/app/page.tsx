import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import InstaVideos from "@/components/InstaVideos";
import BrandShowcase from "@/components/BrandShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <InstaVideos />
      <BrandShowcase />
      <Contact />
      <Footer />
    </main>
  );
}
