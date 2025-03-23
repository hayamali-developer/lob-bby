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
      <div className="absolute inset-0 w-1/5 bg-black/50 flex items-center pl-10">
        <div className="text-white">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm py-4">Welcome Partner</p>
          {isbtn && (
            <button className="bg-primary text-black w-full  py-2 rounded-2xl mt-2">
              Add List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListsHeroSection;
