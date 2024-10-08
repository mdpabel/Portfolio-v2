import matter, { GrayMatterFile } from 'gray-matter';

import { redis } from '../lib/redis';
import { cache } from 'react';
import fetchMdxFiles from './github';

export const getNote = cache(async (slug: string) => {
  const notes = await getNotes();
  const note = await notes?.find((note) => note.slug === slug);

  return note;
});

export const getNotes = cache(async (search?: string) => {
  const files = await fetchMdxFiles();

  const parsedFiles = files?.map((file) => ({
    ...file,
    content: matter(file.content),
  }));

  if (!parsedFiles) {
    return [];
  }

  const notes = await Promise.all(
    parsedFiles.map<
      Promise<{ file: GrayMatterFile<string>; slug: string; githubUrl: string }>
    >(async (file) => {
      return {
        file: await file.content,
        slug: generateSlug(file.content.data.title ?? ''),
        githubUrl: file.githubUrl,
      };
    }),
  );

  const sortedNotes = notes
    .filter((note) => note.file.data.status === 'published')
    .sort((a, b) => b.file.data.priority - a.file.data.priority);

  if (search) {
    return sortedNotes.filter((note) =>
      note.file.data.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return sortedNotes;
});

export function generateSlug(filename: string) {
  return filename.replace(/\.[^/.]+$/, '').replace(/\s+/g, '-');
}

export const incrementNoteView = async (title: string) => {
  await redis.incrby(title, 1);
};

export const getNoteView = async (title: string) => {
  const view = await redis.get(title);

  return Number(view);
};

export type NotesType = Awaited<ReturnType<typeof getNotes>>;
