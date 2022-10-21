import Home from "./pages/Home";
import Details from "./pages/Details";
import HeaderComponent from "./components/HeaderComponent";
import Global from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Global />
      <HeaderComponent />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="details/:pokemonName" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
