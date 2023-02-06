import useAsync from '../useAsync';
import useToken from '../useToken';

import * as wantedItemApi from '../../services/wantedItemApi';

export default function useDeleteWantedItem() {
  const token = useToken();

  const {
    data: wantedItem,
    loading: wantedItemLoading,
    error: wantedItemError,
    act: deleteWantedItem,
  } = useAsync((data) => wantedItemApi.deleteWantedItem(data, token));

  return {
    wantedItem,
    wantedItemLoading,
    wantedItemError,
    deleteWantedItem,
  };
}
