/* eslint-disable react/prop-types */
import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <Link to='/'>
        <SiThemoviedatabase
          className={` h-16 w-auto text-logoColor transition duration-500 sm:h-20 `}
        />
      </Link>
    </>
  );
};
export default Logo;
