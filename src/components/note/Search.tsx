'use client';
import React, { useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { SearchIcon } from '../common/icons';
import { Input } from '../ui/input';
import Spinner from '../common/Spinner';

const Search = () => {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [value] = useDebounce(text, 150);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    startTransition(() => router.replace(pathName + '?' + params.toString()));
  }, [pathName, router, searchParams, value]);

  return (
    <div className='relative'>
      <Input
        placeholder='Search Notes...'
        className='bg-zinc-800 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-100'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className='right-0 absolute inset-y-0 flex items-center pt-1 pr-2'>
        {isPending ? <Spinner /> : <SearchIcon />}
      </div>
    </div>
  );
};

export default Search;
