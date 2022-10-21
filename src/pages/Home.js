import { useState, useEffect } from "react";
import { Container } from "../styles/HomeStyles";
import Card from "../components/Card";

function Home() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const cardsFromServer = await response.json();
      setLoading(false);
      setCards(cardsFromServer.results);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  if (loading) {
    return <h3> Loading .... </h3>;
  }

  return (
    <Container>
      {cards.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </Container>
  );
}

export default Home;
