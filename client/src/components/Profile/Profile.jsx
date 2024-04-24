import "./Profile.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

import Movinder from "../../assets/images/MovInder175.png";

function Profile() {
  const navigate = useNavigate();
  const { authenticated, setAuthenticated, data } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (authenticated === true) {
      navigate("/home");
    }
  }, [authenticated]);
  //   si true vers page home tableau de dépendance authenticated
  return (
    <>
      <header>
        <img src={Movinder} alt="" />
      </header>
      <section className="profile-component">
        <form className="username">
          <label htmlFor="username">Username: </label>
          <input
            className="profile-input"
            type="text"
            value={username}
            onChange={handleUsername}
            id="username"
            name="username"
            required
          />
        </form>
        <form className="password">
          <label htmlFor="pass">Password :</label>
          <input
            className="profile-input"
            type="password"
            id="pass"
            name="password"
            value={password}
            onChange={handlePassword}
            minLength={8}
            required
          />
        </form>
        <button
          type="button"
          className="profile-button"
          onClick={() => {
            if (data.username === username && data.password === password) {
              localStorage.setItem("logged", JSON.stringify(true));
              setAuthenticated(true);
            }
          }}
        >
          Login
        </button>
      </section>
    </>
  );
}

export default Profile;
