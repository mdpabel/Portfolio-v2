import Link from 'next/link';
import { getNotes } from '@/lib/note';

const FeaturedNotes = async () => {
  const notes = await getNotes();

  if (!notes || notes.length === 0) {
    return null;
  }

  return (
    <div className='flex flex-col gap-10 lg:col-span-3'>
      <div className='flex justify-between items-center'>
        <h2 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-100'>
          Recent Notes
        </h2>
        <Link
          className='text-teal-700 hover:text-teal-800 dark:hover:text-teal-300 dark:text-teal-400 underline underline-offset-4 transition decoration-teal-500'
          href='/notes'>
          All Notes
        </Link>
      </div>
      <div className='space-y-9'>
        {notes.slice(0, 4).map((note, index) => (
          <Article
            key={index}
            date={note.file.data.date}
            description={note.file.data.description}
            href={note.slug}
            title={note.file.data.title}
          />
        ))}
      </div>
    </div>
  );
};

type ArticleProps = {
  title: string;
  href: string;
  date: string;
  description: string;
};

const Article = ({ title, href, date, description }: ArticleProps) => {
  return (
    <article className='relative flex flex-col items-start group'>
      <h2 className='font-semibold text-base text-zinc-800 dark:text-zinc-100 tracking-tight'>
        <div className='group-hover:scale-100 z-0 absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 bg-zinc-50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 sm:rounded-2xl transition scale-95'></div>
        <Link href={'/notes/' + href}>
          <span className='z-20 absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl'></span>
          <span className='relative z-10'>{title}</span>
        </Link>
      </h2>
      <time className='relative z-10 flex items-center order-first mb-3 pl-3.5 text-sm text-zinc-400 dark:text-zinc-500'>
        <span
          className='left-0 absolute inset-y-0 flex items-center'
          aria-hidden='true'>
          <span className='bg-zinc-200 dark:bg-zinc-500 rounded-full w-0.5 h-4'></span>
        </span>
        {date}
      </time>
      <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
        {description}
      </p>
      <div
        aria-hidden='true'
        className='relative z-10 flex items-center mt-4 font-medium text-sm text-teal-500'>
        Read article
        <svg
          viewBox='0 0 16 16'
          fill='none'
          aria-hidden='true'
          className='ml-1 w-4 h-4 stroke-current'>
          <path
            d='M6.75 5.75 9.25 8l-2.5 2.25'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </article>
  );
};

export default FeaturedNotes;
