import styled from 'styled-components';

export const Button = styled.button`
  font-family: "Oswald", sans-serif;
  height: 65px;
  width: 100%;
  background-color: #852B2B;
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 27px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:disabled {
    opacity: 0.7;
  }
`;
