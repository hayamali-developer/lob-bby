import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/intro bg.png"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-[32px] md:text-[40px] font-semibold mb-8">
          Sign up to Lobby lane
        </h1>

        <div className="flex gap-6 flex-wrap justify-center px-4">
          <Link
            href={"partner/partner-intro"}
            className="flex flex-col justify-around w-[280px] sm:w-[340px] md:w-[400px] h-[200px] md:h-[260px] items-center bg-primary text-white font-medium py-4 px-6 rounded-lg shadow-md transition duration-300"
          >
            <div className="relative w-[140px] h-[100px] md:w-[200px] md:h-[140px]">
              <Image
                src="/imgs/partner.png"
                alt="Partner"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="mt-2 text-[24px] md:text-[30px]">
              As a partner
            </span>
          </Link>

          <Link
            href={"auth/guest/sign-up"}
            className="flex flex-col items-center justify-around bg-white hover:bg-gray-100 text-black font-medium py-4 px-6 rounded-lg shadow-md w-[280px] sm:w-[340px] md:w-[400px] h-[200px] md:h-[260px] transition duration-300"
          >
            <div className="relative w-[130px] h-[110px] md:w-[170px] md:h-[140px]">
              <Image
                src="/imgs/guest.png"
                alt="guest"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="mt-2 text-[24px] text-[#232323] md:text-[30px]">
              As a guest
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
