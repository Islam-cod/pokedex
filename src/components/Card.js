import React from "react";
import { useEffect, useState } from "react";
import { CardTitle } from "../styles/HomeStyles";
import { ImageContainer } from "../styles/HomeStyles";
import { Box } from "../styles/HomeStyles";
import { typeToColor } from "../utils/constants";

const Card = ({ name, url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchImage();
  }, []);

  if (loading) return;

  const pokemonType = data.types[0].type.name;


  let bgColor = typeToColor[pokemonType];
  if (bgColor === undefined) bgColor = "white"; 



  return (
    <>
      <Box bgColor={bgColor}>
          <ImageContainer>
            <img src={data.sprites.front_default} alt={name} width={150} />
          </ImageContainer>
          <CardTitle> {name} </CardTitle>
      </Box>
    </>
  );
};

export default Card;
