import React from "react";
import { usePathname } from "next/navigation";
import PageLink from "@/app/products/[id]/PageLink";

const Breadcrumb = () => {
  const pathname = usePathname().split("/");
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {pathname.map((_, index) => (
          <PageLink key={index} link={pathname.slice(0, index + 1)} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
