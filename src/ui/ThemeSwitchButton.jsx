/* eslint-disable react/prop-types */
import { PiMoonLight } from 'react-icons/pi';
import { PiSunLight } from 'react-icons/pi';
import { useState } from 'react';

const ThemeSwitchButton = ({ iconSize, textSize, flex, width }) => {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className={`${width || 'w-8'}`}>
      {lightTheme ? (
        <label
          className={`linkClass cursor-pointer ${flex} `}
          onClick={() => setLightTheme(!lightTheme)}
        >
          <PiSunLight className={`${iconSize || 'h-6'}  w-auto `} />
          <span className={textSize || 'text-[.70rem]'}>Light</span>
        </label>
      ) : (
        <label
          className={`linkClass cursor-pointer ${flex} `}
          onClick={() => setLightTheme(!lightTheme)}
        >
          <PiMoonLight className={`${iconSize || 'h-6'}  w-auto`} />
          <span className={textSize || 'text-[.70rem]'}>Dark</span>
        </label>
      )}
    </div>
  );
};
export default ThemeSwitchButton;
