import { FaGithub } from 'react-icons/fa';
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
    <div className='relative px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='space-y-5 pt-12 lg:pt-28 max-w-2xl'>
        <h1 className='font-semibold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-[1.1em] tracking-tight'>
          Passionate Developer, Problem Solver, Coffee Lover
        </h1>
        <p className='text-zinc-800 dark:text-zinc-100'>
          I’m MD Pabel, a passionate developer and tech problem solver who has
          fixed thousands of hacked sites. Currently, I’m building 3 Zero
          Digital, dedicated to achieving perfection with 0 Vulnerability, 0
          Downtime, and 0 Error, helping clients overcome their digital
          challenges—all while fueled by my love for coffee.
        </p>
        <div className='flex space-x-4'>
          {/* GitHub Link */}
          <Link
            target='_blank'
            href='https://github.com/mdpabel'
            aria-label='Visit my GitHub profile'>
            <FaGithub className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>

          {/* LeetCode Link */}
          <Link
            target='_blank'
            href='https://leetcode.com/mdpabel/'
            aria-label='Visit my LeetCode profile'>
            <LeetCodeIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>

          {/* HackerRank Link */}
          <Link
            target='_blank'
            href='https://www.hackerrank.com/mdpabel385'
            aria-label='Visit my HackerRank profile'>
            <HackerRank className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>

          {/* StackBlitz Link */}
          <Link
            target='_blank'
            href='https://stackblitz.com/@mdpabel'
            aria-label='Visit my StackBlitz profile'>
            <StackblitzIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>

          {/* ReplIt Link */}
          <Link
            target='_blank'
            href='https://replit.com/@MDPabel?tab=repls'
            aria-label='Visit my ReplIt profile'>
            <ReplItIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
