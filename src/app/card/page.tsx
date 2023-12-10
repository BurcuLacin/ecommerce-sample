import React, { lazy } from "react";

const CartCom = lazy(() => import("@/components/card/Cart"));

const page = () => {
  return <CartCom />;
};

export default page;
