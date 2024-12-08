import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Stats from '@/components/sections/Stats';
import Features from '@/components/sections/Features';
import Gallery from '@/components/sections/Gallery';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <Stats />
      <Features />
      <Gallery />
      <Contact />
    </main>
  );
}