import { lazy } from "react";

const ProductDetails = lazy(() => import("@/components/ProductDetails"));

const page = () => {
  return <ProductDetails />;
};

export default page;
