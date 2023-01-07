import React from "react";
import style from "./NewUserCard.module.css";

const NewUserCard = (props) => {
  return (
    <div className={`${style.card} ${props.className}`}>{props.children}</div>
  );
};

export default NewUserCard;
