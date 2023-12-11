import { lazy } from "react";

const Banner = lazy(() => import("@/components/home/Banner"));
const Products = lazy(() => import("@/components/home/Products"));

export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <Products />
    </div>
  );
}
