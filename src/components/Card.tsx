import React from "react";
import { productType } from "../../types";
import { MdAddCircleOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart, setCartProductsToLS } from "@/redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: productType;
}

const Card = (props: Props) => {
  const { id, image, title, price, description } = props.product;

  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(props.product));
    dispatch(setCartProductsToLS());
  };

  return (
    <div className="card">
      <Link href={`products/${id}`}>
        <Image
          src={image}
          width={300}
          height={300}
          alt={title}
          loading="lazy"
          className="product-image"
        />
      </Link>
      <div className="flex justify-between items-center">
        <h4 className="title">{title}</h4>
        <span className="price">{price}$</span>
      </div>
      <p className="description">{description}</p>
      <button
        onClick={() => {
          handleAddToCart();
        }}
        className="btn cart"
      >
        <MdAddCircleOutline size={20} />
        Cart
      </button>
    </div>
  );
};

export default Card;
