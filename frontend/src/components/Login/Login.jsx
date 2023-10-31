import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { validation } from "./validation";
import styledLogin from "../Login/Login.module.css";

export default function Login({ login }) {
  let [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  let [errors, setErrors] = React.useState();

  let location = useLocation();

  const handleInputChange = (event) => {
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userData);
  };
  return (
    <div className={styledLogin.pageContent}>
      <div className={styledLogin.container}>
        <form className={styledLogin.form} onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className={styledLogin.input}
            onChange={(event) => {
              handleInputChange(event);
            }}
            name="username"
            value={userData.username}
            type="text"
            placeholder="Email"
          />
          <p>mail@test.com</p>
          <p>{errors && errors.username}</p>
          <label>Password</label>
          <input
            className={styledLogin.input}
            onChange={(event) => {
              handleInputChange(event);
            }}
            name="password"
            value={userData.password}
            type="password"
            placeholder="Contraseña"
          />
          <p>123456</p>
          <p>{errors && errors.password}</p>
          <button className={styledLogin.input} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
