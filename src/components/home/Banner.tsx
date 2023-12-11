"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RxDot, RxDotFilled } from "react-icons/rx";
import Loading from "../Loading";
import { productType } from "../../../types";

const Banner = () => {
  // const [product, setProduct] = useState<productType | null>(null);

  // const [imageToShow, setImageToShow] = useState<number>(-1);
  // const state = useAppSelector(state => state.productSlice);
  // const dispatch = useAppDispatch();

  // const handleSelectImage = (e: string) => {
  // 	if (product != null) {
  // 		if (e == "right" && imageToShow < product.images.length - 1) {
  // 			setImageToShow(prev => prev + 1);
  // 		} else if (e == "left" && imageToShow > -1) {
  // 			setImageToShow(prev => prev - 1);
  // 		}
  // 	}
  // };

  // useEffect(() => {
  // 	const randomNumber = Math.floor(Math.random() * 30);
  // 	dispatch(fetchProduct(`${API_URS_SINGLE}/${randomNumber}`));
  // }, []);

  // useEffect(() => {
  // 	if (state != null) {
  // 		setProduct(state);
  // 	}
  // }, [state]);

  return (
    <div className="w-full h-[40rem] bg-gray-200 flex flex-col justify-center">
      (
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-4 p-4">
        <div className="w-full lg:w-2/4">
          <h1 className="text-4xl font-semibold">Lorem, ipsum.</h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            reiciendis?
          </p>
          <Link
            href={`products/`}
            className="btn-outline btn border-gray-900 rounded-md mt-4 h-2 !min-h-[30px] !text-gray-900"
          >
            Details
          </Link>
        </div>
        <div className="w-full">
          <div className="relative aspect-video w-full">
            <Image
              className="w-full h-full object-cover rounded-md"
              priority
              quality={20}
              width={400}
              height={400}
              src="../../../public/vercel.svg"
              alt=""
            />
          </div>
          <div className="w-full flex justify-center mt-4"></div>
        </div>
      </div>
      )
    </div>
  );
};

export default Banner;
