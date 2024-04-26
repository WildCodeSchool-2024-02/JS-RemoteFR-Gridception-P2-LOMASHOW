import { Link } from "react-router-dom";
import movinder from "../assets/images/MovInder175.png";

import infoCreators from "../datas/team";

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
        {infoCreators.map((member) => (
          <div key={member.name}>
            <img
              className="content-picture"
              src={member.img}
              alt={member.name}
            />
            <h2>{member.name}</h2>
            <p className="content-picture">{member.desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}
