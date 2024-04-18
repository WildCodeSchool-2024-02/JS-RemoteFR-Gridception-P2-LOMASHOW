import "./Like.css";
import PropTypes from "prop-types";

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
  const handleClickLike = () => {
    const updatedLikedMovie = [datas, ...likedMovie];
    setLikedMovie(updatedLikedMovie);

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
      <button role="button"
        className="likebutton"
        type="button"
        onClick={() => {
          console.info(likedMovie);
          handleClickLike();
        }}
      >
        <img src="./src/assets/images/love.png" alt="favorites"/>
      </button>{" "}
      <button role="button"
        className="dislikebutton"
        type="button"
        onClick={() => {
          handleClickDislike();
        }}
      >
        <img src="./src/assets/images/broken.png" alt="dislike"/>
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
  }).isRequired,
};

export default Like;
