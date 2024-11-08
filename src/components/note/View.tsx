import { getNoteView, incrementNoteView } from '@/lib/note';
import { YoutubeIcon } from 'lucide-react';
import { unstable_noStore } from 'next/cache';

const View = async ({ title }: { title: string }) => {
  unstable_noStore();

  await incrementNoteView(title);
  const totalViews = await getNoteView(title);

  return (
    <div className='md:flex md:space-x-2 hidden line-clamp-1 text-gray-500 text-sm dark:text-zinc-400'>
      <span>{totalViews.toLocaleString()} views</span>
      {/* <Image src={videIcon} alt='video icon' width={20} height={15} />  */}
      <YoutubeIcon />
    </div>
  );
};

export default View;
