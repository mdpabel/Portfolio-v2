import WorkExperiences from './work-experiences';
import FeaturedNotes from './featured-notes';

const FeaturedWorkAndNotes = async () => {
  return (
    <div className='relative gap-10 grid grid-cols-1 lg:grid-cols-5 px-8 lg:px-12 w-full max-w-5xl container'>
      <FeaturedNotes />
      <WorkExperiences />
    </div>
  );
};

export default FeaturedWorkAndNotes;
