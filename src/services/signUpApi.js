import api from './api';

export async function signUp(nickname, password, code) {
  const response = await api.post('/auth/sign-up', { nickname, password, code });
  return response.data;
}
