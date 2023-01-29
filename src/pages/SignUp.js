import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';

import AuthLayout from '../layouts/Auth';

import { Input } from '../components/Form/Input';
import { Button } from '../components/Form/Button';
import { Row, Label } from '../components/Auth';

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
            Inscrever
          </Button>
        </form>
      </Row>
      <Row>
        <Link to="/sign-in">Já está inscrito? Faça login</Link>
      </Row>
    </AuthLayout>
  );
}
