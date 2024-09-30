import { Project } from '@/lib/project';
import Link from 'next/link';

const Projects = async ({
  projects,
  all = true,
}: {
  projects: Project[];
  all?: boolean;
}) => {
  return (
    <div className='relative px-4 sm:px-8 lg:px-12 pt-24 pb-20 w-full max-w-5xl container'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-100'>
          My Projects
        </h2>
        {!all && (
          <Link
            className='text-teal-500 hover:text-teal-600 dark:hover:text-teal-300 dark:text-teal-400 underline underline-offset-4 transition decoration-teal-500'
            href='/projects'>
            All Projects
          </Link>
        )}
      </div>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Link href={`/projects/${project.slug}`}>
              <div className='flex justify-between gap-4 mb-6'>
                <div className='w-3/4'>
                  <h4 className='font-semibold text-zinc-800 dark:text-zinc-100'>
                    {project.name}
                  </h4>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    {project.description}
                  </p>
                </div>
                <time
                  dateTime='2023-12-01'
                  className='text-right mt-1 w-1/4 font-light text-sm text-zinc-500 dark:text-zinc-400'>
                  {project.created_at}
                </time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
