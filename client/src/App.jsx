import "./App.css";
import { useState } from "react";


import ButtonChange from "./components/ButtonChange/ButtonChange";
import MovieCard from "./components/MovieCard/MovieCard";

const movieList = [
  {
    name: "Joker - Folie à deux",
    img: "https://ecranfantastique.fr/wp-content/uploads/2024/04/Jocker-2-copie.jpg",
  },

  {
    name: "Dune - Part Two",
    img: "https://ecranfantastique.fr/wp-content/uploads/2023/07/dune-poster-2.jpeg",
  },

  {
    name: "Maxxxine",
    img: "https://ecranfantastique.fr/wp-content/uploads/2024/04/maxxxineposter3.jpeg",
  },

  {
    name: "Les Demons de la nuit",
    img: "https://ecranfantastique.fr/wp-content/uploads/2024/04/Uc-Harfliler-Nazar-aff.jpg",
  },
];

function App() {

  const [movieIndex, setMovieIndex] = useState(0);


  return (
    <div>
      <MovieCard movie={movieList[movieIndex]} />
      <ButtonChange setMovieIndex={setMovieIndex} movieIndex={movieIndex} movieList={movieList} />
    </div>

  );
}

export default App;
