# Portfolio v2

Welcome to my personal portfolio, built using Next.js with the latest technologies for a fast, dynamic, and interactive user experience.

## Features

- **Next.js 14**: Modern full-stack React framework for static and dynamic web pages.
- **Tailwind CSS**: A utility-first CSS framework for custom, responsive design.
- **Radix UI**: Accessible and unstyled components for building high-quality user interfaces.
- **React Hook Form**: A performant form management library.
- **React Icons**: A collection of customizable icons to enhance the UI.
- **Redis**: Used for caching view counts for the notes section (optimizes performance for tracking the number of views).
- **GitHub CMS**: Content for notes and projects is managed directly from GitHub repositories using Markdown files for easy management and version control.
- **GitHub Webhooks**: Automatically rebuild static pages when new content or projects are added, ensuring the site is always up to date.

## Tech Stack

- **Next.js 14**
- **Tailwind CSS**
- **Redis**
- **TypeScript**
- **React**
- **Markdown (GitHub as CMS)**
- **React Syntax Highlighter** for code display.
- **React Slick** for carousel/slider components.
- **GitHub Webhooks** for automatic content refresh.

## Content Management & Projects

### GitHub Repositories

- **Notes Repository**: The content for the "Notes" section is stored in the [Notes Repository](https://github.com/mdpabel/notes). Notes are written in Markdown and stored in GitHub, allowing for easy content management and versioning.

- **Project Repositories**: My portfolio dynamically fetches project data from various GitHub repositories. Some repositories are marked as **projects** using the `types` field in the repository metadata. Projects are then showcased on the site, with each project's details coming directly from the respective repository's `README.md`.

### GitHub Webhooks

To ensure that the site is always up to date, GitHub webhooks are used to trigger a rebuild of the static pages whenever new content or projects are added. This ensures that any updates to my repositories automatically reflect on the portfolio without requiring manual intervention.

## Performance

- The site is optimized for performance with a **Lighthouse score of 100** for both desktop and mobile.

![Performance score](./public/screenshots/Screenshot_10.png title')

## How It Works

1. **Notes Fetching**: Notes are fetched from the [Notes Repository](https://github.com/mdpabel/notes) using the GitHub API, and the content is rendered on the site. Notes are dynamically updated via GitHub Webhooks whenever new content is added.
2. **Projects Display**: Projects are fetched from my GitHub repositories marked as projects. These repositories contain `README.md` files, which are used to populate the details for each project displayed on the site.
3. **View Counting**: Redis is used to increment view counts for notes, ensuring that each view is tracked efficiently. The use of Redis enhances the performance of tracking without affecting the overall user experience.

## Libraries and Dependencies

### Main Dependencies:

- `next`, `react`, `react-dom`: Core libraries for building and rendering the React application.
- `@radix-ui/react-*`: A set of components for building accessible and high-quality UI elements.
- `tailwindcss`: CSS framework for building responsive and modern interfaces.
- `react-hook-form`: For managing form data efficiently.
- `react-slick`: Carousel/slider for project showcase.
- `zod`: For type-safe data validation.
- `next-webhooks`: For handling webhooks from GitHub to trigger static page revalidation.

### Development Dependencies:

- `eslint`, `typescript`, `postcss`: To ensure code quality and proper type checking.
- `@tailwindcss/typography`: For better text and markdown rendering.
- `@next/bundle-analyzer`: For performance analysis.
