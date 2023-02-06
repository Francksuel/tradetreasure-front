import { Outlet } from 'react-router-dom';
import Header from '../../components/Dashboard/Header';
import NavigationBar from '../../components/Dashboard/NavigationBar';
import { Container } from '../../styles/Dashboard/Container';

export default function Dashboard() {
  return (
    <>
      <Header />
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
