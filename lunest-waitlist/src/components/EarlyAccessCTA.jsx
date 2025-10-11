import React from "react";

const EarlyAccessCTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-accessBlue text-white px-6 pb-0 py-12 lg:px-20 lg:py-20 relative">
      {/* Left Section */}
      <div className="flex flex-col gap-6 max-w-xl lg:text-start text-center">
        <h2 className="text-3xl lg:text-5xl font-medium leading-tight font-['aeonik']">
          Be the First to Experience a{" "}
          <span className="text-sky-100">Smarter Way</span> to{" "}
          <span className="text-sky-100">Rent</span> and{" "}
          <span className="text-sky-100">Host</span> in Nigeria.
        </h2>

        <div className="flex lg:justify-start justify-center">
          <a
            href="/waitlist"
            className="flex text-center align-start text-xl font-medium text-sky-100 font-['aeonik'] px-6 py-3 rounded-full border-2 transition"
          >
            Reserve your Spot Now
          </a>
        </div>

        {/* App Availability Text */}
        <div className="flex flex-col lg:items-start items-center gap-2 mt-4">
          <div className="relative text-xs font-medium font-['aeonik']">
            <p>
              Free for <span className="">iPhone</span>, <div className=" inline left-[3.73px] top-[1.49px] w-2.5 h-3.5 bg-white" />
              <span className="">Android</span>.
          </p>

                     
          </div>

          <div className="text-white text-3xl lg:text-2xl leading-10 font-['aeonik'] font-normal">
            We respect your privacy. No spam.
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-[608px] flex lg:absolute bottom-0 lg:right-0 justify-center lg:justify-end">
        <img
          className="w-full max-w-[608px] h-auto object-contain bottom-0"
          src="/assets/lunest-home-img1.png"
          alt="Lunest preview"
        />
      </div>
    </div>
  );
};

export default EarlyAccessCTA;
