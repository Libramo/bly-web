import React from "react";
import FooterItem from "./FooterItem";

const FooterBlockItem = ({ title, items }: { title: string; items: any }) => {
  return (
    <div className="space-y-5">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item: any) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default FooterBlockItem;
