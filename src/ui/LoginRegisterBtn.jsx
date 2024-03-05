import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LoginRegisterBtn = ({ children, name, path }) => {
  return (
    <Link to={path} className="linkClass">
      {children}
      <span className="text-[.70rem]">{name}</span>
    </Link>
  );
};
export default LoginRegisterBtn;
