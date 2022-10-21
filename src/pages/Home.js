import { useState, useEffect } from "react";
import { Container } from "../styles/HomeStyles";
import Card from "../components/CardComponent";
import { cardCount } from "../utils/settings";

function Home() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${cardCount}`;



  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(url);
        const cardsFromServer = await response.json();
        setLoading(false);
        setCards(cardsFromServer.results);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    fetchCards();
  }, [url]);

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
