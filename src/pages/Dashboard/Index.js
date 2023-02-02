import { Outlet } from 'react-router-dom';
import NavigationBar from '../../components/Dashboard/NavigationBar';
import { Container } from '../../styles/Dashboard/Container';

export default function Dashboard() {
  return (
    <>
      <NavigationBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
