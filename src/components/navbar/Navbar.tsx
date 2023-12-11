'use client';
import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { BsCart } from 'react-icons/bs';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCartProducts } from '@/redux/slices/cartSlice';

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
    <nav className="navbar text-gray-900 bg-slate-200 sticky top-0 z-10">
      <div className="w-full h-6 flex justify-between items-center px-4">
        <Link
          href="/"
          className="gap-1 flex items-center !h-8 min-h-8 px-2 rounded-md"
        >
          <SiHomeassistantcommunitystore size={20} />
          <h3 className="text-xl font-semibold uppercase">Burcu' Store</h3>
        </Link>
        <ul className="flex justify-center items-center gap-4">
          <NavLink link="products" />
          <NavLink link="categories" />
        </ul>
        <Link href="/cart" className="main-btn relative">
          <span className="absolute w-4 h-4 top-0 right-0 flex justify-center items-center bg-blue-500 text-white font-semibold rounded-full ">
            {cartProducts.length}
          </span>
          <BsCart size={22} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
