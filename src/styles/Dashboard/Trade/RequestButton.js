import styled from 'styled-components';

export const RequestButton = styled.button`
  height: 50px;
  width: 150px;
  background-color: ${props => props.color || 'red'};
  border-radius: 6px;
  outline: none;
  border: none;
  font-size: 27px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:disabled {
    opacity: 0.7;
  }
`;
