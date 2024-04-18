import Filter from "../Filter/Filter";
import Wishlist from "../Wishlist/Wishlist";
import { useState } from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

function NavBar({ setActiveFiltre, index, setIndex, setPage, likedMovie }) {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  return (
    <nav className="navbar_container">
      <div className="nav">
        <div className="wishlist">
          {isWishlistOpen && (
            <Wishlist
              likedMovie={likedMovie}
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
            <img src="./src/assets/images/list.png" />
          </button>
        </div>
        <div className="filter">
          <Filter
            setActiveFiltre={setActiveFiltre}
            index={index}
            setIndex={setIndex}
            setPage={setPage}
          />
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  setActiveFiltre: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
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
