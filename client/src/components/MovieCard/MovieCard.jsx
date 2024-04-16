import axios from "axios";
import { useEffect, useState } from "react";
import ButtonChange from "../ButtonChange/ButtonChange";
import Wishlist from "../Wishlist/Wishlist";

import "./MovieCard.css";

function MovieCard({activeFiltre}) {
  const [datas, setDatas] = useState();
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
  };  

  const options = {
    method: "GET",
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
  
  useEffect(() => {
    if (activeFiltre === ""){ // si il n'y a pas de filtre
      options.url ="https://api.themoviedb.org/3/movie/top_rated",
      options.params = { language: "fr-FR", page: `${page}` }
    }
    else{
      options.url = "https://api.themoviedb.org/3/discover/movie"; // l'URL est appelé un "endpoint"
      options.params ={language: "fr-FR", page: `${page}`, with_genres:activeFiltre}
    }
    getMovies();
  }, [index, page, activeFiltre]); // tableau de dépendances

  return (
    <section className="movie-card-component">
      <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500/${datas?.poster_path}`}
        alt={datas?.vote_average}
      />

      <h2 className="title">{datas?.title}</h2>
      <div className="overview-container">
        <p className="overview"> {description()}</p>
      </div>

      <nav className=" navbar">
        <div className="wishlist">
          <button
            type="button"
            onClick={() => {
              setIsWishlistOpen(true);
            }}
          >
            {" "}
            Open
          </button>
          {isWishlistOpen && <Wishlist closeWishlist={setIsWishlistOpen} />}
        </div>
      </nav>
      <div className="button">
        <ButtonChange
          setIndex={setIndex}
          index={index}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
}

export default MovieCard;
