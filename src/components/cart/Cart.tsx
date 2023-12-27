'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  clearCart,
  setCartProducts,
  setCartProductsToLS,
} from '@/redux/slices/cartSlice';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Loading from '../Loading';
import CartProduct from './CartProduct';

const Cart = () => {
  const cartProducts = useAppSelector((state) => state.cartSlice.products);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    const cartProductsFrom = localStorage.getItem('cartProducts');
    if (cartProductsFrom != null) {
      dispatch(setCartProducts(JSON.parse(cartProductsFrom)));
    }
    handleLoading();
  }, []);

  useEffect(() => {
    dispatch(setCartProductsToLS());
  }, [cartProducts]);

  const getCartTotal = (): number => {
    let total = 0;

    cartProducts.map((item) => (total += item.count * item.product.price));

    return Number(total.toFixed(0));
  };

  return (
    <div className="mt-8 h-[calc(100vh-160px)]">
      {!isLoading ? (
        cartProducts.length > 0 ? (
          <>
            <div className="w-full flex p-4">
              <button
                onClick={() => {
                  dispatch(clearCart());
                }}
                className="ml-auto hover:text-red-500"
              >
                <AiFillDelete size={25} />
              </button>
            </div>
            <div className="overflow-x-auto px-4">
              <table className="table bg-[#2a303c] !text-white w-full">
                <thead className="!text-white">
                  <tr>
                    <th>Product</th>
                    <th className="hidden md:table-cell">Info</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((item) => (
                    <CartProduct
                      key={item.product.id}
                      product={item.product}
                      count={item.count}
                    />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 mx-4 max-w-[300px]">
              <div className="p-4 [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div>h3]:!text-gray-300 [&>div>h3]:uppercase [&>div>span]:text-white [&>div>h3]:font-semibold [&>div>span]:font-semibold bg-[#2a303c] rounded-lg">
                <div className="">
                  <h3>Count:</h3>
                  <span>{cartProducts.length}</span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl">Total:</h3>
                  <span className="text-xl">{getCartTotal()}$</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2 className="text-center">Your cart is empty!</h2>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Cart;
