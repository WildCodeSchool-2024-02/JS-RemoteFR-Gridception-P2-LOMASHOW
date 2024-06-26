import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import MovieCard from "./components/MovieCard/MovieCard";
import Movinder from "./assets/images/MovInder175.png";
import Like from "./components/Like/Like";

import Swipeable from "./components/Swipeable/Swipeable";
import NavBar from "./components/NavBar/NavBar";

import "./App.css";

function App() {
  const [activeFiltre, setActiveFiltre] = useState(null);
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [likedMovie, setLikedMovie] = useState([]);
  const [datas, setDatas] = useState({});
  const [nbFilmFiltre, setNbFilmFiltre] = useState(0);

  const navigate = useNavigate();
  const { authenticated } = useAuth();

  useEffect(() => {
    if (authenticated === false) {
      navigate("/");
    }
  }, [authenticated]);

  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>

      <div>
        <Swipeable
          onSwipeLeft={() => {
            if (index >= nbFilmFiltre - 1) {
              setPage(page + 1);
              setIndex(0);
            } else {
              setIndex(index + 1);
            }
          }}
          onSwipeRight={() => {
            const isAlreadyLiked = likedMovie.find(
              (movie) => movie.title === datas.title
            );

            if (!isAlreadyLiked) {
              const updatedLikedMovie = [datas, ...likedMovie];
              setLikedMovie(updatedLikedMovie);
              localStorage.setItem(
                "likedMovies",
                JSON.stringify(updatedLikedMovie)
              );
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
            setPage={setPage}
            page={page}
            datas={datas}
            setDatas={setDatas}
            setNbFilmFiltre={setNbFilmFiltre}
          />
        </Swipeable>
        <Like
          setIndex={setIndex}
          index={index}
          page={page}
          setPage={setPage}
          datas={datas}
          likedMovie={likedMovie}
          setLikedMovie={setLikedMovie}
          nbFilmFiltre={nbFilmFiltre}
        />
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
