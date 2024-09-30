import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import React from 'react';
import Link from 'next/link';
import {
  HackerRank,
  LeetCodeIcon,
  ReplItIcon,
  StackblitzIcon,
} from '../common/icons';

const Hero = () => {
  return (
    <div className='relative px-4 sm:px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='space-y-5 pt-28 max-w-2xl'>
        <h1 className='font-semibold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[1.1em] tracking-tight'>
          Software developer, founder, and amateur astronaut.
        </h1>
        <p className='text-zinc-800 dark:text-zinc-100'>
          I’m MD Pabel, a freelance developer who has fixed over 4500 hacked
          sites for 2000+ clients across 56% of the countries worldwide. With
          expertise in programming, web development, and cybersecurity, I
          deliver solutions that safeguard and optimize websites globally.
        </p>
        <div className='flex space-x-4'>
          <Link target='_blank' href='https://github.com/mdpabel'>
            <FaGithub className='w-5 h-5 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://leetcode.com/mdpabel/'>
            <LeetCodeIcon className='w-5 h-5 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://www.hackerrank.com/mdpabel385'>
            <HackerRank className='w-5 h-5 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://stackblitz.com/@mdpabel'>
            <StackblitzIcon className='w-5 h-5 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://replit.com/@MDPabel?tab=repls'>
            <ReplItIcon className='w-5 h-5 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
