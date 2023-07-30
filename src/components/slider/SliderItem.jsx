import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button";

const SliderItem = ({ item, active }) => (
  <>
    <div className={`home-slider__item ${active ? "active" : ""}`}>
      <div className="home-slider__item__info">
        <div className={`home-slider__item__info__title color-${item.color}`}>
          <span>{item.title}</span>
        </div>
        <div className="home-slider__item__info__description">
          <span>{item.description}</span>
        </div>
        <div className="home-slider__item__info__btn">
          <Link to={item.path}>
            <Button
              backgroundColor={item.color}
              icon={"bx bx-cart"}
              animate={true}
            >
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </div>
      <div className="home-slider__item__image">
        <div className={`shape bg-${item.color}`}></div>
        <img src={item.img} alt={item.title} />
      </div>
    </div>
  </>
);

SliderItem.propTypes = {};

export default SliderItem;
