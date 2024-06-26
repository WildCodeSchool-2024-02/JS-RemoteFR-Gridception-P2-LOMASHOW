import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

function Filter({ 
  activeFiltre = {},
   setActiveFiltre,
    setIndex,
     setPage 
    }) {
  const [listFilter, setListFilter] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleClickFilter = (id) => {
    setActiveFiltre(id);
    setShowModal(false);
    setIndex(0);
    setPage(1);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "fr-FR" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };

    const getFilter = () => {
      axios
        .request(options)
        .then((response) => {
          const list = response.data.genres;
          const newList = list.filter(
            (filtre) =>
              filtre.name !== "Documentaire" && filtre.name !== "Téléfilm"
          );
          setListFilter(newList);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getFilter();
  }, []);

  return (
    <div>
      {showModal && (
        <div className="listFilter">
          {listFilter.map((filtre) => (
            <button
              type="button"       
              className={filtre.id === activeFiltre? "filtre_description active": "filtre_description"}              
              key={filtre.id}
              onClick={() => handleClickFilter(filtre.id)}
            >
              {filtre.name}
            </button>
          ))}
        </div>
      )}
      <button
        className="filtre_button"
        type="button"
        onClick={handleClick}
        onKeyDown={() => {}}
      >
        <img
          className="navbar-image"
          src="./src/assets/images/sliders.png"
          alt="sliders"
        />
      </button>
    </div>
  );
}

Filter.defaultProps = {
  activeFiltre: null,
};

Filter.propTypes = {
  activeFiltre: PropTypes.number,
  setActiveFiltre: PropTypes.func.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Filter;
