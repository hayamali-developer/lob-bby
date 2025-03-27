/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState({
    file1: null,
    file2: null,
    file3: null,
  });

  const fileInputs = {
    file1: useRef(null),
    file2: useRef(null),
    file3: useRef(null),
  };

  const handleImageChange = (event, key) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImages((prev) => ({ ...prev, [key]: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(images).map((key, index) => (
          <div
            key={key}
            className={`bg-gray-300 rounded-[20px] cursor-pointer overflow-hidden hover:bg-gray-400 transition h-[161px] flex justify-center items-center ${
              index === 0 ? "flex-[2]" : "flex-1"
            }`}
            onClick={() => fileInputs[key].current?.click()}
          >
            <input
              type="file"
              ref={fileInputs[key]}
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImageChange(e, key)}
            />
            {images[key] ? (
              <img
                src={images[key]}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="text-gray-600"></p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageUploader;
