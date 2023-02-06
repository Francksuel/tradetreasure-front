import useAsync from '../useAsync';
import useToken from '../useToken';

import * as availableItemApi from '../../services/availableItemApi';

export default function usePostAvailableItem() {
  const token = useToken();

  const {
    data: availableItem,
    loading: availableItemLoading,
    error: availableItemError,
    act: postAvailableItem,
  } = useAsync((data) => availableItemApi.postAvailableItem(data, token));

  return {
    availableItem,
    availableItemLoading,
    availableItemError,
    postAvailableItem,
  };
}
