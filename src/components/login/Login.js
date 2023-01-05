import React from "react";
import Card from "../UI/Card";
import style from "./Login.module.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Card>
      <h1 className={`text-center ${style.login}`}>Log in</h1>
      <LoginForm />
      <p className={`text-center py-4 m-0`}>OR</p>
      <div className={style.account}>
        <a href="#"> Continue with Google </a>
        <a href="#"> Continue with Microoft </a>
        <a href="#"> Continue with Apple</a>
      </div>
      <div className={`mt-4 ${style.user}`}>
        <a href="#">Can't Login?</a>
        <span className="mx-2">・</span>
        <a href="#">Already have an Account?</a>
      </div>
    </Card>
  );
};

export default Login;
