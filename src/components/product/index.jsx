import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import Button from "../button";
import numberWithCommas from "../../utils/numberWithCommas";

const ProductDetail = (props) => {
  const navigate = useNavigate();
  let product = props?.product;
  console.log(product);
  if (product === undefined)
    product = {
      price: 0,
      title: "",
      slug: "",
      colors: [],
      size: [],
      quantity: 0,
    };
  const [previewImg, setPreviewImg] = useState(product?.image01);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);
  const check = () => {
    let res = true;
    if (color == undefined) {
      alert("Vui lòng chọn màu!");
      return false;
    }
    if (size == undefined) {
      alert("Vui lòng chọn kích cỡ! ");
      return false;
    }
    return true;
  };
  const addToCart = () => {
    if (check()) {
      alert("Add to cart", { color, size, quantity });
      console.log({ color, size, quantity });
    }
  };
  const gotoCart = () => {
    if (check()) {
      navigate("/cart");
      console.log({ color, size, quantity });
    }
  };
  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          <div
            className="product__images__list_item"
            onClick={() => setPreviewImg(product.image01)}
          >
            <img src={product.image01} alt="" />
          </div>
          <div
            className="product__images__list_item"
            onClick={() => setPreviewImg(product.image02)}
          >
            <img src={product.image02} alt="" />
          </div>
        </div>
        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description  ${
            descriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product-description__title">chi tiết sản phẩm</div>
          <div
            className="product-description_content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">kích cỡ</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ hàng</Button>
          <Button onClick={() => gotoCart()}>mua ngay</Button>
        </div>
      </div>
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product-description__title">chi tiết sản phẩm</div>
        <div
          className="product-description_content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product-description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductDetail;
