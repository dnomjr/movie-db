/* eslint-disable react/prop-types */
import { PiMoonLight } from 'react-icons/pi';
import { PiSunLight } from 'react-icons/pi';
import useThemeSwitch from '../hooks/useThemeSwitch';

const ThemeSwitchButton = ({ iconSize, textSize, flex, width }) => {
  const { darkTheme, handleTheme } = useThemeSwitch();
  return (
    <div className={`${width || 'w-8'}`}>
      <button
        className={`linkClass cursor-pointer ${flex} `}
        onClick={handleTheme}
      >
        {darkTheme ? (
          <PiSunLight className={`${iconSize || 'h-6'}  w-auto`} />
        ) : (
          <PiMoonLight className={`${iconSize || 'h-6'}  w-auto `} />
        )}
        <span className={textSize || 'text-[.70rem]'}>
          {darkTheme ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
};
export default ThemeSwitchButton;
