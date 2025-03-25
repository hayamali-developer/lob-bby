"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import ListsHeroSection from "@/components/ListsHeroSection";
import RangeInput from "@/components/RangeInput";
import ImageUploader from "@/components/ImageUploader";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");

  const selectedAmenities = watch("amenities", []);
  const handleCheckboxChange = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((item) => item !== amenity)
      : [...selectedAmenities, amenity];

    setValue("amenities", updatedAmenities, { shouldValidate: true });
  };
  return (
    <>
      <ListsHeroSection title={"Add Lists"} isbtn={false} />
      <div className="w-[75%] mx-auto my-8 bg-gray-100 rounded-xl shadow-lg">
        <h2 className="bg-primary p-3 text-white font-bold text-lg rounded-t-lg">
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
          <div className="">
            <div className="flex items-center justify-between my-8">
              {/* Phone Number */}
              <div className="">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                  <label className="text-gray-700 font-medium">
                    Phone Number
                  </label>
                </div>
                <PhoneInput
                  country={"eg"}
                  value={phone}
                  onChange={setPhone}
                  inputClass="!w-full ps-3 p-5 !border !border-gray-300 !rounded-xl !focus:outline-none !focus:ring-2 !focus:ring-primary"
                  containerClass="w-full"
                />
              </div>

              {/* Date Picker */}
              <div className="">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                  <label className="text-gray-700 font-medium">Date</label>
                </div>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  dateFormat="yyyy-MM-dd"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700 font-medium">Description</label>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border resize-none overflow-auto rounded-lg focus:outline-none focus:ring-2 focus:ring-yprimary"
                rows="4"
              ></textarea>
            </div>

            {/* Location */}
            <div className="mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-6 h-3 bg-primary rounded-2xl"></div>
                <label className="text-gray-700 font-medium">Near by</label>
              </div>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Anemites</label>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedAmenities.includes(amenity)}
                    onChange={() => handleCheckboxChange(amenity)}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary"
                  />
                  <span className="text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>

            {errors.amenities && (
              <p className="text-red-500 text-sm mt-2">
                {errors.amenities.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Opening Time</label>
            </div>
            <div className="flex space-x-3">
              {/* Hour Selector */}
              <select
                className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                value={hour}
                onChange={(e) => setHour(e.target.value)}
              >
                <option value="" disabled>
                  Hour
                </option>
                {[...Array(24).keys()].map((h) => (
                  <option key={h} value={h}>
                    {h.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>

              {/* Minute Selector */}
              <select
                className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary"
                value={minute}
                onChange={(e) => setMinute(e.target.value)}
              >
                <option value="" disabled>
                  Minutes
                </option>
                {[0, 15, 30, 45].map((m) => (
                  <option key={m} value={m}>
                    {m.toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Category</label>
            </div>
            <select
              className=" w-1/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("category")}
            >
              <option value="">Select a category</option>
              <option value="restaurant">Restaurant</option>
              <option value="cafe">Cafe</option>
              <option value="hotel">Hotel</option>
              <option value="resort">Resort</option>
            </select>
          </div>
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              <div className="w-6 h-3 bg-primary rounded-2xl"></div>
              <label className="text-gray-700 font-medium">Provider Link</label>
            </div>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="bg-primary text-white py-2 px-6 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
