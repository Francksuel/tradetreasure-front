import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/LogoTradeTreasure.png';
import AuthLayout from '../styles/Auth/Auth';

import { Input } from '../styles/Form/Input';
import { Button } from '../styles/Form/Button';
import { Row } from '../styles/Auth';

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
      toast('Login successfully!');
      navigate('/dashboard');
    } catch (error) {
      toast('Unable to login!');
    }
  }

  return (
    <AuthLayout>
      <img src={logo} alt="logo" />
      <Row>
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
        <Link to="/">
          <h3>Don't have a registration? Create an account!</h3>
        </Link>
      </Row>
    </AuthLayout>
  );
}
