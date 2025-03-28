import React from "react";
import Image from "next/image";

const ListsHeroSection = ({ isbtn, title }) => {
  return (
    <div className="relative w-full h-44 md:h-52 lg:h-64 overflow-hidden">
      {/* صورة الخلفية */}
      <Image
        src="/imgs/top-view-hands-holding-pen-airplane.png"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* المحتوى فوق الصورة */}
      <div className="absolute inset-0 w-1/4 bg-black/75 flex items-center">
        <div className="text-white mx-auto">
          <h2 className="text-[40px] font-bold">{title}</h2>
          <p className="py-4 text-[20px]">Welcome Partner</p>
          {isbtn && (
            <button className="bg-primary text-white w-full  py-3 px-6 rounded-custom mt-2">
              Add List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListsHeroSection;
