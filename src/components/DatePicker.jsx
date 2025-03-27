import React from "react";

function DatePicker() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <select className="w-[106px] rounded-custom h-[64px] border border-gray-300 px-4 pr-10 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary">
            <option value=""></option>
            {[...Array(31)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <img
            src="/imgs/Polygon 10.svg"
            alt="Arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select className="w-[82px] rounded-custom h-[64px] border border-gray-300 px-4 pr-10 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary">
            <option value=""></option>
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month, i) => (
              <option key={i + 1} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
          <img
            src="/imgs/Polygon 10.svg"
            alt="Arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 pointer-events-none"
          />
        </div>

        <div className="relative">
          <select className="w-[161px] rounded-custom h-[64px] border border-gray-300 px-4 pr-10 appearance-none bg-white text-center focus:outline-none focus:ring-2 focus:ring-primary">
            <option value=""></option>
            {[...Array(100)].map((_, i) => {
              const year = new Date().getFullYear() - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <img
            src="/imgs/Polygon 10.svg"
            alt="Arrow"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-6 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
