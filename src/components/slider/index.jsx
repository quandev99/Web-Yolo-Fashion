import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import SliderItem from "./SliderItem";

const Slider = (props) => {
  const data = props.data;
  const timeOut = props.timeOut ? props.timeOut : 3000;
  const [activeSlide, setActiveSlide] = useState(0);
  const nextSlide = useCallback(() => {
    const index = activeSlide + 1 === data.length ? 0 : activeSlide + 1;
    setActiveSlide(index);
  }, [activeSlide, data.length]);
  const prevSlide = () => {
    const index = activeSlide - 1 < 0 ? data.length - 1 : activeSlide - 1;
    setActiveSlide(index);
  };

  useEffect(() => {
    if (props.auto) {
      const slideAuto = setInterval(() => {
        nextSlide();
      }, timeOut);
      return () => {
        clearInterval(slideAuto);
      };
    }
  }, [nextSlide, props.auto, timeOut]);
  return (
    <div className="home-slider">
      {data.map((item, index) => (
        <SliderItem
          key={index}
          item={item}
          active={index === activeSlide}
        ></SliderItem>
      ))}
      {props.control ? (
        <div className="home-slider__control">
          <div className="home-slider__control__item" onClick={prevSlide}>
            <i className="bx bx-chevron-left"></i>
          </div>

          <div className="home-slider__control__item">
            <div className="index">
              {activeSlide + 1}/ {data.length}
            </div>
          </div>

          <div className="home-slider__control__item" onClick={nextSlide}>
            <i className="bx bx-chevron-right"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};
Slider.propTypes = {
  data: PropTypes.array.isRequired,
  active: PropTypes.number,
  control: PropTypes.bool,
  auto: PropTypes.bool,
  timeOut: PropTypes.number,
};

export default Slider;
