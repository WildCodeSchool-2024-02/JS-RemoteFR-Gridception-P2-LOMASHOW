import PropTypes from "prop-types";
import "./Wishlist.css";

function Wishlist({ likedMovie, setLikedMovie }) {
  return (
    <section className="wishlist">
      <section className="wishlist-component">
        {likedMovie.map((movie, index) => (
          <div key={movie.title}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <button
              type="button"
              className="remove"
              onClick={() => {
                const updatedLikeMovie = [...likedMovie];
                updatedLikeMovie.splice(index, 1);
                setLikedMovie(updatedLikeMovie);
                localStorage.setItem(
                  "likedMovies",
                  JSON.stringify(updatedLikeMovie)
                );
              }}
            >
              x
            </button>
          </div>
        ))}
      </section>
    </section>
  );
}

Wishlist.propTypes = {
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

export default Wishlist;
