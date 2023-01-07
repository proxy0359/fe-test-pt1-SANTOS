import React from "react";
import style from "./CarouselItem.module.css";
import CarouselCard from "../UI/CarouselCard";

const CarouselItem = () => {
  return (
    <div className={style.carouselItem}>
      <CarouselCard>
        <div className={style.cardItem}>
          <div className={style.iconCard}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={style.paragraph}>
            <h1>Search Forum</h1>
            <p>
              Share suggestions, ask questions, and connect with other users and
              top contributors in the Search community forum.
            </p>
          </div>
        </div>
      </CarouselCard>
      <CarouselCard>
        <div className={style.cardItem}>
          <div className={style.iconCard}>
            <i className={`fa-solid fa-gear ${style.gearIcon}`}></i>
          </div>
          <div className={style.paragraph}>
            <h1>Inside App</h1>
            <p>Get the most out with the latest additions to Settings.</p>
          </div>
        </div>
      </CarouselCard>
    </div>
  );
};

export default CarouselItem;
