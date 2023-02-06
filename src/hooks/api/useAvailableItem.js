import useAsync from '../useAsync';
import useToken from '../useToken';

import * as availableItemApi from '../../services/availableItemApi';

export default function useGetAvailableItens() {
  const token = useToken();

  const {
    data: availableItem,
    loading: availableItemLoading,
    error: availableItemError,
    act: getAvailableItens,
  } = useAsync(() => availableItemApi.getAvailableItens(token));

  return {
    availableItem,
    availableItemLoading,
    availableItemError,
    getAvailableItens,
  };
}
