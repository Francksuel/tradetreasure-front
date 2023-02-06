import { ItensContainer } from '../../../styles/Dashboard/Item/ItensContainer';
import ItemCard from './ItemCard';

export default function MapItens({ itens, deleteItem }) {
  return (
    <ItensContainer>
      {itens ? itens.map((item) => <ItemCard item={item} deleteItem={deleteItem} key={item.id} />) : 'Search and select the items you want!'}
    </ItensContainer>
  );
}
