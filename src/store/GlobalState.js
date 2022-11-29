import React, { useReducer } from 'react';

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from './types';
import Context from './Context';
import Reducer from './Reducer';

export default function GlobalState(props) {
  const products = [
    {
      id: 0,
      title: 'Chair',
      imageURL:
        'https://cdn.connox.nl/m/100030/285979/media/Vitra/Panton-Chair/Vitra-Panton-Chair-soft-mint.jpg',
      price: 79,
    },
    {
      id: 1,
      title: 'Flower pot',
      imageURL:
        'https://royaldesign.com/image/2/ernst-flower-pot-with-dish-rustic-terracotta-1',
      price: 39,
    },
    {
      id: 2,
      title: 'Table',
      imageURL:
        'https://www.ikea.com/nl/en/images/products/lisabo-table-black__0737106_pe740884_s5.jpg?f=s',
      price: 89,
    },
  ];

  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addProductToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  // # remove product from cart
  const removeProductFromCart = (productID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: productID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        products: products,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
