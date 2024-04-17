import "./Like.css";
import PropTypes from "prop-types";

function Like({ index, setIndex, setPage, page }) {
  const handleClickSuivant = () => {
    if (index >= 19) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  return (
    <section className="LikeComponent">
      <button type="button" onClick={handleClickSuivant}>
        Like
      </button>{" "}
      <button type="button">Dislike</button>
    </section>
  );
}

Like.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Like;
