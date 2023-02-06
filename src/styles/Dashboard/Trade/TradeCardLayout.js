import styled from 'styled-components';

export const TradeCardLayout = styled.div`
  margin: 20px 10px;
  width: 90vw;
  height: 9vw;
  background-color: #d9d9d9;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  div{
    display: flex;
    align-items: center;
 }
 span{
  display: flex;
  flex-direction: column;
 }
  img {
    width: 9vw;
    height: 9vw;
  }
  h2 {
    font-size: 2.5vw;
    color: #642121;
    font-weight: 700;
  }  
  h3{
    font-size: 2vw;
    color: #523737;    
  }
`;
