import ThemeSwitchButton from './ThemeSwitchButton';
import LoginRegisterBtn from './LoginRegisterBtn';
import { CiLogin, CiSquarePlus } from 'react-icons/ci';

const DesktopIcons = () => {
  return (
    <div className="hidden flex-row items-center space-x-6 md:flex">
      <ThemeSwitchButton />
      <LoginRegisterBtn name="Login" path="login">
        <CiLogin className="m-auto block h-6 w-auto md:cursor-pointer" />
      </LoginRegisterBtn>
      <LoginRegisterBtn name="Register" path="register">
        <CiSquarePlus className="m-auto block h-6 w-auto md:cursor-pointer" />
      </LoginRegisterBtn>
    </div>
  );
};
export default DesktopIcons;
