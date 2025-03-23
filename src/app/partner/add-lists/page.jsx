"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineUpload } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import ListsHeroSection from "@/components/ListsHeroSection";
import RangeInput from "@/components/RangeInput";
import ImageUploader from "@/components/ImageUploader";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  location: z.string().min(1, "Location is required"),
  price: z.number().min(0, "Price must be positive"),
  phone: z.string().min(1, "Phone is required"),
  date: z.string().min(1, "Date is required"),
  description: z.string().min(1, "Description is required"),
  images: z.array(z.any()).optional(),
  amenities: z.array(z.string()).optional(),
  category: z.string().min(1, "Category is required"),
  providerLink: z.string().url("Invalid URL"),
});

export default function AddListForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [images, setImages] = useState([]);

  const onSubmit = (data) => {
    console.log({ ...data, images });
  };

  return (
    <>
      <ListsHeroSection title={"Add Lists"} isbtn={false} />
      <div className="w-[75%] mx-auto my-8 bg-gray-100 rounded-xl shadow-lg">
        <h2 className="bg-yellow-500 p-3 text-white font-bold text-lg rounded-t-lg">
          Add List
        </h2>
        <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Name</label>
            </div>
            <input
              type="text"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Location Input */}
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Location</label>
            </div>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* Price Input */}
            <div className="flex h-56 relative items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Price range</label>
              <RangeInput
                label={""}
                className={"w-[40%] absolute top-[8rem]"}
              />
            </div>

            <div className="flex mt-[9rem] items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Photos</label>
            </div>
            <div className="bg-primary p-3 rounded-xl w-fit">Upload</div>
            <ImageUploader />
          </div>
        </form>
      </div>
    </>
  );
}
