import api from './api';

export async function signIn(nickname, password) {
  const response = await api.post('/auth/sign-in', { nickname, password });
  return response.data;
}
//
