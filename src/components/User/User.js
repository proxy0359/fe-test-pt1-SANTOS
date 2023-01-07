import React from "react";
import { Outlet } from "react-router-dom";
import style from "./User.module.css";
import Header from "./Header";

const User = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className={`col p-5  ${style.header}`}>
          <Header />
        </div>
        <div className="row m-0 pb-5">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
