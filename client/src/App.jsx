import MovieCard from "./components/MovieCard/MovieCard";
import Movinder from "./assets/images/MovInder175.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";


function App() {
  const [activeFiltre, setActiveFiltre] = useState("")
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>
      <div>
      <MovieCard activeFiltre={activeFiltre} index={index} setIndex={setIndex} setPage={setPage} page={page}/>
      </div>
      <NavBar activeFiltre={activeFiltre} setActiveFiltre={setActiveFiltre} index={index} setIndex={setIndex} setPage={setPage}/>
    </>
  );
}

export default App;
