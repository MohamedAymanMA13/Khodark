import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DeliveryAddress from "../../components/CheckoutForm/DeliveryAddress/DeliveryAddess";
import "./Checkout.css";
import CheckOutOrder from "../../components/CheckoutForm/CheckoutOrder/CheckoutOrder";

import "./Checkout.css";

const Checkout = (props) => {

  const cart = useSelector((state) => state.cart);

  const [checkoutStep, setCheckoutStep] = useState("checkout-step--active");


  useEffect(()=>{
      if (cart.cartData.totalQuantity === 0) {
      props.history.push("/");
    }
  },[])
  const taxes = (cart.cartData.cartTotal * 5) / 100;

  const shipping = 0;

  const totalPay = cart.cartData.cartTotal + shipping + taxes;

  const dollars = cart.cartData.cartTotal * 0.013;



  const addressChange = () => {
    setCheckoutStep("checkout-step--active");
  };

  return (
    <div className="checkout-wrapper wrapper">
      <div className="checkout">
        <DeliveryAddress
          checkoutStep={checkoutStep}
          addressChange={addressChange}
        />
      </div>
      <CheckOutOrder />
    </div>
  );
};

export default Checkout;
