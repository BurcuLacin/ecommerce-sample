import React, { lazy } from 'react';

const Products = lazy(() => import('@/components/Products'));

const page = () => {
  return <Products />;
};

export default page;
