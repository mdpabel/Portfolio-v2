import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import React from 'react';

const Hero = () => {
  return (
    <div className='space-y-5 pt-28 max-w-2xl'>
      <h1 className='font-semibold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 leading-7 tracking-tight'>
        Software designer, founder, and amateur astronaut.
      </h1>
      <p className='text-zinc-800 dark:text-zinc-100'>
        I’m Spencer, a software designer and entrepreneur based in New York
        City. I’m the founder and CEO of Planetaria, where we develop
        technologies that empower regular people to explore space on their own
        terms.
      </p>
      <div className='flex space-x-4'>
        <FaGithub className='w-5 h-5 text-zinc-800 dark:text-zinc-100' />
        <FaLinkedin className='w-5 h-5 text-zinc-800 dark:text-zinc-100' />
        <FaXTwitter className='w-5 h-5 text-zinc-800 dark:text-zinc-100' />
        <FaInstagram className='w-5 h-5 text-zinc-800 dark:text-zinc-100' />
      </div>
    </div>
  );
};

export default Hero;
