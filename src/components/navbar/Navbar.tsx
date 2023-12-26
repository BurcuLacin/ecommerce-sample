'use client';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCart } from 'react-icons/bs';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCartProducts } from '@/redux/slices/cartSlice';
import Search from './Search';

const Navbar = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector((state) => state.cartSlice.products);

  useEffect(() => {
    const cartProductsFromLS = localStorage.getItem('cartProducts');
    if (cartProductsFromLS != null) {
      dispatch(setCartProducts(JSON.parse(cartProductsFromLS)));
    }
  }, []);

  return (
    <div className="navbar text-gray-900 bg-orange-400 sticky top-0 z-20">
      <div className="flex-1">
        <Link
          href="/"
          className="gap-1 flex items-center text-white !h-8 min-h-8 px-2 rounded-md"
        >
          <IoStorefrontSharp size={40} />
          <h3 className="text-xl text-white font-semibold uppercase">Store</h3>
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Search />
        <Link href="/cart" className="main-btn relative text-white">
          <span className="absolute w-4 h-4 top-0 right-0 flex justify-center items-center bg-blue-500 text-white font-semibold rounded-full ">
            {cartProducts.length}
          </span>
          <BsCart size={22} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
