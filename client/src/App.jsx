import { useState } from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import Movinder from "./assets/images/MovInder175.png";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Swipeable from "./components/Swipeable/Swipeable";

function App() {
  const [activeFiltre, setActiveFiltre] = useState(null);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [likedMovie, setLikedMovie] = useState([]);
  const [datas, setDatas] = useState({});
  const [nbFilmFiltre, setNbFilmFiltre] = useState(0);

  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>
      <div>
        <Swipeable
          onSwipeLeft={() => {
            console.info("Swiped left!");

            if (index >= nbFilmFiltre - 1) {
              setPage(page + 1);
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
          onSwipeRight={() => {
            console.info("Swiped right!");
            const isAlreadyLiked = likedMovie.find(
              (movie) => movie.title === datas.title
            );

            if (!isAlreadyLiked) {
              const updatedLikedMovie = [datas, ...likedMovie];
              setLikedMovie(updatedLikedMovie);
            }
            if (index >= nbFilmFiltre - 1) {
              setPage(page + 1);
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
        >
          <MovieCard
            activeFiltre={activeFiltre}
            index={index}
            setIndex={setIndex}
            setPage={setPage}
            page={page}
            likedMovie={likedMovie}
            setLikedMovie={setLikedMovie}
            datas={datas}
            setDatas={setDatas}
            nbFilmFiltre={nbFilmFiltre}
            setNbFilmFiltre={setNbFilmFiltre}
          />
        </Swipeable>
      </div>
      <NavBar
        activeFiltre={activeFiltre}
        setActiveFiltre={setActiveFiltre}
        index={index}
        setIndex={setIndex}
        setPage={setPage}
        likedMovie={likedMovie}
        setLikedMovie={setLikedMovie}
      />
    </>
  );
}

export default App;
