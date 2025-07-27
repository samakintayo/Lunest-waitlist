import React from "react";

const JoinCard = ({ title, imgSrc, bgColor, bgSrc1, bgsrc2 }) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 w-full  lg:w-[100%] lg:w-[100%] pr-[48px] relative flex flex-col justify-evenly`}>
      <h3 className="text-black text-xl font-semibold mb-4 font-['aeonik']">{title}</h3>

       <div className="flow justify-end float-right right-0 z-10">
          <img src={imgSrc} alt="" className="mx-auto w-32 h-40 object-contain flex float-right" />
        </div>

        <img
        className=" absolute h-40 inline-flex z-0 mx-auto left-0 bottom-0 "
        src={bgsrc2}
        alt=""
      />
         <img
        className=" absolute h-40 inline-flex z-0 mx-auto right-0 top-0 z-[0]"
        src={bgSrc1}
        alt=""
      />
     
    </div>
  );
};

export default JoinCard;
