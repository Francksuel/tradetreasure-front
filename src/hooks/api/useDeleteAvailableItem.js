import useAsync from '../useAsync';
import useToken from '../useToken';

import * as availableItemApi from '../../services/availableItemApi';

export default function useDeleteAvailableItem() {
  const token = useToken();

  const {
    data: availableItem,
    loading: availableItemLoading,
    error: availableItemError,
    act: deleteAvailableItem,
  } = useAsync((data) => availableItemApi.deleteAvailableItem(data, token));

  return {
    availableItem,
    availableItemLoading,
    availableItemError,
    deleteAvailableItem,
  };
}
