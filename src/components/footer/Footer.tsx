import React from 'react';
import Link from 'next/link';
import { IoStorefrontSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="footer text-white bg-orange-400 h-24 flex justify-center items-center">
      <Link
        href="/"
        className="gap-1 flex items-center text-white !h-8 min-h-8 px-2 rounded-md"
      >
        <IoStorefrontSharp size={40} />
        <h3 className="text-xl text-white font-semibold uppercase">Store</h3>
      </Link>
    </div>
  );
};

export default Footer;
