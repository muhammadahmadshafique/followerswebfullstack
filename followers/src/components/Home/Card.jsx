import React from "react";

function Card({ img, t1, bg }) {
  return (
    <div className={`relative ${bg === true ? "mll ml-[100px]" : ""} md:w-[466px]`}>
      {/* Outer wrapper with background color and opacity */}
      <div
        className={`${
          bg === true ? "card2" : "card"
        } absolute inset-0 bg-black opacity-30`}
      ></div>

      {/* Inner wrapper for content */}
      <div className="relative n1 md:flex-nowrap flex-wrap gap-x-[16px] pl-[62px] md:pl-[24px] pr-[37px] pt-[36px] pb-[60px]">
        {/* Your image */}
        <img src={img} alt="" srcSet="" />

        {/* Your text */}
        <p className="text-[#1B1633] text-justify">{t1}</p>
      </div>
    </div>
  );
}

export default Card;
