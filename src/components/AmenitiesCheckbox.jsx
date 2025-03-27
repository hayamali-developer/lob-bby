import React, { useState } from "react";

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

function AmenitiesCheckbox() {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3">
      {amenitiesList.map((amenity) => (
        <label
          key={amenity}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selectedAmenities.includes(amenity)}
            onChange={() => handleCheckboxChange(amenity)}
            className="hidden"
          />
          <div
            className={`w-[50px] h-[46px] flex items-center justify-center rounded-lg transition-all duration-300 ${
              selectedAmenities.includes(amenity)
                ? "bg-yellow-400 border-yellow-500"
                : "bg-gray-200 border-gray-300"
            }`}
          >
            {selectedAmenities.includes(amenity) && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M20.292 5.293a1 1 0 011.416 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 14.586l9.292-9.293z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
          <span className="text-gray-700">{amenity}</span>
        </label>
      ))}
    </div>
  );
}

export default AmenitiesCheckbox;
