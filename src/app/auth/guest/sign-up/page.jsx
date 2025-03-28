"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "@/components/FormInput";
import FormPhoneInput from "@/components/PhoneInput";
import Link from "next/link";
import SignBtn from "@/components/SignBtn";
import Image from "next/image";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z
    .string()
    .min(10, "رقم الهاتف يجب أن يحتوي على 10 أرقام على الأقل")
    .max(15, "رقم الهاتف طويل جدًا")
    .regex(/^[0-9]+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط"),
});

const SignupForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-6 min-h-screen  px-4">
      <div className="bg-[#f0f0f0] rounded-custom flex flex-col md:flex-row w-full max-w-5xl">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/imgs/login as a partner bg.png"
            alt="Signup Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-t-custom md:rounded-l-custom object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-center text-[#282828] text-[16px] md:text-[26px] font-bold mb-4">
            Sign up to Lobby lane
          </h2>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="space-y-4"
            >
              <FormInput name="firstName" placeholder="First name" />
              <FormInput name="lastName" placeholder="Last name" />
              <FormInput
                name="email"
                placeholder="Email Address"
                type="email"
              />
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
              />
              <FormPhoneInput
                name="phone"
                placeholder="Phone Number"
                isform={true}
              />
              <div className="flex items-center justify-center  text-[16px] md:text-[20px] bg-white rounded-custom px-4 py-2 space-x-4">
                <span className="text-gray-700 font-bold">Profile</span>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="profile"
                    value="personal"
                    className="hidden peer"
                  />
                  <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center peer-checked:bg-primary">
                    <span
                      // style={{ backgroundColor: "blue" }}
                      className="w-3 h-3 rounded-full peer-checked:block"
                    ></span>
                  </span>
                  <span className="text-gray-700">Personal</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="profile"
                    value="corporate"
                    className="hidden peer"
                  />
                  <span className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center peer-checked:bg-primary">
                    <span className="w-3 h-3 rounded-full peer-checked:block"></span>
                  </span>
                  <span className="text-gray-700">Corporate</span>
                </label>
              </div>

              <SignBtn text={"Sign Up"} />
            </form>
          </FormProvider>
          <div className="flex mt-4 items-center gap-2">
            <input type="checkbox" className="form-checkbox scale-150 mr-2" />
            <span className="text-[18px] text-[#232323]">
              yes I understand and agree to terms and conditions
            </span>
          </div>
          <div className="text-center text-[#232323] text-[18px] mt-2 text-">
            Already have an account?{" "}
            <Link href="/auth/guest/login" className="font-bold">
              Log In
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="">
              <Image
                src="/imgs/google 1.svg"
                alt="imgs social"
                width={50}
                height={50}
                className=" object-cover w-full"
              />
            </button>
            <button className="">
              <Image
                src="/imgs/facebook 1.svg"
                alt="imgs social"
                width={50}
                height={50}
                className=" object-cover w-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
