/* eslint-disable react/prop-types */
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <Link to='/'>
        <SiThemoviedatabase className='text-logo h-16 w-auto transition duration-500 md:h-24' />
      </Link>
    </>
  );
};
export default Logo;
