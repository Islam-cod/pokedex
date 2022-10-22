import React from "react";
import { HeaderContainer, Title } from "../styles/HeaderStyles";
import { ClearedLink } from "../styles/HomeStyles";

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <ClearedLink to="/">
        <Title>Personal Pokedex!</Title>
      </ClearedLink>
    </HeaderContainer>
  );
};

export default HeaderComponent;
