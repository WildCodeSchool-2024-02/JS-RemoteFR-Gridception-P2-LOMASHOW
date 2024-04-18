import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ButtonChange from "../ButtonChange/ButtonChange";
import Wishlist from "../Wishlist/Wishlist";
import Like from "../Like/Like";

import "./MovieCard.css";

function MovieCard({ activeFiltre, index, setIndex, page, setPage }) {
  const [datas, setDatas] = useState();
  const [nbFilmFiltre, setNbFilmFiltre] = useState();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [likedMovie, setLikedMovie] = useState([]);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "fr-FR", page: `${page}` },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    const getMovies = () => {
      axios
        .request(options)
        .then((response) => {
          let listFilms = response.data.results;
          if (activeFiltre !== "") {
            listFilms = listFilms.filter((film) =>
              film.genre_ids.includes(activeFiltre)
            );
          }
          if (listFilms.length == 0) {
            setPage(page + 1);
          }
          setNbFilmFiltre(listFilms.length);
          setDatas(listFilms[index]);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getMovies();
  }, [index, page, activeFiltre]);

  return (
    <section className="movie-card-component">
      <div className="details"></div>
      <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500/${datas?.poster_path}`}
        alt={datas?.vote_average}
      />

      <h2 className="title">{datas?.title}</h2>

      <Like
        setIndex={setIndex}
        index={index}
        page={page}
        setPage={setPage}
        datas={datas}
        likedMovie={likedMovie}
        setLikedMovie={setLikedMovie}
      />

      <div className="overview-container">
        <p className="overview"> {description()}</p>
      </div>

      <nav className=" navbar">
        <div className="wishlist">
          <button
            type="button"
            onClick={() => {
              setIsWishlistOpen(true);
              if (isWishlistOpen === true) {
                setIsWishlistOpen(false);
              }
            }}
          >
            {" "}
            Wishlist
          </button>
          {isWishlistOpen && <Wishlist likedMovie={likedMovie} />}
        </div>
      </nav>

      <div className="button">
        <ButtonChange
          setIndex={setIndex}
          index={index}
          page={page}
          setPage={setPage}
          nbFilmFiltre={nbFilmFiltre}
          setNbFilmFiltre={setNbFilmFiltre}
        />
      </div>
    </section>
  );
}

MovieCard.propTypes = {
  activeFiltre: PropTypes.shape(
    {
      genres: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired
      ),
    }.isRequired
  ),
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default MovieCard;
