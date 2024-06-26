import { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Filter from "../Filter/Filter";
import Wishlist from "../Wishlist/Wishlist";

import "./NavBar.css";
import info from "../../assets/images/info.png";
import { useAuth } from "../../context/AuthContext";

function NavBar({
  setActiveFiltre,
  index,
  setIndex,
  setPage,
  likedMovie,
  activeFiltre = {},
  setLikedMovie,
}) {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { setAuthenticated } = useAuth();

  return (
    <nav className="navbar_container">
      <div className="wishlist">
        {isWishlistOpen && (
          <Wishlist
            likedMovie={likedMovie}
            setLikedMovie={setLikedMovie}
            isWishlistOpen={isWishlistOpen}
            setIsWishlistOpen={setIsWishlistOpen}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setIsWishlistOpen(true);
            if (isWishlistOpen === true) {
              setIsWishlistOpen(false);
            }
          }}
        >
          {" "}
          <img
            className="navbar-image"
            src="./src/assets/images/list.png"
            alt="list"
          />
        </button>
      </div>

      <div className="filter">
        <Filter
          setActiveFiltre={setActiveFiltre}
          activeFiltre={activeFiltre}
          index={index}
          setIndex={setIndex}
          setPage={setPage}
        />
      </div>
      <div className="info">
        <Link to="/creators">
          <img className="navbar-image" src={info} alt="logo info" />
        </Link>
      </div>

      <button
        className="logout"
        type="button"
        onClick={() => {
          localStorage.setItem("logged", JSON.stringify(false));
          setAuthenticated(false);
        }}
      >
        <img src="./src/assets/images/se-deconnecter.png" alt="Deconnexion" />
      </button>
    </nav>
  );
}
NavBar.defaultProps = { activeFiltre: null };
NavBar.propTypes = {
  activeFiltre: PropTypes.number,
  setActiveFiltre: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
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

export default NavBar;
