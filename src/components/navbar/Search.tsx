import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchSearchProducts } from '@/redux/slices/searchSlice';
import Link from 'next/link';
import Image from 'next/image';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const results = useAppSelector((state) => state.searchSlice.results);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inputValue.length >= 3) {
      dispatch(fetchSearchProducts(inputValue));
    }
  }, [inputValue, dispatch]);

  return (
    <div className="relative">
      <div className="w-full">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="input input-bordered w-24 md:w-auto text-gray-900 bg-gray-200"
          />
        </div>
        {/* <input
         
          className="input input-bordered w-full text-gray-900 bg-gray-200"
        /> */}
      </div>
      {inputValue.length >= 3 && results.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 mt-1 max-h-60 overflow-auto">
          {results.map((item) => (
            <ul>
              <Link href={`products/${item.id}`}>
                <li className="flex justify-between">
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.name}
                    loading="lazy"
                    className="mr-2"
                  />
                  <span>{item.name}</span>{' '}
                </li>
              </Link>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
