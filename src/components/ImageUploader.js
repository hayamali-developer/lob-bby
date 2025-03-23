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
    <div className="flex gap-4 justify-center flex-wrap items-center">
      {Object.keys(images).map((key) => (
        <div
          key={key}
          className="w-48 h-24 bg-gray-300 flex justify-center items-center rounded-lg cursor-pointer overflow-hidden hover:bg-gray-400 transition"
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
            <p className="text-gray-600">Upload</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageUploader;
