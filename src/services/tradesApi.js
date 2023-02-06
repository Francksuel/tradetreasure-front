import api from './api';

export async function getTrades(token) {
  const response = await api.get('/trade', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
