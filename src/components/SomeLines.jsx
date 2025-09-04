import React from "react";
import {
  BsUmbrellaFill,
  BsCloudArrowUpFill,
  BsHeartPulse,
  BsCloudRainHeavyFill,
  BsHandIndexThumb,
} from "react-icons/bs";

const SomeLines = () => {
  return (
    <div
      className="border-2 border-blue-900 px-6 sm:px-10 py-6 m-6 sm:m-10 
      text-base sm:text-lg md:text-xl lg:text-2xl font-semibold 
      text-white text-center 
      bg-gradient-to-r from-cyan-500 via-slate-600 to-indigo-700 
      rounded-2xl shadow-2xl shadow-sky-700 
      hover:scale-105 hover:shadow-indigo-800/70 
      transition-transform duration-500 ease-in-out"
    >
      <p className="flex items-center justify-center gap-2 mb-3">
        Because the sky always has a story to tell <BsCloudRainHeavyFill />
      </p>
      <p className="flex items-center justify-center gap-2 mb-3">
        Weather made simple, just for you <BsHandIndexThumb />
      </p>
      <p className="flex items-center justify-center gap-2 mb-3">
        Forecasts with feelings <BsCloudArrowUpFill /> <BsHeartPulse />
      </p>
      <p className="flex items-center justify-center gap-2">
        Rain or shine, I’ve got you covered <BsUmbrellaFill />
      </p>
    </div>
  );
};

export default SomeLines;
