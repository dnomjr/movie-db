import { NavLink } from 'react-router-dom';

import { LuLayoutDashboard } from 'react-icons/lu';
import { TbMovie } from 'react-icons/tb';
import { PiTelevisionBold } from 'react-icons/pi';
import { CgLogIn } from 'react-icons/cg';
import { LuPlusSquare } from 'react-icons/lu';

const isActive = ({ isActive }) =>
  isActive
    ? 'link text-logo dark:text-logo group'
    : 'link text-icons-light group';

const Nav = () => {
  return (
    <nav className='mt-8'>
      <ul className='space-y-7 text-center'>
        <li>
          <NavLink to='/' className={isActive}>
            <LuLayoutDashboard className='icon' />
            <span className='name'>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='movies' className={isActive}>
            <TbMovie className='icon' />
            <span className='name'>Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='series' className={isActive}>
            <PiTelevisionBold className='icon' />
            <span className='name'>TV Series</span>
          </NavLink>
        </li>
        <li className='pt-6 sm:pt-10'>
          <NavLink to='login' className={isActive}>
            <CgLogIn className='icon' />
            <span className='name'>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='register' className={isActive}>
            <LuPlusSquare className='icon' />
            <span className='name'>Join TMDB</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
