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
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <PhoneInput
            {...field}
            country={"us"}
            inputClass="!w-full ps-3 p-5 !border !border-gray-300 !rounded-xl !focus:outline-none !focus:ring-2 !focus:ring-yellow-500"
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormPhoneInput;
