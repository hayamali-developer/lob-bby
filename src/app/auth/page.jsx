import Image from "next/image";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="relative w-full h-screen">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg" // استبدلها بالصورة التي تريدها
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* المحتوى */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white bg-black/40">
        <h1 className="text-2xl md:text-3xl font-semibold mb-6">
          Sign up to Lobby lane
        </h1>
        <div className="flex gap-6">
          {/* زر الشريك */}
          <Link
            href={""}
            className="flex flex-col items-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-4 px-6 rounded-lg shadow-md w-40"
          >
            <span className="text-4xl">🤝</span>
            <span className="mt-2">As a partner</span>
          </Link>

          {/* زر الضيف */}
          <Link
            href={"auth/guest/sign-up"}
            className="flex flex-col items-center bg-white hover:bg-gray-100 text-black font-medium py-4 px-6 rounded-lg shadow-md w-40"
          >
            <span className="text-4xl">💬</span>
            <span className="mt-2">As a guest</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
