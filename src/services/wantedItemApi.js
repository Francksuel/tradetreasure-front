import api from './api';

export async function postWantedItem(itemId, token) {
  const response = await api.post('/wanted', itemId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getWantedItens(token) {
  const response = await api.get('/wanted', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
