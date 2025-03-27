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
      <div className="container mx-auto py-10">
        <SearchWithFilterSection />
        <div className="space-y-4 mt-6">
          {listings.length > 0 ? (
            listings.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 rounded-custom flex flex-col md:flex-row items-center gap-4"
              >
                <div className="w-full md:w-[300px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={200}
                    className=" object-cover w-full"
                  />
                </div>

                <div className="flex- text-center md:text-left">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-600 line-clamp-2 md:line-clamp-3">
                    {item.description}
                  </p>
                </div>

                <div className="flex mx-auto space-x-8">
                  <div>
                    <Image
                      src="/imgs/edit.svg"
                      alt="Edit"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                    <p className="font-bold text-lg pt-2">Edit</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/imgs/remove.svg"
                      alt="Remove"
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />

                    <p className="font-bold text-lg pt-2">Remove</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="min-h-[70vh] flex justify-center items-center">
              <Image
                src="/imgs/empty.svg"
                alt="empty Background"
                width={250}
                height={330}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Listings;
