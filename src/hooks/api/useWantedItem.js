import useAsync from '../useAsync';
import useToken from '../useToken';

import * as wantedItemApi from '../../services/wantedItemApi';

export default function useGetWantedItens() {
  const token = useToken();

  const {
    data: wantedItem,
    loading: wantedItemLoading,
    error: wantedItemError,
    act: getWantedItens,
  } = useAsync(() => wantedItemApi.getWantedItens(token));

  return {
    wantedItem,
    wantedItemLoading,
    wantedItemError,
    getWantedItens,
  };
}
