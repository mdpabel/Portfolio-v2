import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import me from '@/../public/images/me.jpg';

export const dynamic = 'force-static';

// Helper function to calculate years of experience
function calculateYearsSince(startDate: Date): number {
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = timeDiff / millisecondsInYear;
  return Math.floor(years) + (years % 1 >= 0.5 ? 0.5 : 0);
}

const About = () => {
  const coding = calculateYearsSince(new Date(2019, 0, 12));
  const experience = calculateYearsSince(new Date(2018, 0, 7));

  return (
    <div className='relative px-8 lg:px-12 w-full max-w-5xl container'>
      <div className='grid grid-cols-1 lg:grid-cols-2 pt-12 lg:pt-28'>
        <div className='lg:ml-20'>
          <Image
            className='rounded-2xl aspect-square lg:rotate-3'
            src={me}
            width={600}
            height={1000}
            alt='Me'
          />
        </div>
        <div className='space-y-10 lg:order-first lg:row-span-2 py-10 lg:py-0'>
          <h1 className='font-bold text-4xl text-zinc-800 sm:text-5xl dark:text-zinc-100 tracking-tight'>
            I’m MD Pabel. I live in Bangladesh, where I solve problems with code
            and secure websites.
          </h1>
          <div className='space-y-4'>
            <p className='text-zinc-700 dark:text-zinc-300'>
              My journey in technology began in a small town in Bangladesh, and
              since then, I’ve been deeply involved in web security and
              full-stack development. Over the years, I&apos;ve had the
              privilege to work with clients from around the world, solving
              real-world problems by cleaning hacked websites, launching secure
              web platforms, and developing software solutions that make an
              impact globally.
            </p>
            <p className='text-zinc-700 dark:text-zinc-300'>
              I have a deep passion for web security, ensuring websites remain
              free of malware and safe from cyber threats. My work has spanned
              from fixing over 4,100 hacked websites to launching successful
              projects and collaborating with clients globally.
            </p>
            <p className='text-zinc-700 dark:text-zinc-300'>
              My core belief is that technology should not just be about
              innovation, but also about reliability, security, and making a
              positive impact. With over 6.5 years of experience in the real
              world and a strong foundation in problem-solving, I am excited to
              continue pushing the boundaries of technology and web security.
            </p>
          </div>
        </div>
        <div className='lg:ml-10'>
          <ul className='space-y-4'>
            <li>
              <Link
                href='#'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <FaXTwitter className='w-5 h-5' /> <span>Follow on X</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <FaInstagram className='w-5 h-5' />{' '}
                <span>Follow on Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <FaGithub className='w-5 h-5' /> <span>Follow on GitHub</span>
              </Link>
            </li>
            <li className='pb-2'>
              <Link
                href='#'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <FaLinkedin className='w-5 h-5' />{' '}
                <span>Follow on LinkedIn</span>
              </Link>
            </li>
            <li className='border-gray-300 dark:border-gray-600 pt-5 border-t'>
              <Link
                href='#'
                className='flex space-x-4 font-medium text-sm text-zinc-800 hover:text-teal-500 dark:hover:text-teal-500 dark:text-zinc-200 transition group'>
                <MdOutlineEmail className='w-5 h-5' />{' '}
                <span>pabel7396@gmail.com</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div className='py-10'>
        <h2 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-100'>
          Skills
        </h2>
        <p className='mb-6 text-sm text-zinc-700 dark:text-zinc-300'>
          Let&apos;s have some fun with numbers from my tech journey. These
          stats don&apos;t hold any deep meaning, but they reflect my tech
          adventure, and you&apos;re welcome to draw your insights from them.
        </p>
        {/* Coding Stats */}
        <div className='space-y-4'>
          <h2 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-100'>
            Coding
          </h2>
          <ul className='gap-x-8 gap-y-2 grid md:grid-cols-2'>
            <ListItem leftText='Years Coding' rightText={coding} />
            <ListItem leftText='Developed Websites' rightText='10+' />
            <ListItem leftText='DS/Algo Problems Solved' rightText='700+' />
            <ListItem leftText='Database Problems Solved' rightText='100+' />
            <ListItem leftText='Languages Spoken' rightText='4' />
          </ul>
          <div className='flex justify-center pt-4'>
            <img
              width={500}
              height={300}
              alt='Leetcode MD Pabel'
              src='https://leetcard.jacoblin.cool/mdpabel?theme=light&font=Karma'
            />
          </div>
        </div>

        {/* Real World Experience Section */}
        <div className='space-y-4 mt-10'>
          <h2 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-100'>
            Real World Experience
            <sup className='ml-4 text-gray-600 text-sm dark:text-gray-400'>
              Last updated: 05 Nov 23
            </sup>
          </h2>
          <ul className='gap-x-8 gap-y-3 grid md:grid-cols-2'>
            <ListItem
              leftText='Real World Experience'
              rightText={experience + '+'}
            />
            <ListItem leftText='Project Success' rightText='1626' />
            <ListItem leftText='Hacked Website Fixes' rightText='4100+' />
            <ListItem leftText='Clients' rightText='1626+' />
            <ListItem leftText='Global Impact' rightText='52%' />
            <ListItem leftText='Websites Launched' rightText='10+' />
          </ul>
        </div>
      </div>
    </div>
  );
};

// ListItem component for consistent styling
const ListItem = ({
  leftText,
  rightText,
}: {
  leftText: string;
  rightText: string | number;
}) => {
  return (
    <li className='flex justify-between'>
      <span className='text-zinc-800 dark:text-zinc-300'>{leftText}</span>
      <span className='bg-slate-200 dark:bg-slate-700 px-3 rounded-full'>
        {rightText}
      </span>
    </li>
  );
};

export default About;
