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
      className="border-2 border-blue-950 px-10 m-10 text-lg lg:text-2xl md:text-xl
    text-white  text-center bg-linear-30 from-cyan-500 via-slate-500 to-cyan-700
    "
    >
      <p>
        Because the sky always has a story to tell <BsCloudRainHeavyFill />
      </p>
      <p>
        Weather made simple, just for you <BsHandIndexThumb />
      </p>
      <p>
        Forecasts with feelings <BsCloudArrowUpFill /> <BsHeartPulse />
      </p>
      <p>
        Rain or shine, I’ve got you covered <BsUmbrellaFill />
      </p>
    </div>
  );
};

export default SomeLines;
