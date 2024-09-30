'use client';

import React from 'react';

export const skillsArray = [
  { label: 'Java', level: 4.2 },
  { label: 'Javascript', level: 4.9 },
  { label: 'Typescript', level: 4.8 },
  { label: 'Python', level: 4.0 },
  { label: 'Docker', level: 4.2 },
  { label: 'React.js', level: 4.7 },
  { label: 'Next.js', level: 4.7 },
  { label: 'Node.js', level: 4.0 },
  { label: 'SQL', level: 4.0 },
  { label: 'Mongodb', level: 3.7 },
  { label: 'Git, Github', level: 3.7 },
  { label: 'TailwindCSS', level: 4.9 },
];

// Categorize skills based on their levels
const categorizeSkills = (skills: { label: string; level: number }[]) => {
  const categories: {
    prettyGood: string[];
    improving: string[];
    practice: string[];
    justStarting: string[];
  } = {
    prettyGood: [],
    improving: [],
    practice: [],
    justStarting: [],
  };

  skills.forEach((skill) => {
    if (skill.level >= 4.5) {
      categories.prettyGood.push(skill.label);
    } else if (skill.level >= 3.5) {
      categories.improving.push(skill.label);
    } else if (skill.level >= 2.5) {
      categories.practice.push(skill.label);
    } else {
      categories.justStarting.push(skill.label);
    }
  });

  return categories;
};

// Mobile skill list
const MobileSkillList = () => {
  const { prettyGood, improving, practice, justStarting } =
    categorizeSkills(skillsArray);

  return (
    <div className='space-y-8 bg-white/90 dark:bg-zinc-800/90 shadow-zinc-800/9 backdrop-blur p-6 rounded-lg'>
      {prettyGood.length > 0 && (
        <div>
          <h3 className='mb-4 font-semibold text-teal-500 text-xl'>
            I&apos;m pretty good at:
          </h3>
          <ul className='ml-6 text-gray-700 dark:text-zinc-300 list-disc'>
            {prettyGood.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {improving.length > 0 && (
        <div>
          <h3 className='mb-4 font-semibold text-xl text-yellow-500'>
            I&apos;m trying to improve:
          </h3>
          <ul className='ml-6 text-gray-700 dark:text-zinc-300 list-disc'>
            {improving.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {practice.length > 0 && (
        <div>
          <h3 className='mb-4 font-semibold text-orange-500 text-xl'>
            I need more practice:
          </h3>
          <ul className='ml-6 text-gray-700 dark:text-zinc-300 list-disc'>
            {practice.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {justStarting.length > 0 && (
        <div>
          <h3 className='mb-4 font-semibold text-red-500 text-xl'>
            Just starting:
          </h3>
          <ul className='ml-6 text-gray-700 dark:text-zinc-300 list-disc'>
            {justStarting.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Vertical bar skill display for desktop
const Skill = ({
  label,
  index,
  level,
}: {
  label: string;
  index: number;
  level: number;
}) => {
  const maxHeight = 200;
  const height = (level / 5) * maxHeight;

  const genLeftPixels = (index: number) => {
    const n = skillsArray.length;
    return `${(100 / n) * index - 3}%`;
  };

  return (
    <li
      className='bottom-0 absolute'
      style={{
        left: genLeftPixels(index),
      }}>
      <div className='bg-teal-500 skew-x-[48deg] skew-y-[-1deg] w-8 h-2 transform translate-x-[2px] translate-y-[1px]'></div>
      <div
        style={{
          height: `${height}px`,
        }}
        className='bg-teal-500 border-l-8 w-10'></div>
      <span className='inline-block -bottom-14 left-2 absolute w-24 text-gray-500 text-sm rotate-45'>
        {label}
      </span>
    </li>
  );
};

// Main Skills Component
const Skills = () => {
  return (
    <div className='relative flex flex-col justify-center items-center mx-auto mt-10 md:mt-15 px-4 sm:px-8 lg:px-12 pt-5 w-full max-w-5xl container'>
      {/* Mobile layout */}
      <div className='block lg:hidden w-full'>
        <MobileSkillList />
      </div>

      {/* Desktop layout */}
      <div className='lg:block relative hidden w-full max-w-4xl'>
        <ul className='w-full'>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-gray-900 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <span className='md:inline-block hidden'>I&apos;m the</span>
              <strong> master</strong> <br />
              <span className='md:inline-block hidden'>of the universe.</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-green-500 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>High</strong> <br />
              <span className='md:inline-block hidden'>
                I&apos;m pretty good.
              </span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-green-200 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Medium </strong>
              <span className='md:inline-block hidden'>I&apos;m trying</span>
              <br />
              <span className='md:inline-block hidden'>to improve.</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='border-yellow-500 mt-4 md:mb-7 border-r-4 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Basic </strong>
              <span className='md:inline-block hidden'>you can&apos;t </span>
              <br />
              <span className='md:inline-block hidden'>always win...</span>
            </span>
          </li>
          <li className='flex justify-end items-center my-4 border-b w-full h-10'>
            <span className='mt-4 md:mb-7 border-r-4 border-red-500 w-[20%] md:w-1/4 h-8 text-sm'>
              <strong>Uh? </strong> <br />
              <span className='md:inline-block hidden'>Next question?</span>
            </span>
          </li>
        </ul>

        <ul className='bottom-4 left-0 absolute flex justify-between w-[75%]'>
          {skillsArray.map((item, index) => (
            <Skill
              key={index}
              label={item.label}
              level={item.level}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
