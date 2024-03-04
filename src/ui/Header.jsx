import Search from './Search';
import ThemeSwitchButton from './ThemeSwitchButton';
import LoginButton from './LoginButton';

const Header = () => {
  return (
    <header className="col-start-2 col-end-3 flex flex-row justify-between border-b-2 border-border p-10 ">
      <Search />
      <div className="ml-10 flex flex-row">
        <ThemeSwitchButton />
        <LoginButton />
      </div>
    </header>
  );
};
export default Header;
