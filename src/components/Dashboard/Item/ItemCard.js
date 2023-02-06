import { ItemCardLayout } from '../../../styles/Dashboard/Item/ItemCardLayout';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function ItemCard({ item }) {  
  return (
    <ItemCardLayout>
      <div>
        <img src={item.Pokemon.image} alt={item.Pokemon.name} />
        <h2>{item.Pokemon.name}</h2>
      </div>
      <AiFillCloseCircle
        style={{
          color: 'red',
          cursor: 'pointer',
        }}
        size={40}
        onClick={() => alert('oi')}
      />
    </ItemCardLayout>
  );
}
