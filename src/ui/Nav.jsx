import { NavLink } from 'react-router-dom';

import { LuLayoutDashboard } from 'react-icons/lu';
import { TbMovie } from 'react-icons/tb';
import { PiTelevisionBold } from 'react-icons/pi';
import { CgLogIn } from 'react-icons/cg';
import { LuPlusSquare } from 'react-icons/lu';

const Nav = () => {
  return (
    <nav className='mt-6'>
      <ul className='space-y-8 text-center'>
        <li>
          <NavLink to='/' className='linkClass group'>
            <LuLayoutDashboard className='iconClass ' />
            <span className='nameClass'>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='movies' className='linkClass group'>
            <TbMovie className='iconClass' />
            <span className='nameClass'>Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='series' className='linkClass group'>
            <PiTelevisionBold className='iconClass' />
            <span className='nameClass'>TV Series</span>
          </NavLink>
        </li>
        <li className='pt-6 sm:pt-10'>
          <NavLink to='login' className='linkClass group'>
            <CgLogIn className='iconClass' />
            <span className='nameClass'>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='register' className='linkClass group'>
            <LuPlusSquare className='iconClass' />
            <span className='nameClass'>Join TMDB</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
