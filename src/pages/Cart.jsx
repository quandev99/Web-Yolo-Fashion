import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Helmet from "../components/helmet";
import numberWithCommas from "../utils/numberWithCommas";
import productData from "../assets/fake-data/products";
import Button from "../components/button";
import { Link } from "react-router-dom";
import CartItem from "../components/cart";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProducts, setCartProducts] = useState([]);
  // Calculate and update totalProduct
  const calculatedTotalProduct = cartItems.reduce(
    (total, item) => total + Number(item.quantity),
    0
  );
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // Calculate and update totalPrice
  const calculatedTotalPrice = cartItems.reduce(
    (total, item) => total + Number(item.quantity) * Number(item.price),
    0
  );
  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProduct(calculatedTotalProduct);
    setTotalPrice(calculatedTotalPrice);
  }, [calculatedTotalPrice, calculatedTotalProduct, cartItems]);
  return (
    <Helmet title="giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProduct} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>
              <span>{numberWithCommas(totalPrice)} đ</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">đặt hàng</Button>
            <Link to="/catalog">
              <Button size="block">tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item) => (
            <CartItem item={item} key={item.id}></CartItem>
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
