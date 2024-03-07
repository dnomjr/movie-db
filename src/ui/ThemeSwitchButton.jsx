import { PiMoonLight } from 'react-icons/pi';
import { PiSunLight } from 'react-icons/pi';
import { useState } from 'react';

const ThemeSwitchButton = () => {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className="w-8">
      {lightTheme ? (
        <label
          className="linkClass cursor-pointer"
          onClick={() => setLightTheme(!lightTheme)}
        >
          <PiSunLight className="h-6 w-auto" />
          <span className="text-[.70rem]">Light</span>
        </label>
      ) : (
        <label
          className="linkClass cursor-pointer"
          onClick={() => setLightTheme(!lightTheme)}
        >
          <PiMoonLight className=" h-6 w-auto " />
          <span className="text-[.70rem]">Dark</span>
        </label>
      )}
    </div>
  );
};
export default ThemeSwitchButton;
