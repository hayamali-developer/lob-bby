import Image from "next/image";
import React from "react";

const CustomPopup = ({ title, image, buttonText, onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-custom shadow-lg p-6 w-[350px] md:w-[460px] relative text-center">
        {onClose && (
          <button
            className="absolute top-3 right-3 text-primary text-2xl font-bold"
            onClick={onClose}
          >
            <Image
              src="/imgs/close 1.svg"
              alt="Remove"
              width={27}
              height={27}
              className="cursor-pointer m-2"
            />
          </button>
        )}

        <h2 className="text-[35px] font-bold mb-4">{title}</h2>

        <img
          src={image}
          alt="popup"
          className="mx-auto mb-6 h-[192px] object-contain"
        />

        <button
          onClick={onConfirm}
          className="bg-primary text-white px-8 py-2 text-[26px] rounded-lg font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CustomPopup;
