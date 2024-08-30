import React from "react";
import Image from "next/image";

const LogoPartners = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div className="p-4 sm:p-5 rounded-lg border border-gray-100 dark:border-gray-900 group">
      <Image
        src={logo}
        width={100}
        height={60}
        alt={name}
        className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
      />
    </div>
  );
};
export default LogoPartners;
