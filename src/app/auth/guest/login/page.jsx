"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "@/components/FormInput";
import Link from "next/link";
import SignBtn from "@/components/SignBtn";
import ListsHeroSection from "@/components/ListsHeroSection";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row w-full max-w-4xl">
          {/* Image Section (Hidden on Small Screens) */}
          <div className="w-1/2 hidden md:block">
            <img
              src="/imgs/login bg.png"
              alt="Login Illustration"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-6 flex flex-col">
            <h2 className="text-center text-xl font-bold mb-4">
              Log in to Lobby lane
            </h2>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormInput
                  name="email"
                  placeholder="User name or Email"
                  type="email"
                />
                <FormInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />

                <SignBtn text="Login" />
              </form>
            </FormProvider>

            {/* Forgot Password */}
            <div className="text-center mt-2 text-sm">
              <Link href="" className="text-gray-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* OR Divider */}
            <div className="text-center my-4 text-gray-500">OR</div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4">
              <button className="text-red-500 text-xl">
                {/* Google Icon */}
              </button>
              <button className="text-blue-700 text-xl">
                {/* Facebook Icon */}
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center mt-4 text-sm">
              Did you join Lobby lanes yet?
              <Link
                href="/auth/guest/sign-up"
                className="text-blue-600 font-semibold"
              >
                {" "}
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
