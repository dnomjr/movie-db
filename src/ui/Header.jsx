import HeaderIcons from './HeaderIcons';
import Search from './Search';

const Header = () => {
  return (
    <header className='bg-secondary-light dark:bg-secondary-dark dark:border-border-dark col-start-2 col-end-3 flex flex-row justify-between gap-x-10 border-b-2 border-white p-6 sm:p-10 transition duration-500'>
      <Search />
      <HeaderIcons />
    </header>
  );
};
export default Header;
