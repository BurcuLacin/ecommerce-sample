import React from 'react';
import { productType } from '../../types';
import { useAppDispatch } from '@/redux/hooks';
import { addToCart, setCartProductsToLS } from '@/redux/slices/cartSlice';
import { addRecentlyViewed } from '@/redux/slices/recentlyViewedSlice';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  product: productType;
}

const Card = (props: Props) => {
  const { id, image, name, price, description } = props.product;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props.product));
    dispatch(setCartProductsToLS());
  };

  return (
    <div
      className="card w-96 bg-base-100 shadow-xl mb-4"
      onClick={() => {
        dispatch(addRecentlyViewed(props.product));
      }}
    >
      <Link href={`products/${id}`}>
        <figure>
          <Image
            src={image}
            width={300}
            height={300}
            alt={name}
            loading="lazy"
            className="product-image"
          />
        </figure>
        <div className="card-body px-2">
          <div className="flex justify-between items-center">
            <h4 className="card-title title">{name}</h4>
          </div>

          <p className="description">{description}</p>
          <div className="card-actions justify-between items-end">
            <span className="price">{price}$</span>
            <button
              onClick={() => {
                handleAddToCart();
              }}
              className="cart btn z-10 "
            >
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
