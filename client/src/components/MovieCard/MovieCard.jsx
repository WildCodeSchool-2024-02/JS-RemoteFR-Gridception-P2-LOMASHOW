import axios from "axios";
import { useEffect, useState } from "react";
import "./MovieCard.css";

function MovieCard() {
  const [datas, setDatas] = useState();
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);

  const handleClick = () => {
    if (index >= 19) {
      setPage(page + 1);
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
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
      <p>{datas?.overview} </p>

      <button
        type="button"
        onClick={() => {
          handleClick();
        }}
      >
        SET
      </button>
    </section>
  );
}

export default MovieCard;
