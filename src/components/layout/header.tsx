import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import { fetchMenuData } from '@/lib/wordpress/menu';
import SmallScreenNavbar from './small-screen-navbar';

const Header = async () => {
  const menus = await fetchMenuData();
  return (
    <header className='pt-6'>
      <BigScreenNavbar menus={menus} />
      <SmallScreenNavbar menus={menus} />
    </header>
  );
};

export default Header;
