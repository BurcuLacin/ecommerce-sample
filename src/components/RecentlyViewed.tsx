'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { productType } from '../../types';
import Loading from './Loading';
import Card from './Card';

const RecentlyViewed = () => {
  const recentlyViewedProducts = useAppSelector(
    (state) => state.recentlyViewedSlice.recentlyViewed
  );
  console.log(recentlyViewedProducts);

  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
      <div className="flex flex-wrap justify-start gap-2  pb-4">
        {recentlyViewedProducts.length !== 0 ? (
          recentlyViewedProducts.map((item: productType) => (
            <Card key={item.id} product={item} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default RecentlyViewed;
