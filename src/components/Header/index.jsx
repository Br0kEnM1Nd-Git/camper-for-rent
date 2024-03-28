import { HeaderContainer, NavContainer, NavList } from './Header.styled';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};

export default Header;
