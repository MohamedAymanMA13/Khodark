import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AddItemPrimary } from "../../components/Buttons/AddItem";
import { RemoveItemPrimary } from "../../components/Buttons/RemoveItem";
import { purchasingState } from "../../store/actions/actionCreators/addToCartAction";
import { signInOpen } from "../../store/actions/actionCreators/signInAction";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../../store/actions/actionCreators/wishlistAction";

import "./Product.css";

const Product = ({ product }, props) => {
  const dispatch = useDispatch();

  useSelector((state) => state.cart);
  const fullWishlist = useSelector((state) => state.fullWishlist);
  const userSignIn = useSelector((state) => state.userSignIn);

  const { wishlist } = fullWishlist;
  const { userInfo } = userSignIn;

  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  useEffect(() => {
    wishlist &&
      wishlist.map((x) => {
        if (x.product === product._id) {
          setInWishlist(true);
        }
        return true;
      });
  }, [product, wishlist]);

  useEffect(() => {
    !wishlist && setInWishlist(false);
  }, [product, wishlist]);

  useEffect(() => {
    if (userInfo) {
      dispatch(getWishlist());
    }
  }, [userInfo, dispatch]);

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
