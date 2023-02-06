import styled from 'styled-components';

export const ResultSearch = styled.div`
  margin-left: 10vw;
  margin-top: -10px;
  width: 80vw;
  overflow-y: scroll;
  max-height: 220px;
  padding-top: 10px;
  background-color: #D9D9D9;
  z-index: 4;
  border-radius: 8px;
  display: ${(props) => (props.disabled ? 'none' : 'normal')}; 
`;
