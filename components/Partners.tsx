import Image from "next/image";
import LogoPartners from "./ui/LogoPartners";
import { logoItems } from "@/data/index";

const Partners = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
            Ils nous font confiance
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logoItems.map((item) => (
            <LogoPartners key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
