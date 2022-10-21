import Home from "./pages/Home";
import Header from "./components/Header";
import Global from "./styles/global";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
