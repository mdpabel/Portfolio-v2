import Hero from '@/components/home/hero';
import FeaturedWorkAndNotes from '@/components/home/featured-work-and-notes';
import Projects from '@/components/home/projects';
import Skills from '@/components/home/skills';
import PlayGameWithMe from '@/components/home/play-game-with-me';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <FeaturedWorkAndNotes />
      {/* <PlayGameWithMe />  */}
    </>
  );
};

export default Home;
