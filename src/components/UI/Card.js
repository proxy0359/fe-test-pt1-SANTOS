import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return <div className={`shadow-sm ${style.card}`}>{props.children}</div>;
};

export default Card;
