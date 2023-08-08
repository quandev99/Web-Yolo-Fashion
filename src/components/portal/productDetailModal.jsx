import React, { useEffect, useState } from "react";
import productData from "../../assets/fake-data/products";

import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/product-modal/productModalSlice";

import Button from "../button";
import ProductDetail from "../product";
const ProductDetailModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);
  return (
    <div
      className={`product-detail__modal ${
        product === undefined ? "" : "active"
      }`}
    >
      <div className="product-detail__modal__content">
        <ProductDetail product={product} />
        <div className="product-detail__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}>
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
