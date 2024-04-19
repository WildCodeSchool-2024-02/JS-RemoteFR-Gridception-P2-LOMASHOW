import axios from "axios";
import { useEffect, useState } from "react";
import Wishlist from "../Wishlist/Wishlist";
import Like from "../Like/Like";

import "./MovieCard.css";

function MovieCard() {
  const [datas, setDatas] = useState({});
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [likedMovie, setLikedMovie] = useState([]);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "fr-FR", page: `${page}` },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };

    const getMovies = () => {
      axios
        .request(options)
        .then((response) => {
          setDatas(response.data.results[index]);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    getMovies();
  }, [index, page]);

  return (
    <section className="movie-card-component">
      <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500/${datas?.poster_path}`}
        alt={datas?.vote_average}
      />

      <h2 className="title">{datas?.title}</h2>
      <Like
        setIndex={setIndex}
        index={index}
        page={page}
        setPage={setPage}
        datas={datas}
        likedMovie={likedMovie}
        setLikedMovie={setLikedMovie}
      />
      <div className="overview-container">
        <p className="overview"> {description()}</p>
      </div>

      <nav className=" navbar">
        <div className="wishlist">
          <button
            type="button"
            className="open-close"
            onClick={() => {
              setIsWishlistOpen(true);
              if (isWishlistOpen === true) {
                setIsWishlistOpen(false);
              }
            }}
          >
            {" "}
            Wishlist
          </button>
          {isWishlistOpen && <Wishlist likedMovie={likedMovie} />}
        </div>
      </nav>
    </section>
  );
}

export default MovieCard;
