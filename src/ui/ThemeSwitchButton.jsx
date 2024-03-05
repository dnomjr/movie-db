import { IoMoonOutline } from 'react-icons/io5';
import { GoSun } from 'react-icons/go';
import { useState } from 'react';

const ThemeSwitchButton = () => {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div>
      {lightTheme ? (
        <label
          className="linkClass cursor-pointer"
          onClick={() => setLightTheme(!lightTheme)}
        >
          <GoSun className="h-6 w-auto" />
          <span className="text-[.70rem]">Light</span>
        </label>
      ) : (
        <label
          className="linkClass cursor-pointer"
          onClick={() => setLightTheme(!lightTheme)}
        >
          <IoMoonOutline className=" h-6 w-auto " />
          <span className="text-[.70rem]">Dark</span>
        </label>
      )}
    </div>
  );
};
export default ThemeSwitchButton;
