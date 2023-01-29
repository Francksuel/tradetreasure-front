import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import AuthLayout from '../layouts/Auth';

import { Input } from '../components/Form/Input';
import { Button } from '../components/Form/Button';
import { Row, Label } from '../components/Auth';

import useSignIn from '../hooks/api/useSignIn';
import UserContext from '../contexts/UserContext';

export default function SignIn() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();
    try {
      const userData = await signIn(nickname, password);
      setUserData(userData);
      toast('Login com sucesso!');
      navigate('/dashboard');
    } catch (error) {
      toast('Não foi possível fazer o login!');
    }
  }

  return (
    <AuthLayout>
      <Row>
        <Label>Inscrição</Label>
        <form onSubmit={submit}>
          <Input
            placeholder="Nickname"
            type="text"
            fullWidth
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Log in
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/">Don't have a registration? Create an account! </Link>
      </Row>
    </AuthLayout>
  );
}
