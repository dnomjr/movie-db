import { SiThemoviedatabase } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="border-b-2 border-border">
      <Link to="/">
        <SiThemoviedatabase className="h-14 w-auto text-red-500 transition-all sm:h-20" />
      </Link>
    </div>
  );
};
export default Logo;
