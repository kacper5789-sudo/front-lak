import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyPhone from './components/StickyPhone';

export default function App() {
  return (
    <div className="bg-zinc-950 font-inter antialiased">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Gallery />
      <WhyUs />
      <Reviews />
      <MapSection />
      <Contact />
      <Footer />
      <StickyPhone />
    </div>
  );
}
