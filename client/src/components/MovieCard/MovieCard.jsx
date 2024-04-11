import axios from "axios";
import { useEffect, useState } from "react";
import ButtonChange from "../ButtonChange/ButtonChange";
import "./MovieCard.css";

function MovieCard() {
  const [datas, setDatas] = useState();
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

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
      <div className="overview-container">
        <p className="overview"> {description()}</p>
      </div>

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
