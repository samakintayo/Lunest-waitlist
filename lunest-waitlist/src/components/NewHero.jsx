import React from "react";

const NewHero = () => {
  return (
    <div className="w-full lg:min-h-screen  bg-white overflow-hidden flex flex-col items-center justify-center px-4 pt-[60px] lg:pt-20 pb-[5px] lg:pb-[10px] md:px-20 relative">
      
      {/* Decorative Shapes */}
      <div className="absolute ml-0 mr-auto left-0 top-[210px]">
        <img
          className=" w-auto lg:h-80 h-40 left-0 "
          src="/assets/lunest-outline.png"
          alt=""
        />
      </div>
      <div className="absolute mr-0 mr-auto right-0 top-[210px]">
        <img
          className=" w-auto lg:h-80 h-40 right-0 "
          src="/assets/lunest-outline-right.png"
          alt=""
        />
      </div>

      <div className="w-[80%] items-center justify-center flex flex-col relative">
        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-blue-700 mb-8">
          <img className="w-3 h-4" src="/assets/lunest-zap.svg" alt="" />
          <span className="text-blue-700/70 text-base font-medium">
            Coming Soon
          </span>
        </div>

        {/* Main Text */}
        <div className="max-w-5xl text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-medium font-aeonik">
            The Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-200">
              Smarter Home Rentals
            </span>{" "}
            in Nigeria!
          </h1>
        </div>
        <p className="max-w-3xl text-center text-lg md:text-2xl mb-10 font-aeonik">
          We’re building a seamless, secure platform that makes it easy to find,
          book, or list homes—no agents, no hassle. Reserve your spot now for
          early access.
        </p>

        {/* CTA Button */}
        <a
          href="/waitlist"
          className="px-7 py-3.5 bg-blue-700 rounded-[30px] inline-flex justify-center items-center gap-3.5 mb-4"
        >
          <span className="text-white text-xl font-medium font-aeonik">
            Join the Waitlist
          </span>
          <div className="w-4 h-4 relative">
            <img src="/assets/arrow-right.svg" alt="" />
          </div>
        </a>

        {/* Hero Image - Aligned Right on Desktop */}
        <div className="w-full max-w-[1280px] mx-auto flex justify-center md:justify-center">
          <img
            src="/assets/lunest-home.png"
            alt="Lunest-mock"
            className="w-[90%] md:w-[770px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewHero;
