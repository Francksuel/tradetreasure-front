import { HeaderContainer } from '../../styles/HeaderContainer';
import { BiLogOut } from 'react-icons/bi';
import logo from '../../assets/LogoTradeTreasure.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  function logout() {
    if (window.confirm('Do you want to leave your account?')) {
      window.localStorage.removeItem('tradeTreasure');     
      navigate('/sign-in');
    }
  }
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <div>
        <BiLogOut
          style={{
            color: '#ffffff',                      
          }}
          size={40}
          onClick={() => logout()}
        />
      </div>
    </HeaderContainer>
  );
}
