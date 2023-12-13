"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/redux/slices/fetchProductsSlice";
import React, { useEffect, useState } from "react";
import { productType } from "../../../types";
import { API_URL } from "../../../constants";
import Loading from "../Loading";
import Card from "../Card";

const PopulerProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (state) => state.productsSlice.products as productType[],
  );

  const [popularProducts, setPopularProducts] = useState<productType[]>([]);

  useEffect(() => {
    dispatch(fetchProducts(API_URL));
  }, []);
  useEffect(() => {
    if (products.length != 0) {
      const sortedByPopularity = [...products].sort(
        (a, b) => b.popularity - a.popularity,
      );
      setPopularProducts(sortedByPopularity.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="container my-8 pb-8">
      <h2 className="text-xl font-bold mb-4">Popular Products</h2>
      <div className="flex flex-wrap justify-between gap-2 py-4">
        {popularProducts.length !== 0 ? (
          popularProducts.map((item: productType) => (
            <Card key={item.id} product={item} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PopulerProducts;
