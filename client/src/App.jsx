import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState();

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.info(datas);

  return (
    <div>
      <figcaption>
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500/${datas?.results[2]?.poster_path}`}
            alt={datas?.results[2]?.vote_average}
          />
        </figure>
        {datas?.results[2]?.title}
        <p>{datas?.results[2]?.overview}</p>
      </figcaption>
    </div>
  );
}

export default App;
