import Image from "next/image";
import Link from "next/link";

function PartnerIntro() {
  const sections = [
    {
      title: "Resturant",
      img: "/imgs/partner.png",
    },
    {
      title: "Services",
      img: "/imgs/partner.png",
    },
    {
      title: "Hotels",
      img: "/imgs/partner.png",
    },
    {
      title: "Offers",
      img: "/imgs/partner.png",
    },
    {
      title: "Packages",
      img: "/imgs/partner.png",
    },
  ];
  return (
    <div className="relative w-full py-12">
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
          {sections.map((item, i) => (
            <Link
              key={i}
              href={"/partner/add-lists"}
              className="flex flex-col items-center justify-around bg-white hover:bg-gray-100 text-black font-medium py-4 px-6 rounded-lg shadow-md w-[280px] sm:w-[340px] md:w-[400px] h-[200px] md:h-[260px] transition duration-300"
            >
              <div className="relative w-[130px] h-[110px] md:w-[170px] md:h-[140px]">
                <Image
                  src={item.img}
                  alt="guest"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span className="mt-2 text-[24px] text-[#232323] md:text-[30px]">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerIntro;
