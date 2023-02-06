import useAsync from '../useAsync';
import useToken from '../useToken';

import * as tradesApi from '../../services/tradesApi';

export default function useTrades() {
  const token = useToken();

  const {
    data: trades,
    loading: tradesLoading,
    error: tradesError,
    act: getTrades,
  } = useAsync(() => tradesApi.getTrades(token));

  return {
    trades,
    tradesLoading,
    tradesError,
    getTrades,
  };
}
