import { useEffect, useState } from 'react';

const getInitialTheme = () => {
  const getSystemTheme = window.matchMedia(
    '(prefers-color-scheme:dark)',
  ).matches;
  const getStoredTheme = localStorage.getItem('darkTheme') === 'true';
  if (localStorage.getItem('darkTheme') === 'false') return false;

  return getStoredTheme || getSystemTheme;
};

const useThemeSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(() => getInitialTheme());
  const handleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    localStorage.setItem('darkTheme', newTheme);
  };

  useEffect(() => {
    if (darkTheme === true) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return { darkTheme, handleTheme };
};
export default useThemeSwitch;
