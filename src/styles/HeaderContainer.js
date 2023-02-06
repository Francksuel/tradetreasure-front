import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: relative;
  padding: 30px;
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  img {
    width: 80px;
    height: 80px;
  }
  div{
    position: absolute;      
    top:30px;
    right: 30px;
    cursor: pointer; 
  }
`;
