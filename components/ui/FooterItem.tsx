import React from "react";
import Link from "next/link";

const FooterItem = ({ text, link }: { text: string; link: string }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-blue-600 dark:hover:text-blue-500"
      >
        {text}
      </Link>
    </li>
  );
};

export default FooterItem;
