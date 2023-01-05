import React from "react";
import style from "./LoginForm.module.css";

const LoginForm = () => {
  const formHandler = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form-group" onSubmit={formHandler}>
      <input
        type="email"
        id="email"
        className="form-control p-3"
        placeholder="ENTER EMAIL"
      />
      <input
        type="password"
        id="password"
        className="form-control p-3"
        placeholder="ENTER PASSWORD"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
