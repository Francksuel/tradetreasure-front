import { DebounceInput } from 'react-debounce-input';
import { WrapperSearch } from '../../styles/Dashboard/Wanted/WrapperSearch';
import { BsSearch } from 'react-icons/bs';
import { ResultSearch } from '../../styles/Dashboard/Wanted/ResultSearch';
import SearchResult from '../../components/Dashboard/Wanted/SearchResult';
import { useEffect, useState } from 'react';
import { getItem } from '../../services/getItemApi';

export default function Wanted() {
  const [search, setSearch] = useState('');
  const [itensSearch, setItensSearch] = useState([]);
  const [hiddenSearch, setHiddenSearch] = useState(true);

  useEffect(() => {
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
  }, [search]);

  return (
    <>
      <WrapperSearch onClick={() => setHiddenSearch(false)}>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          placeholder="Search for pokemon"
          
          value={search}
          style={{  
            placeholderTextColor: 'red',
            backgroundColor: '#D9D9D9',
            color: '#000000',            
            fontSize: '3vw'           
          }
          }
          
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
              setHiddenSearch={setHiddenSearch}
              image={value.image}
              name={value.name}
              itemId={value.id}
            />
          ))
          : ''}
      </ResultSearch>
    </>
  );
}
