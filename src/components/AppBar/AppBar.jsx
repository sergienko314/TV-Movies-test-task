import { ItemNav, LinkItemNav, ListNav, NavStyled } from "./AppBar.styled";

import { useEffect, useState } from "react";
 

const navItems = [
  { href: "/", text: "Home", to: "Home", icon: null },
  { href: "/tv", text: "TV Shows", to: "TVShows", icon: null },
  { href: "/movies", text: "Movies", to: "Movies", icon: null },
  { href: "/series", text: "Series", to: "Series", icon: null },
];

const AppBar = () => {

  return (
    <>
      <NavStyled>
        <ListNav>
          {navItems.map(({ href, text, to }) => (
            <ItemNav key={href}>
              <LinkItemNav
               activeClass="any"
                to={to}
                title={text}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                
              >
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
