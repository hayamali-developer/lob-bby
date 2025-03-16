import Image from "next/image";
import Link from "next/link";
import React from "react";



function ImageCard({
  imageSrc = "/imgs/999.png", // Default fallback image
  imageAlt = "Service Image",
  title,
  topTitle,
  isCentered = false,
  rating,
  discount,
  price,
  link,
  radius = 10, // Fixed typo (was "raduis")
  customClassName,
}) {
  return (
    <div className="col-span-1 mb-3">
      <div className="relative border-0 h-full">
        <div>
          <Image
            width={300}
            height={300}
            src={imageSrc}
            className="rounded-t-lg w-full object-cover"
            alt={imageAlt}
            style={{ borderRadius: `${radius}px` }}
            onError={(e) => {
              e.target.src = "/imgs/999.png"; // Use placeholder if image fails
            }}
          />
          {topTitle && (
            <div className={`absolute top-10 left-5 right-0 p-2 text-white ${customClassName}`}>
              <h3 className="text-2xl text-white font-bold">{topTitle}</h3>
            </div>
          )}
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-2 text-white flex gap-1 h-[30%] w-full bg-black bg-opacity-60 rounded-bl-2xl rounded-br-2xl">
              <h3 className={`text-md font-normal ${isCentered ? "w-full text-center" : "w-[80%]"}`}>
                {title}
              </h3>
              {price && <span className="flex items-end text-nowrap font-bold">{price}</span>}
            </div>
          )}
          {rating && (
            <div className="absolute top-0 right-4 p-1 text-white flex justify-center items-center bg-black bg-opacity-50 rounded-bl-lg rounded-br-lg">
              <span className="px-1">{rating}</span>
              <span className="text-dark">
                <Image width={15} height={15} src="/imgs/star.svg" alt="star" />
              </span>
            </div>
          )}
          {discount && (
            <div className="absolute top-[-10px] left-[-3px] text-white flex justify-center items-center">
              <Image width={35} height={35} src="/imgs/discount.svg" alt="discount" />
              <span className="px-[2px] rounded-lg font-semibold bg-[#f44336]">{discount}</span>
            </div>
          )}
        </div>
        {link && <Link href={link} className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 w-full h-full rounded-xl" />}
      </div>
    </div>
  );
}

export default ImageCard;
