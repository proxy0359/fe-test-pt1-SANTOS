import React from "react";
import style from "./CarouselCard.module.css";

const CarouselCard = (props) => {
  return (
    <div className={style.card} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default CarouselCard;
