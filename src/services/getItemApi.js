import api from './api';

export async function getItem(name) {
  const response = await api.get(`/item?name=${name}`);
  return response.data;
}
