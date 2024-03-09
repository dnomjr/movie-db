import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const LoginRegisterBtn = ({ children, name, path, textSize, flex}) => {
  return (
    <Link to={path} className={`linkClass ${flex}`}>
      {children}
      <span className={textSize || 'text-[.70rem]'}>{name}</span>
    </Link>
  );
};
export default LoginRegisterBtn;
