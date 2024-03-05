import Search from './Search';
import ThemeSwitchButton from './ThemeSwitchButton';
import LoginRegisterBtn from './LoginRegisterBtn';
import { CiLogin } from 'react-icons/ci';
import { CiSquarePlus } from 'react-icons/ci';
const Header = () => {
  return (
    <header className="col-start-2 col-end-3 flex flex-row justify-between border-b-2 border-border p-10 ">
      <Search />
      <div className="ml-28 flex flex-row items-center space-x-6">
        <ThemeSwitchButton />
        <LoginRegisterBtn name="Login" path="login">
          <CiLogin className="m-auto block h-6 w-auto cursor-pointer" />
        </LoginRegisterBtn>
        <LoginRegisterBtn name="Register" path="register">
          <CiSquarePlus className="m-auto block h-6 w-auto cursor-pointer" />
        </LoginRegisterBtn>
      </div>
    </header>
  );
};
export default Header;
