import { Link, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import NavigationButton from './NavigationButton';

export default function NavigationBar() {
  const location = useLocation();

  function isActive(buttonPath) {
    return location.pathname === buttonPath;
  }

  return (
    <Container>
      <Link to="/dashboard/available">
        <NavigationButton active={isActive('/dashboard/available')}>
          <span>Available Pokémons</span>
        </NavigationButton>
      </Link>
      <Link to="/dashboard/wanted">
        <NavigationButton active={isActive('/dashboard/wanted')}>
          <span>Wanted Pokémons</span>
        </NavigationButton>
      </Link>
      <Link to="/dashboard/trades">
        <NavigationButton active={isActive('/dashboard/trades')}>
          <span>Available Trades</span>
        </NavigationButton>
      </Link>
      <Link to="/dashboard/requests">
        <NavigationButton active={isActive('/dashboard/requests')}>
          <span>Requests and Realized Trades</span>
        </NavigationButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  justify-content: flex-start;

  > a {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`;
