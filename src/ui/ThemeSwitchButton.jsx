/* eslint-disable react/prop-types */
import { PiMoonLight } from 'react-icons/pi';
import { PiSunLight } from 'react-icons/pi';
import useThemeSwitch from '../hooks/useThemeSwitch';

const ThemeSwitchButton = ({ iconSize, textSize, classes, width }) => {
  const { darkTheme, handleTheme } = useThemeSwitch();
  return (
    <div className={`${width || 'w-8'}`}>
      <button
        className={`link cursor-pointer ${classes}`}
        onClick={handleTheme}
      >
        {darkTheme ? (
          <PiSunLight className={`${iconSize || 'h-6'} w-auto`} />
        ) : (
          <PiMoonLight className={`${iconSize || 'h-6'} w-auto `} />
        )}
        <span className={textSize || 'text-xs'}>
          {darkTheme ? 'Light' : 'Dark'}
        </span>
      </button>
    </div>
  );
};
export default ThemeSwitchButton;
