import "./Like.css";
import PropTypes from "prop-types";

import { useEffect } from "react";

function Like({
  index,
  setIndex,
  setPage,
  page,
  datas,
  likedMovie,
  setLikedMovie,
  nbFilmFiltre,
}) {
  const toLocalStorage = (movies) => {
    localStorage.setItem("likedMovies", JSON.stringify(movies));
  };
  useEffect(() => {
    const storedLikedMovies = localStorage.getItem("likedMovies");
    if (storedLikedMovies) {
      setLikedMovie(JSON.parse(storedLikedMovies));
    }
  }, [setLikedMovie]);

  const handleClickLike = () => {

    const isAlreadyLiked = likedMovie.find(
      (movie) => movie.title === datas.title
    );

    if (!isAlreadyLiked) {
      const updatedLikedMovie = [datas, ...likedMovie];
      setLikedMovie(updatedLikedMovie);
      toLocalStorage(updatedLikedMovie);
    }

    if (index >= nbFilmFiltre - 1) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const handleClickDislike = () => {
    if (index >= nbFilmFiltre - 1) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="LikeComponent">
      <button
        className="dislikebutton"
        type="button"
        onClick={() => handleClickDislike()}
      >
        <img src="./src/assets/images/broken.png" alt="dislike" />
      </button>

      <button
        className="likebutton"
        type="button"
        onClick={() => handleClickLike()}
      >
        <img src="./src/assets/images/love.png" alt="favorites" />
      </button>
    </section>
  );
}

Like.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  nbFilmFiltre: PropTypes.number.isRequired,
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
  }).isRequired,
};

export default Like;
