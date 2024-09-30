import Content from '@/components/markdow/render-content';
import { fetchRepositories } from '@/lib/project';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

// Fetch project details
export async function generateStaticParams() {
  const projects = await fetchRepositories(); // Fetch all projects

  return projects.map((project) => ({
    slug: project.slug, // Assuming each project has a slug
  }));
}

type PropTypes = { params: { slug: string } };

const ProjectDetailPage = async ({ params }: PropTypes) => {
  const slug = params.slug;

  if (!slug) {
    return notFound();
  }

  const projects = await fetchRepositories(); // Fetch all projects at build time
  const project = projects.find((p) => p.slug === slug); // Filter the project by slug

  if (!project) {
    return notFound(); // Return 404 if project not found
  }

  const content = project.details;

  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-4xl'>
      <h1 className='mb-4 font-bold text-3xl'>{project.name}</h1>
      <p className='mb-8 text-gray-600 text-lg dark:text-gray-300'>
        {project.description}
      </p>
      <Content content={content} />
    </div>
  );
};

// Helper to fetch README.md from GitHub
async function fetchReadme(repoName: string): Promise<string> {
  const response = await fetch(
    `https://api.github.com/repos/mdpabel/${repoName}/readme`,
  );
  if (!response.ok) {
    return 'No README available';
  }
  const data = await response.json();
  const content = atob(data.content.replace(/\n/g, ''));
  return content;
}

export default ProjectDetailPage;
