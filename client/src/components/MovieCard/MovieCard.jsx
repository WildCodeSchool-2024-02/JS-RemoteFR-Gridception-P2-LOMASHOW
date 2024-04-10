import PropTypes from "prop-types";
import "./MovieCard.css";

function MovieCard({ movie }) {
    return (
        <section>
            <div className="movieDetails">
                <figcaption>{movie.name}</figcaption>
                <img className="movieImg" src={movie.img} />
            </div>

        </section>
    );
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }),
};

export default MovieCard;