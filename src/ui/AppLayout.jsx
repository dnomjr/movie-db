import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className='bg-lightSoftBg grid min-h-screen grid-cols-layoutColsMobile grid-rows-layoutRows text-main   transition duration-500 sm:grid-cols-layoutCols dark:bg-softBlueBg'>
      <Header />
      <Sidebar />
      <main className='bg-lightSoftBg text-black transition duration-500 dark:bg-darkBlueBg dark:text-white'>
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
