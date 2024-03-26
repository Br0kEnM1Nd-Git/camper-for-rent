import {
  HeaderContainer,
  // LogoContainer,
  NavContainer,
  NavList,
  // NavigationContainer,
} from './Header.styled';
// import logo from '../../assets/img/logo.png';
import {
  NavLink,
  // useNavigate
} from 'react-router-dom';

const Header = () => {
  // const navigate = useNavigate();

  // const handleClickLogo = () => navigate('/');

  return (
    <HeaderContainer>
      {/* <NavigationContainer>
        <LogoContainer onClick={handleClickLogo}>
          <img src={logo} alt="Logo" />
        </LogoContainer> */}

      <NavContainer>
        <NavList>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/catalog'}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to={'/favorites'}>Favorites</NavLink>
          </li>
        </NavList>
      </NavContainer>
      {/* </NavigationContainer> */}
    </HeaderContainer>
  );
};

export default Header;
