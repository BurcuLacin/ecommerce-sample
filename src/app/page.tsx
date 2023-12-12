import { lazy } from 'react';

const Banner = lazy(() => import('@/components/home/Banner'));
const PopularProducts = lazy(() => import('@/components/home/Popularproducts'));

export default function Home() {
  return (
    <div className="mx-auto">
      <Banner />
      <PopularProducts />
    </div>
  );
}
