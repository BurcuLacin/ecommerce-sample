import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchSearchProducts } from '@/redux/slices/searchSlice';
import Card from '../Card';

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
        <input
          type="text"
          placeholder="Ürün, kategori veya marka ara"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input input-bordered w-full text-gray-900 bg-gray-200"
        />
      </div>
      {inputValue.length >= 3 && results.length > 0 && (
        <div className="absolute z-10 w-full bg-white border border-gray-200 mt-1 max-h-60 overflow-auto">
          {results.map((item) => (
            <Card key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
