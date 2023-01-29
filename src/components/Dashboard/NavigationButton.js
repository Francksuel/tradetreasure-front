import styled from 'styled-components';

export default function NavigationButton({ active, children }) {
  return (
    <Button active={active}>
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 25vw;
  height: 100px;
  border: 1px solid black; 
  border-radius: 0px 0px 5px 5px;
  background-color: #4277FF;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center; 
  ${props => props.active ? 'background-color: #B6F6F3;' : ''}

  &:hover {
    background-color: #B6F6F3;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 28px;
    color: #000000;
  }

  @media (max-width: 600px) {
    height: 80px;
  }
`;
