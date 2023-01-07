import React, { useState } from "react";
import Dots from "./Dots";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import style from "./Slider.module.css";
import SliderImage from "./SliderImage";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderImage.length - 1;

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
  };
  if (!length || length <= 0) {
    return null;
  }
  console.log(length + "this is length");
  console.log(current + "this is current");

  const dotSlide = (index) => {
    setCurrent(index);
  };
  return (
    <section>
      <h1 className={style.title}>Search educational resources</h1>
      <div className={style.slider}>
        <LeftArrow className={style.leftArrow} onClick={prevSlide} />

        {SliderImage.map((slide, index) => {
          return (
            <div
              className={
                index === current
                  ? `${style.slide} ${style.active}`
                  : style.slide
              }
            >
              {index === current && slide.img}
            </div>
          );
        })}

        <RightArrow className={style.rightArrow} onClick={nextSlide} />
      </div>
      <div className={style.dotsContainer}>
        {SliderImage.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? `${style.dot} ${style.dotActive}`
                  : style.dot
              }
              onClick={() => dotSlide(index)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Slider;
