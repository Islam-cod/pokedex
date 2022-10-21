import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles/DetailsStyles";
import { typeToColor } from "../utils/constants";
import ChartComponent from "../components/ChartComponent";
import { TypeWrapper, ChartWrapper, StatValue, StatType} from "../styles/DetailsStyles";
import ErrorComponent from "../components/ErrorComponent";


function Details() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [pokemonData, setPokemonData] = useState(null);

  let params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`;

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonData(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Sorry, Something went wrong while getting card details!");
        setLoading(false);
      }
    };

    fetchName();
  }, [url]);

  if (loading) return <h3> Loading .... </h3>;

  if (error) return <ErrorComponent error={error} />

  const pokemnName = pokemonData.name;
  const pokemonImage = pokemonData.sprites.front_default;
  const pokemonWeight = pokemonData.weight / 10 + " KG";
  const pokemonHeight = pokemonData.height / 10 + " M";
  const pokemonHP = pokemonData.stats[0].base_stat;
  const pokemonAtk = pokemonData.stats[1].base_stat;
  const pokemonDef = pokemonData.stats[2].base_stat;
  const pokemonSpd = pokemonData.stats[5].base_stat;
  const pokemonExp = pokemonData.base_experience;

  const labels = ["HP", "ATK", "DEF", "SPD", "EXP"];
  const dataLabel = "Stat";
  const backgroundColor = [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
  ];

  const borderColor = [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
  ];

  const chartData = [pokemonHP, pokemonAtk, pokemonDef, pokemonSpd, pokemonExp];

  const pokemonType = pokemonData.types[0].type.name;
  let bgColor = typeToColor[pokemonType];
  if (bgColor === undefined) bgColor = "white";

  return (
    <Wrapper bgColor={bgColor}>
      <img src={pokemonImage} alt={pokemnName} width={250} />
      <StatValue>#{pokemonData.id}</StatValue>
      <h1>{pokemnName}</h1>
      <TypeWrapper>
        {pokemonData.types.map((pokemonType) => (
          <StatType>{pokemonType.type.name}</StatType>
        ))}
      </TypeWrapper>

      <TypeWrapper>
        <div>
          <h2>{pokemonWeight}</h2>
          <h4>Weight</h4>
        </div>

        <div>
          <h2> {pokemonHeight}</h2>
          <h4>Height</h4>
        </div>
      </TypeWrapper>

      <h2>Base Stats</h2>
      <ChartWrapper>
        <ChartComponent
          data={chartData}
          labels={labels}
          dataLabel={dataLabel}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          displayLegend={false}
        />
      </ChartWrapper>
    </Wrapper>
  );
}

export default Details;
