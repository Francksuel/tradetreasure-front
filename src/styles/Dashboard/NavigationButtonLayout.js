import styled from 'styled-components';

export const NavigationButtonStyle = styled.button`
  width: 25vw;
  height: 12vw;
  border: 1px solid black;
  border-radius: 0px 0px 5px 5px;
  background-color: #B0B7B6;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? 'background-color: #ECF0F9;' : '')}

  &:hover {
    background-color: #ECF0F9;
  }

  & > *:not(:last-child) {
    margin-bottom: 4px;
  }

  & > *:first-child {
    font-size: 3.5vw;
    color: #000000;
    font-weight: 700;
  }

  @media (min-width: 770px) {
    height: 120px;
    & > *:first-child {
      font-size: 30px;
    }
  }
`;
