import { TbBrandFiverr } from 'react-icons/tb';
import { FaUpwork } from 'react-icons/fa6';
import { FaBriefcase, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import Stats from './stats';

const WorkExperiences = () => {
  return (
    <div className='lg:col-span-2'>
      <h2 className='flex items-center space-x-2 mb-8'>
        <FaBriefcase className='w-6 h-6' />
        <span>Work</span>
      </h2>
      <ul className='space-y-4'>
        <li>
          <h3 className='flex items-center space-x-2 mb-2'>
            <Image
              src='/images/3zero-logo.webp'
              width={30}
              height={30}
              alt='3zero-logo'
              className='bg-white p-[2px] rounded-full w-6 h-6'
            />
            <span>3Zero Digital</span>
          </h3>
          <div className='grid grid-cols-2'>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              Founder
            </span>
            <span className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'>
              JUL 2024 — Present
            </span>
          </div>
        </li>

        <li>
          <h3 className='flex items-center space-x-2 mb-2'>
            <FaUpwork className='bg-[#14A800] p-[2px] rounded-full w-6 h-6 text-white' />
            <span>Upwork</span>
          </h3>
          <div className='grid grid-cols-2'>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              Fullstack Developer | Malware Removal Expert
            </span>
            <span className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'>
              Dec 2023 — Present
            </span>
          </div>
        </li>

        <li>
          <h3 className='flex items-center space-x-2 mb-2'>
            <TbBrandFiverr className='bg-[#1DBF73] p-[2px] rounded-full w-6 h-6 text-white' />
            <span>Fiverr</span>
          </h3>
          <div className='grid grid-cols-2'>
            <span className='text-xs text-zinc-500 dark:text-zinc-400'>
              Web Security Expert and Fullstack Developer
            </span>
            <span className='ml-auto text-xs text-zinc-400 dark:text-zinc-500'>
              Jul 2018 — Present
            </span>
          </div>
        </li>
      </ul>
      <div className='w-full'>
        <Link
          href='/MD_Pabel_s_Resume.pdf'
          // download='Pabel_s_Resume.pdf'
          target='_blank'
          className='inline-flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-800/50 dark:bg-zinc-800/50 mt-6 px-3 py-2 rounded-md w-full font-medium text-sm text-zinc-900 dark:hover:text-zinc-50 active:text-zinc-900/60 dark:active:text-zinc-50/70 dark:text-zinc-300 transition active:transition-none group outline-offset-2'>
          <span>Download CV</span> <FaDownload />{' '}
        </Link>
      </div>

      <Stats />
    </div>
  );
};

export default WorkExperiences;
