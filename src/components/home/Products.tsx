"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/redux/slices/fetchProductsSlice";
import { fetchCategories } from "@/redux/slices/fetchCategoriesSlice";
import React, { useEffect, useState } from "react";
import { productType, categoriesType } from "../../../types";
import { API_URL } from "../../../constants";
import Loading from "../Loading";
import Card from "../Card";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [sortCriteria, setSortCriteria] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsSlice.products);
  const categories = useAppSelector(
    (state) => state.categoriesSlice.categories,
  );

  const sortProducts = (products: productType[], criteria: string) => {
    switch (criteria) {
      case "priceAsc":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDesc":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return [...products];
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <button
        key={number}
        onClick={() => setCurrentPage(number)}
        className="join-item btn w-12 h-12 m-0"
      >
        {number}
      </button>
    );
  });

  useEffect(() => {
    if (category == "all") {
      dispatch(fetchProducts(API_URL));
    } else {
      dispatch(fetchProducts(`${API_URL}/category/${category}`));
      debugger;
    }
  }, [category, dispatch]);

  useEffect(() => {
    dispatch(fetchCategories(API_URL));
  }, []);

  return (
    <div className="container my-8 pb-8">
      {/* <div>
        <ul className=" px-4">
          {categories.map((item: categoriesType) => (
            <li
              onClick={() => {
                setCategory(item.id);
              }}
              className={`category-btn ${item.id == category ? "active" : ""}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div> */}

      <div className="flex justify-end">
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="select select-bordered bg-gray-100 outline-none w-full max-w-xs"
        >
          <option value="">Popularity</option>
          <option value="priceAsc">Increasing Price</option>
          <option value="priceDesc">Decreasing Price</option>
        </select>
      </div>

      <div className="flex flex-wrap justify-between gap-2 py-4">
        {currentProducts.length !== 0 ? (
          sortProducts(currentProducts, sortCriteria).map(
            (item: productType) => <Card key={item.id} product={item} />,
          )
        ) : (
          <Loading />
        )}
      </div>
      <div className="flex justify-center">
        <div className="join">{renderPageNumbers}</div>
      </div>
    </div>
  );
};

export default Products;
