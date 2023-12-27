'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProductDetail } from '@/redux/slices/fetchProductDetailSlice';
import { productType } from '../../types';
import { API_URL } from '../../constants';
import Loading from '@/components/Loading';
import { MdAddCircleOutline } from 'react-icons/md';
import { addToCart, setCartProductsToLS } from '@/redux/slices/cartSlice';
import Image from 'next/image';
import Breadcrumb from './Breadcrumb';
import RecentlyViewed from './RecentlyViewed';

const ProductDetails = () => {
  const [product, setProduct] = useState<productType | null>(null);

  const pathname = usePathname().split('/');
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.productDetailSlice);

  useEffect(() => {
    dispatch(
      fetchProductDetail(`${API_URL}/products/${pathname.slice(-1).toString()}`)
    );
  }, []);

  useEffect(() => {
    if (state != null) {
      setProduct(state);
    }
  }, [state]);

  return (
    <div className="container">
      <Breadcrumb />
      <div className="w-full flex flex-col justify-center">
        {product != null ? (
          <div className="container flex flex-col-reverse lg:flex-row items-center gap-4 p-4">
            <div className="w-full">
              <Image
                className=" object-cover rounded-md w-96 m-auto"
                priority
                width={500}
                height={500}
                src={product.image}
                alt=""
              />
            </div>
            <div className="w-full lg:w-2/4">
              <div className="flex items-center text-black">
                <span className="mr-1.5">Rating: </span>
                {product.rating}
              </div>
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <h4 className="font-semibold text-orange-500">{product.type}</h4>
              <p className="text-gray-500 my-4">{product.description}</p>
              <span className="text-4xl font-semibold">{product.price}$</span>
              <div>
                <button
                  onClick={() => {
                    dispatch(addToCart(product));
                    dispatch(setCartProductsToLS());
                  }}
                  className="btn cart"
                >
                  <MdAddCircleOutline size={20} />
                  Cart
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-[40rem]  flex flex-col justify-center">
            <Loading />
          </div>
        )}
      </div>
      <RecentlyViewed />
    </div>
  );
};

export default ProductDetails;
