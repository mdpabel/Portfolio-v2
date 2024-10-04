import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  Dropdownmenueparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import ThemeSwitcher from '../common/theme-switcher';
import Logo from './logo';
import { Menu } from './header';

const SmallScreenNavbar = ({ menu }: { menu: Menu }) => {
  return (
    <div className='block md:hidden w-full container'>
      <div className='flex justify-between'>
        <Logo />
        <div className='flex items-center space-x-5'>
          <ThemeSwitcher className='shadow-lg shadow-zinc-800/9 rounded-full w-9 h-9' />
          <DropdownMenu>
            <DropdownMenuTrigger aria-label='Open menu'>
              <div className='flex justify-center items-center bg-white/90 dark:bg-zinc-800/90 shadow-lg shadow-zinc-800/9 backdrop-blur rounded-full w-9 h-9'>
                <FaBars className='w-5 h-5' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mt-5 px-8 lg:px-12 w-screen'>
              {menu?.map((menu, index) => (
                <div key={index}>
                  <Link
                    href={menu.to}
                    className='block w-full font-medium text-sm text-zinc-800 hover:text-teal-500 dark:text-zinc-100 transition cursor-pointer'>
                    <DropdownMenuItem>{menu.label}</DropdownMenuItem>
                  </Link>
                  <Dropdownmenueparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default SmallScreenNavbar;
