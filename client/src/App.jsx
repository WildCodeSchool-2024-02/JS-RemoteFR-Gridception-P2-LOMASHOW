import MovieCard from "./components/MovieCard/MovieCard";
import Movinder from "./assets/images/MovInder175.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";


function App() {
  const [activeFiltre, setActiveFiltre] = useState("")

  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>
      <div>
      <MovieCard activeFiltre={activeFiltre}/>
      </div>
      <NavBar activeFiltre={activeFiltre} setActiveFiltre={setActiveFiltre}/>
    </>
  );
}

export default App;
