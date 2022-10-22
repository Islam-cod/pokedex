import React from "react";
import { StyledPokemonName } from "../styles/HomeStyles";
import { ImageContainer, ClearedLink } from "../styles/HomeStyles";
import { Box } from "../styles/HomeStyles";
import { typeToColor } from "../utils/constants";
import { useFetch } from "../hooks/useFetch";


const CardComponent = ({ name: pokemonName }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  const { loading, error, data } = useFetch(url);

  if (loading) return;

  if (error) {
    console.log(`Error while loading card ${pokemonName}. Error: ${error}`);
    return;
  }


  const pokemonType = data.types[0].type.name;

  let bgColor = typeToColor[pokemonType];
  if (bgColor === undefined) bgColor = "white"; 


  return (
    <>
      <Box bgColor={bgColor}>
        <ClearedLink to={`/Details/${pokemonName}`}>
          <ImageContainer>
            <img src={data.sprites.front_default} alt={pokemonName} width={150} />
          </ImageContainer>
          <StyledPokemonName> {pokemonName} </StyledPokemonName>
        </ClearedLink>
      </Box>
    </>
  );
};

export default CardComponent;
