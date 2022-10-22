import React from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "../styles/DetailsStyles";
import { typeToColor } from "../utils/constants";
import ChartComponent from "../components/ChartComponent";
import {
  DetailsContainer,
  TypeWrapper,
  ChartWrapper,
  StatValue,
  StatType,
} from "../styles/DetailsStyles";
import ErrorComponent from "../components/ErrorComponent";
import { useFetch } from "../hooks/useFetch";

function Details() {
  let params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`;

  const { loading, error, data } = useFetch(url);

  if (loading) return <h3> Loading .... </h3>;

  if (error) {
    const errorMessage =
      "Sorry, Something went wrong while getting card details!";
    return <ErrorComponent error={errorMessage} />;
  }

  const pokemonData = data;
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
    "rgba(221, 2, 2, 1)",
    "rgba(255, 159, 46, 1)",
    "rgba(46, 174, 255, 1)",
    "rgba(135, 135, 135, 1)",
    "rgba(0, 163, 18, 1)",
  ];

  const chartData = [pokemonHP, pokemonAtk, pokemonDef, pokemonSpd, pokemonExp];

  const pokemonType = pokemonData.types[0].type.name;
  let bgColor = typeToColor[pokemonType];
  if (bgColor === undefined) bgColor = "white";

  return (
    <Wrapper bgColor={bgColor}>
      <DetailsContainer>
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
            borderColor={backgroundColor}
            displayLegend={false}
          />
        </ChartWrapper>
      </DetailsContainer>
    </Wrapper>
  );
}

export default Details;
