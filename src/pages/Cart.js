import React from "react";
import CartItems from "../components/cart/CartItems";
import InnerPageBanner from "../components/common/InnerPageBanner";

const Cart = () => {
  return (
    <>
      <InnerPageBanner title="Cart" />
      <CartItems />
    </>
  );
};

export default Cart;
