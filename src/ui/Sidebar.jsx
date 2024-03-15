import Logo from './Logo';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <aside className='col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col items-center border-r-2 dark:border-border border-white bg-lighterSoftBg py-8 transition duration-500 dark:bg-softBlueBg'>
      <div className='bg-lightSoftBg rounded-xl  p-4 transition duration-500 sm:p-8 dark:border-none dark:bg-darkBlueBg'>
        <div className='border-b-2 border-border'>
          <Logo />
        </div>
        <Nav />
      </div>
    </aside>
  );
};
export default Sidebar;
