import { DebounceInput } from 'react-debounce-input';
import { WrapperSearch } from '../../styles/Dashboard/Item/WrapperSearch';
import { BsSearch } from 'react-icons/bs';
import { ResultSearch } from '../../styles/Dashboard/Item/ResultSearch';
import SearchResult from '../../components/Dashboard/Item/SearchResult';
import { useEffect, useState } from 'react';
import { getItem } from '../../services/getItemApi';
import useGetAvailableItens from '../../hooks/api/useAvailableItem';
import MapItens from '../../components/Dashboard/Item/MapItens';
import usePostAvailableItem from '../../hooks/api/useCreateAvailableItem';
import useDeleteAvailableItem from '../../hooks/api/useDeleteAvailableItem';

export default function Available() {
  const [search, setSearch] = useState('');
  const [itensSearch, setItensSearch] = useState([]);
  const [hiddenSearch, setHiddenSearch] = useState(true);
  const { postAvailableItem } = usePostAvailableItem();
  const { availableItem, getAvailableItens } = useGetAvailableItens();
  const [itens, setItens] = useState(availableItem ? availableItem : []);
  const { deleteAvailableItem } = useDeleteAvailableItem();

  useEffect(() => {
    getAvailableItens().then((res) => {
      setItens(res);
    }); 
    if (search.length < 3) {
      return setHiddenSearch(true);
    }      
    getItem(search)
      .then((res) => {
        setItensSearch(res);
        setHiddenSearch(false);
      })
      .catch(() => {
        setHiddenSearch(true);
      });
  }, [search, itens]);

  return (
    <>
      <WrapperSearch onClick={() => setHiddenSearch(false)}>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for pokemon"
          value={search}
          style={{
            backgroundColor: '#D9D9D9',
            color: '#000000',
            fontSize: '3vw',
          }}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <BsSearch
          style={{
            color: '#000000',
            cursor: 'pointer',
            backgroundColor: '#D9D9D9',
          }}
          size={20}
        />
      </WrapperSearch>
      <ResultSearch disabled={hiddenSearch}>
        {itensSearch
          ? itensSearch.map((value, index) => (
            <SearchResult
              key={index}
              image={value.image}
              name={value.name}
              itemId={value.id}
              setSearch={setSearch}
              postItem={postAvailableItem}
            />
          ))
          : ''}
      </ResultSearch>
      <MapItens itens={itens} deleteItem={deleteAvailableItem}/>
    </>
  );
}
