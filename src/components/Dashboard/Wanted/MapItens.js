import ItemCard from './ItemCard';

export default function MapItens({ itens }) {
  return (
    <>{itens ? itens.map((item) => <ItemCard item={item} key={item.id} />) : 
      'Search and select the items you want!'}</>
  );
}
