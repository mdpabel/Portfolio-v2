import Hero from '@/components/home/hero';
import FeaturedWorkAndNotes from '@/components/home/featured-work-and-notes';
import Projects from '@/components/home/projects';
import Skills from '@/components/home/skills';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <FeaturedWorkAndNotes />
    </>
  );
};

export default Home;
