import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className='dark:bg-secondary-dark grid min-h-screen grid-cols-layoutMobile grid-rows-layout bg-lightSoftBg transition duration-500 md:grid-cols-layout'>
      <Header />
      <Sidebar />
      <main className='dark:bg-primary-darker bg-primary-lighter text-text-light transition duration-500 dark:text-white'>
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
