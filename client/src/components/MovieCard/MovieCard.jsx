import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Like from "../Like/Like";
import "./MovieCard.css";

function MovieCard({
  activeFiltre,
  index,
  setIndex,
  page,
  setPage,
  likedMovie,
  setLikedMovie,
}) {
  const [datas, setDatas] = useState({});
  const [nbFilmFiltre, setNbFilmFiltre] = useState();
  const [toggleOverview, setToggleOverview] = useState(false);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
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
        src={`https://image.tmdb.org/t/p/w500/${datas?.poster_path}`}
        alt={datas?.vote_average}
      />

      <section
        className={`overview-container ${toggleOverview ? "active" : ""}`}
        onClick={toggle}
        onKeyDown={toggle}
        role="button"
        tabIndex={0}
      >
        <h2 className="title">{datas?.title}</h2>
        <p className="notes"> note : {datas?.vote_average} /10</p>

        <div>
          <p className="overview"> {description()}</p>
        </div>
      </section>

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

MovieCard.propTypes = {
  activeFiltre: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
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
