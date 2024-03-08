import Search from './Search';
import ThemeSwitchButton from './ThemeSwitchButton';
import LoginRegisterBtn from './LoginRegisterBtn';
import { CiLogin } from 'react-icons/ci';
import { CiSquarePlus } from 'react-icons/ci';
import { RiMenuFill } from 'react-icons/ri';
const Header = () => {
  return (
    <header className="col-start-2 col-end-3 flex flex-row justify-between gap-x-10 border-b-2 border-border bg-softBlueBg p-10  ">
      <Search />
      <RiMenuFill className="m-auto block h-8 w-auto md:hidden" />
      <div className="hidden flex-row items-center space-x-6 md:flex">
        <ThemeSwitchButton />
        <LoginRegisterBtn name="Login" path="login">
          <CiLogin className="m-auto block h-6 w-auto md:cursor-pointer" />
        </LoginRegisterBtn>
        <LoginRegisterBtn name="Register" path="register">
          <CiSquarePlus className="m-auto block h-6 w-auto md:cursor-pointer" />
        </LoginRegisterBtn>
      </div>
    </header>
  );
};
export default Header;
