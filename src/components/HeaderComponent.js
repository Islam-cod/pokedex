import React from 'react';
import { HeaderContainer, Title } from '../styles/HeaderStyles';
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
      <Title>Personal Pokedex!</Title>
      </Link>
    </HeaderContainer>

  );
};

export default HeaderComponent;