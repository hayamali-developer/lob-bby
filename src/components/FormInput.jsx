"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const FormInput = ({ name, placeholder, type = "text" }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="p-3 border border-none h-[64px] rounded-custom ps-6 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;
