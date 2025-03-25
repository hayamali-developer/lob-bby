"use client";
import React from "react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";
import ListsHeroSection from "@/components/ListsHeroSection";
import SearchWithFilterSection from "@/components/SearchWithFilterSection";

// بيانات الكروت
const listings = [
  {
    id: 1,
    title: "Venice Holiday for 1 week",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/imgs/listing-1.png",
  },
  {
    id: 2,
    title: "Santorini 3 day trip",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/imgs/listing-2.png",
  },
  {
    id: 3,
    title: "Pup 28 Restaurant",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "/imgs/listing-3.png",
  },
];

const Listings = () => {
  return (
    <>
      <ListsHeroSection title={"My Listing"} isbtn={true} />
      <div className="w-[80%] mx-auto py-10">
        <SearchWithFilterSection />
        <div className="space-y-4">
          {listings.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg flex flex-wrap items-center shadow"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className=""
              />
              <div className=" ml-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="flex px-3 space-x-4">
                <button className="text-gray-500 hover:text-blue-500">
                  <FaEdit className="w-6 h-6" />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FaTrash className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Listings;
