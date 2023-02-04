import useAsync from '../useAsync';
import useToken from '../useToken';

import * as wantedItemApi from '../../services/wantedItemApi';

export default function usePostWantedItem() {
  const token = useToken();

  const {
    data: wantedItem,
    loading: wantedItemLoading,
    error: wantedItemError,
    act: postWantedItem,
  } = useAsync((data) => wantedItemApi.postWantedItem(data, token));

  return {
    wantedItem,
    wantedItemLoading,
    wantedItemError,
    postWantedItem,
  };
}
