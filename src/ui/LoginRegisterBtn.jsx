import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const LoginRegisterBtn = ({ children, name, path, textSize, classes }) => {
  return (
    <Link to={path} className={`link ${classes}`}>
      {children}
      <span className={textSize || 'text-xs'}>{name}</span>
    </Link>
  );
};
export default LoginRegisterBtn;
