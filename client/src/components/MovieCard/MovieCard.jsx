import axios from "axios";
import { useEffect, useState } from "react";
import ButtonChange from "../ButtonChange/ButtonChange";
import Wishlist from "../Wishlist/Wishlist";

import "./MovieCard.css";

function MovieCard({activeFiltre, index, setIndex, page, setPage}) {
  const [datas, setDatas] = useState();
  const [nbFilmFiltre, setNbFilmFiltre] = useState();
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const description = () => {
    if (!datas?.overview) {
      return "Description à venir";
    }
    return datas?.overview;
  };  

  
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
        let listFilms = response.data.results;
        if (activeFiltre !== ""){ 
          listFilms = listFilms.filter(film => film.genre_ids.includes(activeFiltre))
        }
        if(listFilms.length == 0){
          setPage(page +1)
        }
        setNbFilmFiltre(listFilms.length)
        setDatas(listFilms[index]); 
      })
      .catch((error) => {
        console.error(error);
      }); 
  }; 
  
  useEffect(() => {
    getMovies();
  }, [index, page, activeFiltre]); 

  return (
    <section className="movie-card-component">
      <div className="details">
      </div>
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
          nbFilmFiltre={nbFilmFiltre}
          setNbFilmFiltre={setNbFilmFiltre}

        />
      </div>
    </section>
  );
}

export default MovieCard;
