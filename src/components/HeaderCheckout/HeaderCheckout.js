import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./HeaderCheckout.css";

const HeaderCheckout = () => {



  return (
    <header className="row header-checkout">
      <div>
        <Link className="brand" to="/">
          VeggiesShop
        </Link>
      </div>
      <div className="header-item header-item--checkout-promise">
        <div className="checkout-promise-item">
        Hi please complete your checkout
        </div>
      </div>
    </header>
  );
};

export default HeaderCheckout;
