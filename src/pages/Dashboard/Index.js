import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/Dashboard/NavigationBar';

export default function Dashboard() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
