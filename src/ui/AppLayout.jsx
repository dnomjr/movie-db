import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const AppLayout = () => {
  return (
    <div className="grid  grid-cols-layoutCols grid-rows-layoutRows bg-softBlueBg text-main">
      <Header />
      <Sidebar />
      <main className="bg-darkBlueBg">
        <Outlet />
      </main>
    </div>
  );
};
export default AppLayout;
