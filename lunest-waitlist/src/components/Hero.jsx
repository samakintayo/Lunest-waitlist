import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1728px] h-[741px] mx-auto relative overflow-hidden pl-[58px] py-20 bg-white">
      {/* Main content */}
      <div className="flex flex-col pl-[40px] lg:flex-row items-start justify-between gap-16">
        {/* Text Section */}
        <div className="flex flex-col justify-start items-start gap-14 max-w-[798px]">
          {/* Coming Soon Badge */}
          <div className="px-5 py-2.5 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-blue-700 inline-flex items-center gap-2.5">
            <div className="w-6 h-6 relative">
              <img className="w-3 h-4 absolute left-[5.5px] top-[3px]  outline-offset-[-0.75px] outline-blue-700" src="./public/assets/lunest-zap.svg" alt="" />
            </div>
            <div className="text-blue-700/70 text-base font-medium font-['Aeonik_Pro']">
              Coming Soon
            </div>
          </div>

          {/* Headline & Description */}
          <div className="flex flex-col gap-7">
            <h1 className="w-[701px] justify-start text-5xl md:text-6xl font-medium leading-tight font-['Aeonik_Pro']">
              The Future of{" "}
              <span className="text-blue-700 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-200">Smarter Home Rentals</span> in
              Nigeria!
            </h1>
            <p className="w-[798px] justify-start text-black text-2xl font-normal font-['Aeonik_Pro'] leading-10">
              We’re building a seamless, secure platform that makes it easy to
              find, book, or list homes—no agents, no hassle. Reserve your spot
              now for early access.
            </p>

            {/* CTA Button */}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="">
          <img
            src="./public/assets/lunest-home-img1.png"
            alt="lunest-Img"
            className="w-[947px] h-[792px] h-auto right-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
