import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
