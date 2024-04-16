import PropTypes from "prop-types";

import "./Wishlist.css";

function Wishlist({ closeWishlist }) {
  return (
    <section className="wishlist">
      <section className="wishlist-component">
        <img src="" alt="" />
        <p>
          {" "}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, magni
          dicta! A corporis optio iste cupiditate recusandae assumenda quas
          libero minima soluta veritatis animi saepe molestiae illum numquam
          quasi autem deserunt quo amet fugit mollitia, reprehenderit ea. Animi
          corrupti aut molestias voluptatibus error ab, pariatur, aspernatur
          necessitatibus totam iusto dolorum.
        </p>
        <button
          type="button"
          onClick={() => {
            closeWishlist(false);
          }}
        >
          X
        </button>
      </section>
    </section>
  );
}

Wishlist.propTypes = {
  closeWishlist: PropTypes.func.isRequired,
};

export default Wishlist;
