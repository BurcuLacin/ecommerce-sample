'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchProducts } from '@/redux/slices/fetchProductsSlice';
import { fetchCategories } from '@/redux/slices/fetchCategoriesSlice';
import React, { useEffect, useState } from 'react';
import { productType, categoriesType } from '../../types';
import { API_URL } from '../../constants';
import Loading from './Loading';
import Card from './Card';
import Breadcrumb from './Breadcrumb';

const Products = () => {
  const [category, setCategory] = useState(0);

  const [sortCriteria, setSortCriteria] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsSlice.products);
  const [productsPerPage, setProductsPerPage] = useState(12);
  const categories = useAppSelector(
    (state) => state.categoriesSlice.categories
  );

  const sortProducts = (products: productType[], criteria: string) => {
    switch (criteria) {
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return [...products];
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  debugger;

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
    if (category == 0) {
      dispatch(fetchProducts(API_URL));
    } else {
      dispatch(fetchProducts(`${API_URL}/category/${category}`));
    }
  }, [category]);

  useEffect(() => {
    dispatch(fetchCategories(API_URL));
  }, []);

  return (
    <div className="container my-8 pb-8">
      <Breadcrumb />
      <div className="flex justify-end pb-4">
        <select
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="select select-bordered bg-gray-100 outline-none w-full max-w-xs"
        >
          <option value="">Sort</option>
          <option value="">Popularity</option>
          <option value="priceAsc">Increasing Price</option>
          <option value="priceDesc">Decreasing Price</option>
        </select>
      </div>
      <div className="w-full flex">
        <div className=" filters pr-8">
          <ul className="w-48 text-sm font-medium bg-white border border-gray-200 rounded-lg ">
            {categories.map((item: categoriesType) => (
              <li
                onClick={() => {
                  setCategory(item.id);
                }}
                className={`category-btn w-full px-4 py-2 border-b border-gray-200 ${
                  item.id == category ? 'active' : ''
                }`}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="flex flex-wrap justify-between  pb-4">
            {currentProducts.length !== 0 ? (
              sortProducts(currentProducts, sortCriteria).map(
                (item: productType) => <Card key={item.id} product={item} />
              )
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="join">{renderPageNumbers}</div>
      </div>
    </div>
  );
};

export default Products;
