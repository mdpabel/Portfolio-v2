import { fetchRepositories } from '@/lib/project';
import Projects from '../project/projects';

const RecentProjects = async () => {
  const projects = await fetchRepositories();

  if (!projects || projects.length === 0) {
    return null;
  }

  const featuredProjects = projects.filter((project) =>
    project.topics.includes('featured-project'),
  );

  return <Projects projects={featuredProjects} all={false} />;
};

export default RecentProjects;
