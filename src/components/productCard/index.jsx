import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../button";
import numberWithCommas from "../../utils/numberWithCommas";
const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/catalog/${props.slug}`}>
        <div className="product-card__image">
          <img src={props.image01} alt="" />
          <img src={props.image02} alt="" />
        </div>
        <h3 className="product-card__name">{props.title}</h3>
        <h3 className="product-card__price">
          {numberWithCommas(props.price)}
          <div className="product-card__price__old">
            <del>{numberWithCommas(399000)}</del>
          </div>
        </h3>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true}>
          Chi tiết sản phẩm
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image01: PropTypes.string.isRequired,
  image02: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
