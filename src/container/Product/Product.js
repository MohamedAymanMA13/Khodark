import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemPrimary } from "../../components/Buttons/AddItem";
import { RemoveItemPrimary } from "../../components/Buttons/RemoveItem";
import { purchasingState } from "../../store/actions/actionCreators/addToCartAction";

import "./Product.css";

const Product = ({ product }, props) => {
  const dispatch = useDispatch();

  useSelector((state) => state.cart);

  return (
    <div key={product._id} className="card">
      <Link
        to={{
          pathname: `/product/${product._id}`,
          state: {
            modal: true,
          },
        }}
      >
        <img src={product.image} alt={product.name} className="medium" />
      </Link>
      <div className="cardBody">
        <Link
          to={{
            pathname: `/product/${product._id}`,
            state: {
              modal: true,
            },
          }}
        >
          <h2>{product.name}</h2>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="quantity">{product.unit}</div>
      
        </div>

        <div className="priceCart">
          <div className="price">{product.price} EGP</div>
          {!product.purchasing ? (
            <button
              onClick={() => dispatch(purchasingState(product._id))}
              className="cartbtn"
            >
              Add to Cart
            </button>
          ) : (
            <div className="btnpurchasing">
              <RemoveItemPrimary product={product} />
              <p className="quantityCounter">{product.quantity}</p>
              <AddItemPrimary product={product} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
