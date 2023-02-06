import { ItemCardLayout } from '../../../styles/Dashboard/Item/ItemCardLayout';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';

export default function ItemCard({ item, deleteItem }) {
  function excludeItem(itemId) {
    if (window.confirm('Do you want delete this item?')) {
      try {        
        deleteItem(itemId);
        toast('Successfully deleted!');
      } catch {
        toast('An error occurred while deleting this item!');
      }
    }
  }
  return (
    <ItemCardLayout>
      <div>
        <img src={item.Pokemon.image} alt={item.Pokemon.name} />
        <h2>{item.Pokemon.name.toUpperCase()}</h2>
      </div>
      <AiFillCloseCircle
        style={{
          color: 'red',
          cursor: 'pointer',
        }}
        size={40}
        onClick={() => excludeItem(item.id)}
      />
    </ItemCardLayout>
  );
}
