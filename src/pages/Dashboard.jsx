import { useEffect } from 'react';
import { authFetch } from '../utils/authFetch';

const topRatedMovieUrl = '/movie/top_rated';
const popularMovieUrl = '/movie/popular';

const Dashboard = () => {
  const fetchData = async () => {
    const data = await authFetch(topRatedMovieUrl);
    const data2 = await authFetch(popularMovieUrl);

    console.log(data, data2);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>Dashboard</div>;
};
export default Dashboard;
