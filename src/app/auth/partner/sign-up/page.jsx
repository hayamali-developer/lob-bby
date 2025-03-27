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
// import { FaGoogle, FaFacebook } from "react-icons/fa";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().min(10, "Invalid phone number"),
});

const SignupForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-[#f0f0f0] shadow-lg rounded-custom flex flex-col md:flex-row w-full max-w-4xl">
        {/*  */}
        <div className="w-1/2 hidden md:block relative">
          <Image
            src="/imgs/sign up as a partner bg.png"
            alt="Signup Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-l-custom"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-center text-[#282828] text-[26px] font-bold mb-4">
            Sign up to Lobby lane as a partner
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
                placeholder="Business email"
                type="email"
              />
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
              />
              <FormPhoneInput name="phone" />

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-[#282828]">
                  yes I understand and agree to terms and conditions
                </span>
              </div>

              <SignBtn text={"Sign Up"} />
            </form>
          </FormProvider>

          {/* Login & Social Media */}
          <div className="text-center mt-4 ">
            Already have an account?{" "}
            <Link href="/auth/partner/login" className="text-blue-600">
              Log In
            </Link>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button className="text-red-500 text-xl">
              {/* <FaGoogle /> */}
            </button>
            <button className="text-blue-700 text-xl">
              {/* <FaFacebook /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
