import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Modules from '@/components/Modules';
import Community from '@/components/Community';
import Results from '@/components/Results';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Embed from "@/components/embed";

export default function Home() {
  return (
    <main className="overflow-hidden bg-gradient-to-b from-white via-sky-50/30 to-white">
      <Hero />
      <Stats />
      <Modules />
      <Community />
      <Results />
      <Events />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
