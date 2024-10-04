import { FaChartBar } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { label: 'Hacked Website Fixes', value: '4200+' },
    { label: 'DS/Algo Problems Solved', value: '800+' },
    { label: 'Database Problems Solved', value: '100+' },
    { label: 'Project Success', value: '1600+' },
    { label: 'Global Impact', value: '56%' },
    { label: 'Clients', value: '1626+' },
  ];

  return (
    <div className='pt-10 w-full'>
      <div className='flex justify-between items-center mb-8'>
        <h2 className='flex items-center space-x-2'>
          <FaChartBar className='w-6 h-6 text-zinc-500 dark:text-zinc-400' />
          <span className='font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
            Stats
          </span>
        </h2>
        <span className='text-sm text-teal-600 dark:text-teal-400'>
          Last updated: 2023-09-30
        </span>
      </div>
      <ul className='space-y-4'>
        {stats.map((stat, index) => (
          <li
            key={index}
            className='flex justify-between items-center bg-zinc-50 dark:bg-zinc-800/50 py-1 rounded-lg'>
            <span className='font-medium text-sm text-zinc-700 dark:text-zinc-300'>
              {stat.label}
            </span>
            <span className='font-medium text-base text-teal-600 dark:text-teal-400'>
              {stat.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
