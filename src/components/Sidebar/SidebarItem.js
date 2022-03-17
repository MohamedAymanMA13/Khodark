import React from 'react'
import { AddItemTertiary } from '../Buttons/AddItem';
import { RemoveItemTertiary } from '../Buttons/RemoveItem';

const SidebarItem = ({ vegetable }) => {
    return (
        <div className="cart__item">
            <img className="cart__item--img" src={vegetable.image} alt={vegetable.name} />
            <div className="cart--item--details">
                <h6>{vegetable.name}</h6>
                <p className="quantity__cart--ind">{vegetable.unit}</p>
                <div className="btnpurchasing btnpurchasing__finalcart">
                    <div className="btnpurchasing__cart">
                        <RemoveItemTertiary product={vegetable} />
                        <p className="tertiary__counter">{vegetable.quantity}</p>
                        <AddItemTertiary product={vegetable} />
                        <p className="multiplication__cart">&#10006;</p>
                        <p className="priceitem__cart">{vegetable.price} EGP</p>
                    </div>
                    <div className="priceitem__total">
                        <p>{vegetable.price * vegetable.quantity} EGP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarItem;
