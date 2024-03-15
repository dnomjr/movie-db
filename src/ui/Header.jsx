import HeaderIcons from './HeaderIcons';
import Search from './Search';

const Header = () => {
  return (
    <header className='col-start-2 col-end-3 flex flex-row justify-between gap-x-10 border-b-2 dark:border-border border-white bg-lighterSoftBg p-10 transition duration-500 dark:bg-softBlueBg'>
      <Search />
      <HeaderIcons />
    </header>
  );
};
export default Header;
