import api from './api';

export async function postAvailableItem(itemId, token) {
  const response = await api.post('/available', itemId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getAvailableItens(token) {
  const response = await api.get('/available', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteAvailableItem(itemId, token) {
  const response = await api.delete(`/available/${itemId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
