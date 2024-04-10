import "./ButtonChange.css";
import PropTypes from "prop-types";



function ButtonChange({ setMovieIndex, movieIndex, movieList }) {

    const handleClickPrecedent = () => {
        setMovieIndex(movieIndex - 1);
    }

    const handleClickSuivant = () => {
        setMovieIndex(movieIndex + 1);
    }

    return (
        <section className="buttonChange">
            <div>
                {movieIndex > 0 ? <button className="button1" onClick={handleClickPrecedent}><img src="./src/assets/images/button1.png" /></button> : undefined}
            </div>
            <div>
                {movieIndex < movieList.length - 1 ? <button className="button2" onClick={handleClickSuivant}><img src="./src/assets/images/button2.png" /></button> : undefined}
            </div>
        </section>
    )
}

ButtonChange.propTypes = {
    movieIndex: PropTypes.number.isRequired,
    setMovieIndex: PropTypes.func.isRequired,
    movieList: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string,
        })
    ).isRequired,

};
export default ButtonChange;