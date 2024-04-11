import MovieCard from "./components/MovieCard/MovieCard";
import Movinder from "./assets/images/MovInder175.png";
import "./App.css";


function App() {

  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>
      <div>
        <MovieCard />
      </div>
    </>

  );
}

export default App;
