import Logo from './Logo';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <aside className="col-start-1 col-end-2 row-start-1 pt-8 row-end-3 flex flex-col items-center border-r-2 border-border">
      <div className='bg-darkBlueBg p-8 rounded-xl'>
        <Logo />
        <Nav />
      </div>
    </aside>
  );
};
export default Sidebar;
