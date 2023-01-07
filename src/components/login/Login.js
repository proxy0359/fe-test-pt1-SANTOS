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
        <a href="#">
          <i className={` fa-brands fa-google ${style.googleIcon}`}></i>
          Continue with Google
        </a>
        <a href="#">
          <i className="fa-brands fa-microsoft"></i> Continue with Microoft{" "}
        </a>
        <a href="#">
          <i className="fa-brands fa-apple"></i> Continue with Apple
        </a>
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
