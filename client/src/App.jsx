import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [datas, setDatas] = useState();

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
    params: { language: 'en-US', page: '1' },
    headers: { accept: 'application/json' }
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {

        setDatas(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });

  }, [])
  console.log(datas);



  return (
    <div>
      <figcaption>
        <img src={datas?.results[2]?.poster_path} alt={datas?.results[2]?.title} />
        <figure>
          <p>TOTO</p>
          {datas?.results[2]?.title}
        </figure>
      </figcaption>
    </div>
  );
}



export default App;



