import AppBar from 'components/AppBar/AppBar.jsx';
import AppBarAuth from 'components/AppBarAuth/AppBarAuth.jsx';
import Logo from 'components/Logo/Logo.jsx';
import { HeaderWrapper, Wrapper } from './Header.styled.js';

const Header = () => {
  return (
    <HeaderWrapper>
      <Wrapper>
        <Logo backgroundColor={'#000'} />
        <AppBar />
        <AppBarAuth />
      </Wrapper>
    </HeaderWrapper>
  );
};

export default Header;
