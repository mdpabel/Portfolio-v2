import { cache } from 'react';
import { formatDate } from './utils';

const GITHUB_API_URL = `https://api.github.com/users/mdpabel/repos?per_page=100`;

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
}

export interface Project {
  name: string;
  slug: string;
  details: string;
  updated_at: string;
  description: string;
  created_at: string;
  topics: string[];
}

export const fetchReadme = cache(async (repoName: string): Promise<string> => {
  const response = await fetch(
    `https://api.github.com/repos/mdpabel/${repoName}/readme`,
  );

  if (!response.ok) {
    return 'No README available';
  }

  const data = await response.json();

  const content = atob(data.content.replace(/\n/g, ''));

  return content;
});

export const fetchAllRepositories = cache(async (): Promise<GitHubRepo[]> => {
  let page = 1;
  let allRepos: GitHubRepo[] = [];
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${GITHUB_API_URL}&page=${page}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch GitHub repositories: ${response.status}`,
      );
    }

    const repos: GitHubRepo[] = await response.json();
    allRepos = [...allRepos, ...repos];

    if (repos.length < 100) {
      hasMore = false;
    } else {
      page++;
    }
  }

  return allRepos;
});
export const fetchRepositories = cache(async (): Promise<Project[]> => {
  const repos: GitHubRepo[] = await fetchAllRepositories();

  const projectRepos = repos.filter((repo) => repo.topics.includes('project'));

  const projectsWithDetails = await Promise.all(
    projectRepos.map(async (repo) => {
      const readme = await fetchReadme(repo.name);
      const slug = repo.name.toLowerCase().replace(/\s+/g, '-');
      return {
        name: repo.name
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        slug,
        details: readme,
        updated_at: formatDate(repo.updated_at),
        created_at: formatDate(repo.created_at),
        description: repo.description ?? 'A fullstack application',
        topics: repo.topics,
      };
    }),
  );

  // Sort the projects, prioritizing those with 'featured-project' in their topics
  const sortedProjects = projectsWithDetails.sort((a, b) => {
    const isAFeatured = a.topics.includes('featured-project');
    const isBFeatured = b.topics.includes('featured-project');
    return isBFeatured ? 1 : isAFeatured ? -1 : 0;
  });

  return sortedProjects;
});
