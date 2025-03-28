"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import ListsHeroSection from "@/components/ListsHeroSection";
import RangeInput from "@/components/RangeInput";
import ImageUploader from "@/components/ImageUploader";
import DatePicker from "@/components/DatePicker";
import AmenitiesCheckbox from "@/components/AmenitiesCheckbox";

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
  amenities: z.array(z.string()).min(1, "Please select at least one amenity"),
});
const amenitiesList = [
  "Pool",
  "Balcony",
  "Parking",
  "Washing machine",
  "Internet",
  "Air conditioning",
  "Pet friendly",
  "Garden",
];
export default function AddListForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const [images, setImages] = useState([]);

  const onSubmit = (data) => {
    console.log({ ...data, images });
  };
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  return (
    <>
      <ListsHeroSection title={"Add Lists"} isbtn={false} />
      <div className="container border mx-auto my-8 bg-[#FCFCFC] rounded-custom text-gray-700 ">
        <h2 className="bg-primary p-3 text-white font-bold text-[35px] rounded-t-[20px]">
          Add List
        </h2>
        <form className="p-4 mb-12 px-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 ms-8 text-[24px] font-medium">
                Name
              </label>
            </div>
            <input
              type="text"
              {...register("name")}
              className="md:w-[480px] h-[64px] w-full ms-8 p-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <p className="text-red-500 ms-8">{errors.name.message}</p>
            )}

            <div className="space-y-6">
              <div className="flex items-center space-x-8">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700 text-[24px] ms-8 font-medium">
                  Location
                </label>
              </div>
              <input
                type="text"
                {...register("location")}
                className="md:w-[480px] h-[64px] w-full ms-8 p-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.location && (
                <p className="text-red-500 ms-8">{errors.location.message}</p>
              )}
            </div>

            {/* Price Input */}
            <div className="space-y-6">
              <div className="flex items-center space-x-8">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700 text-[24px]">Price range</label>
              </div>
              <RangeInput
                max={200000}
                label={""}
                className={"w-full md:w-1/3 ms-6"}
              />
            </div>

            <div className="flex mt-[9rem] items-center space-x-8">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 text-[24px]">Photos</label>
            </div>
            <div className="ms-8">
              <div className="bg-primary mb-6 p-3 flex justify-center items-center text-white rounded-xl w-[152px] h-[64px]">
                <h3 className="text-[24px]">Upload</h3>
              </div>
              <ImageUploader />
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between flex-wrap gap-8 my-8">
              {/* Phone Number */}
              <div className="">
                <div className="flex mb-3 items-center space-x-8">
                  <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                  <label className="text-gray-700 text-[24px]">
                    Phone Number
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="w-[100px] h-[64px] border border-gray-300 rounded-custom px-3 text-center focus:outline-none focus:ring-2 focus:ring-primary"
                  />

                  <input
                    type="text"
                    {...register("phone")}
                    className="md:w-[290px] h-[64px] w-full ms-8 p-2 border border-gray-300 rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.phone && (
                    <p className="text-red-500 ms-8">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Date Picker */}
              <div className="mb-3">
                <div className="flex items-center space-x-8">
                  <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                  <label className="text-gray-700 text-[24px]">Date</label>
                </div>
                <Controller
                  control={control}
                  name="date"
                  render={({ field }) => (
                    <DatePicker value={field.value} onChange={field.onChange} />
                  )}
                />
                {errors.date && (
                  <p className="text-red-500 ms-8">{errors.date.message}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <div className="flex mb-3 items-center space-x-8">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700  text-[24px]">
                  Description
                </label>
              </div>
              <div className="ms-8">
                <textarea
                  value={description}
                  {...register("description")}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-[286px] p-2 border resize-none overflow-hidden rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
                  // rows="4"
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 ms-8">
                    {errors.description.message}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="mb-7">
              <div className="flex mb-3 items-center space-x-8">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700  text-[24px]">Near by</label>
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-[64px] rounded-custom p-2 border focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="mb-8">
            <div className="flex mb-3 items-center space-x-8">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700  text-[24px]">Animates</label>
            </div>
            <AmenitiesCheckbox />

            {errors.amenities && (
              <p className="text-red-500 text-sm mt-2">
                {errors.amenities.message}
              </p>
            )}
          </div>
          <div className="mb-8">
            <div className="flex mb-3 items-center space-x-8">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700  text-[24px]">Opening Time</label>
            </div>
            <div className="flex space-x-6">
              <div className="relative">
                <select className="w-[161px] rounded-custom h-[64px] border border-gray-300  px-4 pr-10 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value=""></option>
                  {[...Array(24).keys()].map((h) => {
                    return (
                      <option key={h} value={h}>
                        {h.toString().padStart(2, "0")}
                      </option>
                    );
                  })}
                </select>
                <img
                  src="/imgs/Polygon 10.svg"
                  alt="Arrow"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 pointer-events-none"
                />
              </div>
              <div className="relative">
                <select className="w-[161px] rounded-custom h-[64px] border border-gray-300 px-4 pr-10 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value=""></option>
                  {[...Array(24).keys()].map((h) => {
                    return (
                      <option key={h} value={h}>
                        {h.toString().padStart(2, "0")}
                      </option>
                    );
                  })}
                </select>
                <img
                  src="/imgs/Polygon 10.svg"
                  alt="Arrow"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="my-10">
            <div className="flex mb-3 items-center space-x-8">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700  text-[24px]">Categories</label>
            </div>
            <div className="relative w-full md:w-[430px]">
              <select
                {...register("category")}
                className="w-full h-[64px] border border-gray-300 rounded-custom px-4 pr-12 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value=""></option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
              </select>
              {errors.category && (
                <p className="text-red-500 ms-8">{errors.category.message}</p>
              )}
              <img
                src="/imgs/Polygon 10.svg"
                alt="Arrow"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex mb-3 items-center space-x-8">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 text-[24px]">Provide Link</label>
            </div>
            <input
              type="text"
              className="w-full h-[64px] p-2 border rounded-custom focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("providerLink")}
            />
            {errors.providerLink && (
              <p className="text-red-500 text-sm mt-2">
                {errors.providerLink.message}
              </p>
            )}
          </div>
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-primary mt-3 text-[24px] rounded-custom text-white py-2 px-6"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
