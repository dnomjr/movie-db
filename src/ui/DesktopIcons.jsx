import ThemeSwitchButton from './ThemeSwitchButton';
import LoginRegisterBtn from './LoginRegisterBtn';
import { CiLogin, CiSquarePlus } from 'react-icons/ci';

const DesktopIcons = () => {
  return (
    <div className='text-text-light hidden flex-row  items-center space-x-6 dark:text-white md:flex'>
      <ThemeSwitchButton classes='hover:text-logo' />
      <LoginRegisterBtn name='Login' path='login' classes='hover:text-logo'>
        <CiLogin className='dark:hover:text-logo m-auto block h-6 w-auto lg:cursor-pointer' />
      </LoginRegisterBtn>
      <LoginRegisterBtn
        name='Register'
        path='register'
        classes='hover:text-logo'
      >
        <CiSquarePlus className='m-auto block h-6 w-auto lg:cursor-pointer' />
      </LoginRegisterBtn>
    </div>
  );
};
export default DesktopIcons;
