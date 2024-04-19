import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Like from "../Like/Like";
import "./MovieCard.css";

function MovieCard({
  activeFiltre = {},
  index,
  setIndex,
  page,
  setPage,
  likedMovie,
  setLikedMovie,
}) {
  const [datas, setDatas] = useState({});
  const [nbFilmFiltre, setNbFilmFiltre] = useState(0);
  const [toggleOverview, setToggleOverview] = useState(false);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
  };

  const posterPath = () => {
    if (!datas?.poster_path) {
      return "Poster à venir";
    }
    return datas?.poster_path;
  };

  const note = () => {
    if (!datas?.vote_average) {
      return "Note à venir";
    }
    return datas?.vote_average;
  };

  function toggle() {
    if (toggleOverview === false) {
      setToggleOverview(true);
    } else setToggleOverview(false);
  }

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
          if (activeFiltre !== null) {
            listFilms = listFilms.filter((film) =>
              film.genre_ids.includes(activeFiltre)
            );
          }
          if (listFilms.length === 0) {
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
  }, [index, page, activeFiltre, setPage]);

  return (
    <section className="movie-card-component">
      <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500/${posterPath()}`}
        alt={datas?.vote_average}
      />

      <button
        className={`overview-container ${toggleOverview ? "active" : ""}`}
        onClick={toggle}
        onKeyDown={toggle}
        tabIndex={0}
        type="button"
      >
        <h2 className="title">{datas?.title}</h2>
        <p className="notes"> note : {Math.round(note() * 100) / 100} /10</p>
        <p className="overview"> {description()}</p>
      </button>

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
    </section>
  );
}

MovieCard.defaultProps = {
  activeFiltre: {},
};

MovieCard.propTypes = {
  activeFiltre: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setLikedMovie: PropTypes.func.isRequired,
  likedMovie: PropTypes.arrayOf(
    PropTypes.shape({
      adult: PropTypes.bool.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
      id: PropTypes.number.isRequired,
      original_language: PropTypes.string.isRequired,
      original_title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      popularity: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      video: PropTypes.bool.isRequired,
      vote_average: PropTypes.number.isRequired,
      vote_count: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieCard;