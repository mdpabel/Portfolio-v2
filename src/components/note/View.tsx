import Image from 'next/image';
import videIcon from '@/../public/images/videoIcon.png';
import { unstable_noStore as noStore } from 'next/cache';
import { getNoteView } from '@/lib/note';
import { VideoIcon, ViewIcon, YoutubeIcon } from 'lucide-react';

const View = async ({ title }: { title: string }) => {
  noStore();
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
