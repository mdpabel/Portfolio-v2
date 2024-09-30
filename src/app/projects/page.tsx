import Projects from '@/components/project/projects';
import { fetchRepositories } from '@/lib/project';

export const dynamic = 'force-static';

const ProjectsPage = async () => {
  const projects = await fetchRepositories();

  return <Projects projects={projects} />;
};

export default ProjectsPage;
