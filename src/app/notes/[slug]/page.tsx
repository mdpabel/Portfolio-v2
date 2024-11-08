import React, { Suspense } from 'react';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import MyImg from '@/../public/images/me_3.jpg';
import TimerIcon from './TimerIcon';
import LeftArrowIcon from './LeftArrowIcon';
import View from '../../../components/note/View';
import ReadingTime from './ReadingTime';
import { EditIcon } from '@/components/common/icons';
import ScrollToTopButton from '@/components/common/scroll-to-top';
import { getNote, getNotes, incrementNoteView } from '@/lib/note';
import Content from '@/components/markdow/render-content';

export const dynamic = 'force-static';

type PropTypes = { params: { slug: string } };

export async function generateMetadata(
  { params }: PropTypes,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const note = await getNote(params?.slug);

  if (!note) return {};

  return {
    title: note.file.data.title,
    description: note.file.data.description,
    publisher: 'MD Pabel',
    authors: [
      {
        name: 'MD Pabel',
        url: 'https://mdpabel.com',
      },
    ],
    category: note.file.data.title,
    creator: 'MD Pabel',
    keywords: [note.file.data.title, ...note.file.data.title.split(' ')],
  };
}

export async function generateStaticParams() {
  const notes = await getNotes();

  return notes?.map((note) => ({
    slug: note.slug,
  }));
}

const page = async ({ params }: PropTypes) => {
  const note = await getNote(params?.slug);

  if (!note) return notFound();

  const githubUrl = note.githubUrl ?? '';

  return (
    <div className='relative px-4 sm:px-8 lg:px-12 pt-14 w-full max-w-5xl container'>
      <Link href='/notes'>
        <span className='flex items-center space-x-2 text-sm text-zinc-800 dark:text-zinc-200'>
          <LeftArrowIcon />
          <span>Back to Notes</span>
        </span>
      </Link>

      <div className='flex justify-between items-center py-5'>
        <h1 className='mb-2 font-medium text-2xl text-zinc-800 dark:text-zinc-100'>
          {note.file?.data?.title}
        </h1>
        <Link href={githubUrl} target='_blank'>
          <EditIcon />
        </Link>
      </div>

      <div className='flex justify-between items-center pb-5'>
        <div className='flex items-center gap-2'>
          <Image
            priority={true}
            src={MyImg}
            alt='MD Pabel'
            width={35}
            height={35}
            className='rounded-full'
          />
          <p className='text-sm text-zinc-600 dark:text-zinc-400'>
            <span>MD Pabel</span> /{' '}
            <span>{formatDate(note.file.data.date)}</span>
          </p>
        </div>

        <div className='flex items-center space-x-2'>
          <div className='flex items-center space-x-2 text-sm text-zinc-600 dark:text-zinc-400'>
            <span>
              <TimerIcon />
            </span>
            <ReadingTime content={note.file.content} />
          </div>

          <div className='bg-zinc-800 dark:bg-zinc-200 rounded-full w-1 h-1'></div>

          <Suspense
            fallback={
              <div className='md:block hidden line-clamp-1 text-sm text-zinc-600 dark:text-zinc-400'>
                ... views
              </div>
            }>
            <View title={note.file.data.title} />
          </Suspense>
        </div>
      </div>

      <Content content={note.file.content} />

      <ScrollToTopButton />
    </div>
  );
};

export default page;
