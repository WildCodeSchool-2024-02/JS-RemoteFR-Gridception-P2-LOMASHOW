import "./ButtonChange.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function ButtonChange({ setIndex, index, page, setPage, nbFilmFiltre }) {


  const handleClickSuivant = () => {
    if (index >= nbFilmFiltre - 1 ) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="buttonChange">
      <div>
        <button className="button2" type="button" onClick={handleClickSuivant}>
          <img src="./src/assets/images/button2.png" alt="suivant" />
        </button>
      </div>
    </section>
  );
}

export default ButtonChange;

ButtonChange.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};
