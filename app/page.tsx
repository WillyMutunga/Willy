import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechnicalArsenal from '@/components/TechnicalArsenal';
import FeaturedProjects from '@/components/FeaturedProjects';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TechnicalArsenal />
      <FeaturedProjects />
      <ExperienceTimeline />
      <Footer />
    </main>
  );
}
