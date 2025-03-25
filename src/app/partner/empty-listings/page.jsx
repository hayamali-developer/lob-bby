import ListsHeroSection from "@/components/ListsHeroSection";
import SearchWithFilterSection from "@/components/SearchWithFilterSection";
import Image from "next/image";
import React from "react";

function EmptyListings() {
  return (
    <div className="">
      <ListsHeroSection title={"My Listing"} isbtn={true} />
      <SearchWithFilterSection />
      <div className="min-h-[70vh] flex justify-center items-center">
        <Image
          src="/imgs/empty.png"
          alt="empty Background"
          width={250}
          height={330}
          priority
        />
      </div>
    </div>
  );
}

export default EmptyListings;
