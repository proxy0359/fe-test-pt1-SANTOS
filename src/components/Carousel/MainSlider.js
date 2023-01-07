import React from "react";
import Slider from "./Slider";
import style from "./MainSlider.module.css";

const MainSlider = () => {
  return (
    <main className={style.mainSlider}>
      <Slider />
    </main>
  );
};

export default MainSlider;
