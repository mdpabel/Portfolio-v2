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
          challenges—all while fueled by my love for coffee
        </p>
        <div className='flex space-x-4'>
          <Link target='_blank' href='https://github.com/mdpabel'>
            <FaGithub className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://leetcode.com/mdpabel/'>
            <LeetCodeIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://www.hackerrank.com/mdpabel385'>
            <HackerRank className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://stackblitz.com/@mdpabel'>
            <StackblitzIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
          <Link target='_blank' href='https://replit.com/@MDPabel?tab=repls'>
            <ReplItIcon className='w-6 h-6 text-zinc-800 dark:text-zinc-100 hover:scale-110 transition cursor-pointer' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
