import { Link } from "react-router-dom";
import movinder from "../assets/images/MovInder175.png";
import Anthony from "../assets/images/Anthony.jpg";
import Megane from "../assets/images/Megane.jpg";
import Maxime from "../assets/images/Maxime.png";
import Nicolas from "../assets/images/Nicolas.png";
import "./Creators.css";

export default function Creators() {
  return (
    <>
      <section className="movinder">
        <Link to="/">
          <img src={movinder} alt="" />
        </Link>
      </section>
      <h1>L'équipe créatrice</h1>
      <p className="content-creators1">
        Bienvenue nous sommes l'équipe dévouée derrière l'application innovante
        qui simplifie la découverte et la gestion de vos films préférés. Notre
        application permet aux utilisateurs de liker et de dislike des films,
        les ajoutant ainsi à leur liste de souhaits.
      </p>
      <section className="container-picture-creators">
        <div className="Anthony">
          <img src={Anthony} alt="Anthony" />
          <h2>Anthony</h2>
          <p className="content-picture">
            {" "}
            "Into the Wild" offre une exploration captivante de la quête de
            liberté et de sens à travers l'aventure en pleine nature.
          </p>
        </div>
        <div className="Megane">
          <img src={Megane} alt="Mégane" />
          <h2>Mégane</h2>
          <p className="content-picture">
            Si vous êtes fans de l'univers de la magie, alors je vous conseille
            la saga Harry Potter.
          </p>
        </div>
        <div className="Maxime">
          <img src={Maxime} alt="Maxime" />
          <h2>Maxime</h2>
          <p className="content-picture">
            Si vous voulez switcher humour et marvel je vous conseille Deadpool.
          </p>
        </div>
        <div className="Nicolas">
          <img src={Nicolas} alt="Nicolas" />
          <h2>Nicolas</h2>
          <p className="content-picture">
            Pour ma part je suis plus team film d'horreur alors je vous
            conseille la saga Scream.
          </p>
        </div>
      </section>
    </>
  );
}
