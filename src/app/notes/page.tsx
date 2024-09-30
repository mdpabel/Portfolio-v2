import Search from '../../components/note/Search';
import Notes from '@/components/note/Notes';
import { getNotes } from '@/lib/note';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Read my notes on programming, software development and more.',
};

type PageProps = {
  searchParams: {
    search: string;
  };
};

export async function generateStaticParams() {
  const notes = await getNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

const NotesPage = async ({ searchParams }: PageProps) => {
  const notes = await getNotes(searchParams?.search);

  return (
    <div className='space-y-6 mx-auto px-4 sm:px-8 lg:px-12 py-10 max-w-5xl'>
      <h1 className='mb-6 font-semibold text-3xl text-zinc-800 md:text-4xl dark:text-zinc-100'>
        All Notes
      </h1>
      <Search />
      <Notes notes={notes} />
    </div>
  );
};

export default NotesPage;
