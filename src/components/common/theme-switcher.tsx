'use client';
import { cn } from '@/lib/utils';
import { MoonStarIcon, SunIcon } from 'lucide-react'; // Correct icons for theme switching
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeSwitcher = ({ className = '' }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const dark = theme === 'dark';

  return (
    <div
      className={cn(
        'flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 backdrop-blur',
        className,
      )}>
      <div className='flex justify-center items-center'>
        {dark ? (
          <button
            onClick={() => setTheme('light')}
            name='theme'
            value='light'
            type='submit'>
            <SunIcon className='hover:text-teal-500 transition' />
          </button>
        ) : (
          <button
            onClick={() => setTheme('dark')}
            name='theme'
            value='dark'
            type='submit'>
            <MoonStarIcon className='hover:text-teal-500 transition' />
          </button>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
