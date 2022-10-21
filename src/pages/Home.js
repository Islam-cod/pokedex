import { useState, useEffect } from "react";
import { Container } from "../styles/HomeStyles";
import CardComponent from "../components/CardComponent";
import { cardCount } from "../utils/settings";
import ErrorComponent from "../components/ErrorComponent";

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [cards, setCards] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${cardCount}`;



  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url);
        const cardsFromServer = await response.json();
        setCards(cardsFromServer.results);
        setError(null);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        setError("Sorry, Something went wrong while getting pokemon cards!");
        setLoading(false);
      }
    };

    fetchCards();
  }, [url]);

  if (loading) return <h3> Loading .... </h3>;

  if (error) return <ErrorComponent error={error} />


  return (
    <Container>
      {cards.map((pokemon) => (
        <CardComponent key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </Container>
  );
}

export default Home;
