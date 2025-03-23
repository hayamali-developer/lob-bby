"use client";
import ImageCard from "@/components/ImageCard";
import React from "react";
import { FiX } from "react-icons/fi";

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
        <h1 className="w-[80%] mx-auto">Favourite List</h1>
      </div>

      <div className="w-[80%] mx-auto my-4">
        {initialFavourites.length > 0 ? (
          initialFavourites.map((item, index) => (
            <div
              key={item.id}
              className={`flex justify-between items-center py-4 ${
                index !== initialFavourites.length - 1 ? "border-b" : ""
              }`}
            >
              <ImageCard
                rating={item.rating}
                price={item.price}
                title={item.title}
                imageSrc={item.image}
              />

              <button className="text-gray-500 hover:text-red-500 text-2xl">
                <FiX />
              </button>
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
