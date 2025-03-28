"use client";
import ImageCard from "@/components/ImageCard";
import Image from "next/image";
import React from "react";

const initialFavourites = [
  {
    id: 1,
    rating: 4.2,
    price: 15000,
    title: "3 days Greece wedding for 50 guests",
    image: "/imgs/999.png",
  },
  {
    id: 2,
    rating: 4.2,
    price: 2546,
    title: "wedding Venues",
    image: "/imgs/999.png",
  },
];

function FavouritLists() {
  return (
    <>
      <div className="w-full bg-primary text-white p-4 text-lg font-semibold">
        <h1 className="container text-[24px] mx-auto">Favourite List</h1>
      </div>

      <div className="container mx-auto my-4">
        {initialFavourites.length > 0 ? (
          initialFavourites.map((item, index) => (
            <div key={item.id}>
              <div className={`flex justify-between items-center py-4 `}>
                <ImageCard
                  rating={item.rating}
                  price={item.price}
                  title={item.title}
                  imageSrc={item.image}
                  radius={20}
                />

                <button className="">
                  <Image
                    src="/imgs/Component 3.svg"
                    alt="Remove"
                    width={44}
                    height={38}
                    className="cursor-pointer"
                  />
                </button>
              </div>
              <hr
                className={`border-t border-gray-300 ${
                  index !== initialFavourites.length - 1
                    ? "absolute left-0 w-full"
                    : "hidden"
                }`}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No favourites found</p>
        )}
      </div>
    </>
  );
}

export default FavouritLists;
