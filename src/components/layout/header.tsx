import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import SmallScreenNavbar from './small-screen-navbar';

export const menu = [
  // {
  //   label: 'Home',
  //   to: '/',
  // },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Notes',
    to: '/notes',
  },
  {
    label: 'Coffee with me',
    to: '/contact',
  },
];

export type Menu = typeof menu;

const Header = async () => {
  return (
    <header className='pt-6'>
      <BigScreenNavbar menu={menu} />
      <SmallScreenNavbar menu={menu} />
    </header>
  );
};

export default Header;
