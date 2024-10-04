import Link from 'next/link';
import React from 'react';
import { menu } from './header';

const Footer = () => {
  return (
    <footer className='flex-none mt-10'>
      <div className='relative px-8 lg:px-12 w-full max-w-5xl container'>
        <div className='border-zinc-100 dark:border-zinc-700/40 pt-10 pb-16 border-t'>
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>
            <div className='flex sm:flex-row flex-col justify-between items-center gap-6'>
              <div className='flex flex-wrap justify-center gap-x-6 gap-y-1 font-medium text-sm text-zinc-800 dark:text-zinc-200'>
                {menu.map((item, index) => (
                  <Link
                    key={index}
                    className='hover:text-teal-500 dark:hover:text-teal-400 transition'
                    href={item.to}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <p className='text-sm text-zinc-700 dark:text-zinc-500'>
                No © copyright issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
