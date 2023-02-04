import { toast } from 'react-toastify';
import styled from 'styled-components';
import usePostWantedItem from '../../../hooks/api/useCreateWantedItem';

export default function SearchResult({ image, name, itemId, setHiddenSearch }) {
  const { postWantedItem } = usePostWantedItem();

  function sendWantedItem(itemId) {
    try {
      postWantedItem({ pokemonId: itemId });
      setHiddenSearch(true);
      toast('Successfully selected!');
    } catch {
      toast('An error occurred while selecting this item!');
    }
  }

  return (
    <Container onClick={() => sendWantedItem(itemId)}>
      <img src={image} alt="img" />
      <h4>{name}</h4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 39px;
  margin: 13px 0px 16px 0px;
  padding-left: 17px;
  cursor: pointer;

  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-right: 20px;
  }

  h4 {
    color: #515151;
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
  }
  @media (max-width: 770px) {
    h4 {
      font-size: 3.5vw;
      line-height: 4vw;
    }
    img {
      height: 6vw;
      width: 6vw;
      border-radius: 50%;
      margin-right: 3vw;
    }
  }
`;
