import { DebounceInput } from 'react-debounce-input';
import { WrapperSearch } from '../../styles/Dashboard/Item/WrapperSearch';
import { BsSearch } from 'react-icons/bs';
import { ResultSearch } from '../../styles/Dashboard/Item/ResultSearch';
import SearchResult from '../../components/Dashboard/Item/SearchResult';
import { useEffect, useState } from 'react';
import { getItem } from '../../services/getItemApi';
import useGetWantedItens from '../../hooks/api/useWantedItem';
import MapItens from '../../components/Dashboard/Item/MapItens';
import usePostWantedItem from '../../hooks/api/useCreateWantedItem';
import useDeleteWantedItem from '../../hooks/api/useDeleteWantedItem';

export default function Wanted() {
  const [search, setSearch] = useState('');
  const [itensSearch, setItensSearch] = useState([]);
  const [hiddenSearch, setHiddenSearch] = useState(true);
  const { postWantedItem } = usePostWantedItem();
  const { deleteWantedItem } = useDeleteWantedItem();
  const { wantedItem, getWantedItens } = useGetWantedItens();
  const [itens, setItens] = useState(wantedItem ? wantedItem : []);

  useEffect(() => {
    getWantedItens().then((res) => {
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
              postItem={postWantedItem}
            />
          ))
          : ''}
      </ResultSearch>
      <MapItens itens={itens} deleteItem={deleteWantedItem} />
    </>
  );
}
