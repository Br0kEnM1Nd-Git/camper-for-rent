import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
