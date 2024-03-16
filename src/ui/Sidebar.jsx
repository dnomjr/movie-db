import Logo from './Logo';
import Nav from './Nav';

const Sidebar = () => {
  return (
    <aside className='dark:border-border-dark bg-secondary-light dark:bg-secondary-dark col-start-1 col-end-2 row-start-1 row-end-3 flex flex-col items-center border-r-2 border-white py-8 transition duration-500'>
      <div className='bg-primary-lighter dark:bg-primary-darker rounded-md p-2 transition duration-500 dark:border-none sm:rounded-xl md:p-6'>
        <div className='dark:border-border-dark border-text-light border-b-2'>
          <Logo />
        </div>
        <Nav />
      </div>
    </aside>
  );
};
export default Sidebar;
