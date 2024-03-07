import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className="grid-cols-layoutColsMobile grid min-h-screen grid-rows-layoutRows bg-softBlueBg text-main sm:grid-cols-layoutCols">
      <Header />
      <Sidebar />
      <main className="bg-darkBlueBg">
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
