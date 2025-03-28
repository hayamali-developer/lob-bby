"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FormInput from "@/components/FormInput";
import Link from "next/link";
import SignBtn from "@/components/SignBtn";
import Image from "next/image";
import CustomPopup from "@/components/CustomPopup";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    setIsPopupOpen(true);
  };
  const handleContinue = () => {
    setIsPopupOpen(false);
    router.push("/partner/partner-intro");
  };
  return (
    <div className="flex justify-center items-center min-h-screen  px-4">
      <div className="bg-[#f0f0f0] rounded-custom  flex flex-col md:flex-row w-full max-w-4xl">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/imgs/login bg.png"
            alt="Signup Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-t-custom md:rounded-l-custom object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 flex flex-col">
          <h2 className="text-center text-[26px] text-[#282828] font-bold mb-4">
            Log in to Lobby lane as a partner
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

          <div className="text-center my-4 text-gray-500">OR</div>

          <div className="text-center mt-2 text-sm">
            <Link href="" className=" text-[#282828] hover:underline">
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center gap-4">
            <button className="text-red-500 text-xl">
              {/* Google Icon */}
            </button>
            <button className="text-blue-700 text-xl">
              {/* Facebook Icon */}
            </button>
          </div>
          {isPopupOpen && (
            <CustomPopup
              title="Add List"
              image="/imgs/add listing.png"
              buttonText="Continue"
              onConfirm={handleContinue}
              onClose={() => setIsPopupOpen(false)}
            />
          )}
          <div className="text-center mt-4 text-sm">
            Did you join Lobby lanes yet?
            <Link
              href="/auth/partner/sign-up"
              className="text-[#282828] font-bold"
            >
              {" "}
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
