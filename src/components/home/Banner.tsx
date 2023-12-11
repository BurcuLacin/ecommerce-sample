import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {

  return (
    <Link  href={`products/`}>

    <div className="w-full h-[40rem] bg-gray-200 flex flex-col justify-center">
   
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-4 p-4">
        <div className="w-full lg:w-2/4">
          <h1 className="text-4xl font-semibold">Lorem, ipsum.</h1>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            reiciendis?
          </p>
          <button
            className="btn-outline btn border-gray-900 rounded-md mt-4 h-2 !min-h-[30px] !text-gray-900"
          >
            Products
          </button>
        </div>
        <div className="w-full">
          <div className="relative aspect-video w-full">
            <Image
              className="w-full h-full object-cover rounded-md"
              priority
              quality={20}
              width={400}
              height={400}
              src="/trendyol-v3.webp"
              alt=""
            />
          </div>
          <div className="w-full flex justify-center mt-4"></div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Banner;
