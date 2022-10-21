import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StyledPokemonName } from "../styles/HomeStyles";
import { ImageContainer } from "../styles/HomeStyles";
import { Box } from "../styles/HomeStyles";
import { typeToColor } from "../utils/constants";

const Card = ({ name, url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
  const fetchImage = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

    fetchImage();
  }, [url]);

  if (loading) return;

  const pokemonType = data.types[0].type.name;


  let bgColor = typeToColor[pokemonType];
  if (bgColor === undefined) bgColor = "white"; 



  return (
    <>
      <Box bgColor={bgColor}>
        <Link to={`/Details/${name}`} style={{ textDecoration: "none" }}>
          <ImageContainer>
            <img src={data.sprites.front_default} alt={name} width={150} />
          </ImageContainer>
          <StyledPokemonName> {name} </StyledPokemonName>
        </Link>
      </Box>
    </>
  );
};

export default Card;
