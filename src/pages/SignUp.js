import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import AuthLayout from '../styles/Auth/Auth';
import logo from '../assets/LogoTradeTreasure.png';

import { Input } from '../styles/Form/Input';
import { Button } from '../styles/Form/Button';
import { Row } from '../styles/Auth';

import useSignUp from '../hooks/api/useSignUp';

export default function SignUp() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { loadingSignUp, signUp } = useSignUp();

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(nickname, password, code);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
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
          <Input placeholder="Code" type="text" fullWidth value={code} onChange={(e) => setCode(e.target.value)} />
          <Input
            placeholder="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="Repeat your password"
            type="password"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignUp}>
            Cadaster
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">
          <h3>Do you already have an account? Log in!</h3>
        </Link>
      </Row>
    </AuthLayout>
  );
}
