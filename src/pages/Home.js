import { Container } from "../styles/HomeStyles";
import CardComponent from "../components/CardComponent";
import { cardCount } from "../utils/settings";
import ErrorComponent from "../components/ErrorComponent";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${cardCount}`;

  const { loading, error, data } = useFetch(url);

  if (loading) return <h2> Loading .... </h2>;

  if (error) {
    const errorMessage =
      "Sorry, Something went wrong while getting pokemon cards!";
    return <ErrorComponent error={errorMessage} />;
  }

  const cards = data.results;

  return (
    <Container>
      {cards.map((pokemon) => (
        <CardComponent
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
        />
      ))}
    </Container>
  );
}

export default Home;
