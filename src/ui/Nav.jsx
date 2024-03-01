import { NavLink } from 'react-router-dom';

import { LuLayoutDashboard } from 'react-icons/lu';
import { TbMovie } from 'react-icons/tb';
import { PiTelevisionBold } from 'react-icons/pi';
import { RiLoginCircleLine } from 'react-icons/ri';

const linkClass = 'transition-all hover:text-red-500';
const iconClass = 'm-auto h-8 w-auto';
const nameClass = 'text-[.70rem]';

const Nav = () => {
  return (
    <nav className="mt-6">
      <ul className="space-y-8 text-center">
        <li>
          <NavLink to="/" className={linkClass}>
            <LuLayoutDashboard className={iconClass} />
            <span className={nameClass}>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="movies" className={linkClass}>
            <TbMovie className={iconClass} />
            <span className={nameClass}>Movies</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="series" className={linkClass}>
            <PiTelevisionBold className={iconClass} />
            <span className={nameClass}>TV Series</span>
          </NavLink>
        </li>
        <li className="last:pt-10">
          <NavLink to="login" className={linkClass}>
            <RiLoginCircleLine className={iconClass} />
            <span className={nameClass}>Login</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
