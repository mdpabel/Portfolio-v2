import Link from 'next/link';
import ThemeSwitcher from '../common/theme-switcher';
import Logo from './logo';
import { Menu } from './header';
import { FaDownload } from 'react-icons/fa';

const BigScreenNavbar = ({ menu }: { menu: Menu }) => {
  return (
    <div className='md:block hidden px-4 sm:px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='items-center grid grid-cols-3'>
        <Logo />
        <nav className='flex justify-center'>
          <ul className='flex bg-white/90 dark:bg-zinc-800/50 shadow-lg shadow-zinc-800/9 backdrop-blur px-3 rounded-full max-w-max font-medium dark:text-zinc-200'>
            {menu?.map((menu, index) => (
              <li key={index} className='px-3 py-2'>
                <Link
                  href={menu.to}
                  className='font-medium text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-100 transition'>
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex justify-end items-center space-x-3'>
          <Link
            href='/MD_Pabel_s_Resume.pdf'
            // download='Pabel_s_Resume.pdf'
            target='_blank'
            className='inline-flex justify-center items-center gap-2 bg-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:bg-zinc-100 dark:active:bg-zinc-800/50 dark:bg-zinc-800/50 shadow-lg shadow-zinc-800/9 px-3 py-2 rounded-md font-medium text-sm text-zinc-900 dark:hover:text-zinc-50 active:text-zinc-900/60 dark:active:text-zinc-50/70 dark:text-zinc-300 transition active:transition-none group outline-offset-2'>
            <span>CV</span> <FaDownload />{' '}
          </Link>
          <ThemeSwitcher className='dark:bg-zinc-800/50 shadow-lg shadow-zinc-800/9 rounded-full w-9 h-9' />
        </div>
      </div>
    </div>
  );
};

export default BigScreenNavbar;
