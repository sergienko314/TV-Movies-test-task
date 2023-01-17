import { ItemNav, LinkItemNav, ListNav, NavStyled } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: null },
  { href: '/tv', text: 'TV Shows', icon: null },
  { href: '/movies', text: 'Movies', icon: null },
  { href: '/series', text: 'Series', icon: null },
];

const AppBar = () => {
  return (
    <>
      <NavStyled>
        <ListNav>
          {navItems.map(({ href, text }) => (
            <ItemNav key={href}>
              <LinkItemNav to={href} title={text}>
                {text}
              </LinkItemNav>
            </ItemNav>
          ))}
        </ListNav>
      </NavStyled>
    </>
  );
};

export default AppBar;
