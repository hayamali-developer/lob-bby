"use client";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FormPhoneInput = ({ name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <input
          name={name}
          type="text"
          className="w-[100px] h-[64px]  rounded-custom px-3 text-center focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <input
          type="tel"
          className="w-[290px] h-[64px]  rounded-custom px-3 focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormPhoneInput;
