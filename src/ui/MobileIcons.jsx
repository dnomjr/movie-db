import ThemeSwitchButton from './ThemeSwitchButton';
import LoginRegisterBtn from './LoginRegisterBtn';
import { CiLogin, CiSquarePlus } from 'react-icons/ci';
import { RiMenuFill } from 'react-icons/ri';
import { FaXmark } from 'react-icons/fa6';
import { useState } from 'react';

const MobileIcons = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <RiMenuFill
        className='text-text-light m-auto block h-8 w-auto dark:text-white md:hidden'
        onClick={() => setShowMenu(!showMenu)}
      />

      <div
        className={`fixed right-0 top-0 h-screen w-full backdrop-blur-md transition duration-500 ${!showMenu ? 'translate-x-full ' : 'translate-x-0'}`}
      >
        <div
          className={`bg-secondary-light text-text-light dark:bg-secondary-dark fixed right-0 top-0 ml-auto h-full w-60 transition duration-500 dark:text-white`}
        >
          <FaXmark
            className=' ml-auto mr-11 mt-11 h-6 w-auto '
            onClick={() => setShowMenu(!showMenu)}
          />
          <div className='ml-10 mt-10 flex flex-col space-y-8'>
            <ThemeSwitchButton
              iconSize='h-10'
              textSize='text-base'
              classes='flex flex-row items-center space-x-6'
              width='w-28'
            />

            <LoginRegisterBtn
              name='Login'
              path='login'
              textSize='text-base'
              classes='flex flex-row items-center space-x-6'
            >
              <CiLogin className='h-10 w-auto lg:cursor-pointer' />
            </LoginRegisterBtn>

            <LoginRegisterBtn
              name='Register'
              path='register'
              textSize='text-base'
              classes='flex flex-row items-center space-x-6'
            >
              <CiSquarePlus className=' h-10 w-auto lg:cursor-pointer' />
            </LoginRegisterBtn>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileIcons;
