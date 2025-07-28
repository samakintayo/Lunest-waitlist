import React from "react";

const Cards = ({ title, description, imgSrc, bgColor }) => {
  return (
    <div className=" w-full  sm:w-[25rem] lg:w-[25rem]  px-4 py-3  lg:px-10 lg:py-5 bg-white/10 rounded-[5px] shadow-[0px_0px_4px_2px_rgba(217,217,217,0.30)] outline outline-[0.50px] outline-offset-[-0.50px] outline-neutral-800 flex flex-col justify-start items-start gap-5 ">
      <div className="inline-flex justify-start items-center gap-5">
        <div className={`w-10 h-10 p-2 ${bgColor} rounded-[20px] flex justify-start items-center gap-2`}>
          <div className="w-6 h-6 relative">
            <img src={imgSrc} alt="" />
          </div>
        </div>
        <div className="text-left text-black text-base font-bold font-['aeonik']">
          {title}
        </div>
      </div>
      <div className=" justify-start text-zinc-800 text-base font-normal font-['aeonik']">
        {description}
      </div>
    </div>
  );
};

export default Cards;
