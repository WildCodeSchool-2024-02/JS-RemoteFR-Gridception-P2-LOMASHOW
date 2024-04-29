import axios from "axios";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import PropTypes from "prop-types";

import "./MovieCard.css";

function MovieCard({
  activeFiltre = {},
  index,
  page,
  setPage,
  datas,
  setDatas,
  setNbFilmFiltre,
}) {
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
  }, [index, page, activeFiltre, setPage, setNbFilmFiltre, setDatas]);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#891616", "#27282c", "#045a11"]
  );
  return (
    <motion.div style={{ background }} className="framer-background">
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      >
        <section className="movie-card-component ">
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
            <p className="notes">
              {" "}
              note : {Math.round(note() * 100) / 100} /10
            </p>
            <p className="overview"> {description()}</p>
          </button>
        </section>
      </motion.div>
    </motion.div>
  );
}

MovieCard.defaultProps = {
  activeFiltre: null,
  datas: {},
};

MovieCard.propTypes = {
  activeFiltre: PropTypes.number,
  index: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  datas: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
  setDatas: PropTypes.func.isRequired,
  setNbFilmFiltre: PropTypes.func.isRequired,
};

export default MovieCard;
