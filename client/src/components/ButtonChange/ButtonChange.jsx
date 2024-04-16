import "./ButtonChange.css";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

function ButtonChange({ setIndex, index, page, setPage }) {
  const [hideBtn, setHideBtn] = useState(false);

  useEffect(() => {
    if (page <= 1 && index <= 0) setHideBtn(true);
    else setHideBtn(false);
  }, [index, page]);

  const handleClickPrecedent = () => {
    if (index <= 0 && page > 1) {
      setPage(page - 1);
      setIndex(19);
    } else {
      setIndex(index - 1);
    }
  };

  const handleClickSuivant = () => {
    if (index >= 19) {
      setPage(page + 1);
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="buttonChange">
      <div>
        {!hideBtn ? (
          <button
            className="button1"
            type="button"
            onClick={handleClickPrecedent}
          >
            <img src="./src/assets/images/button1.png" alt="precedent" />
          </button>
        ) : undefined}
      </div>
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
