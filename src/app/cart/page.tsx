import React, { lazy } from 'react';

const Cart = lazy(() => import('@/components/cart/Cart'));

const page = () => {
  return <Cart />;
};

export default page;
