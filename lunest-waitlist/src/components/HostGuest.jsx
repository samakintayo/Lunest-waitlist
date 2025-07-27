import React, { useState } from 'react';

const HostGuest = () => {
  const [isGuest, setIsGuest] = useState(true);

  return (
    <div className="w-full flex flex-col items-center  gap-10 lg:gap-20 px-4 py-8 px-6 md:px-10 lg:px-20">
      {/* Toggle between Guest and Host */}
      <div className="w-full max-w-lg h-14 bg-sky-100 rounded-full flex text-sm sm:text-base">
        <button
          className={`w-1/2 h-full px-3 sm:px-6 transition-all duration-300 rounded-full flex justify-center items-center font-['aeonik'] font-medium  ${
            isGuest
              ? 'bg-slate-900 text-white  '
              : 'bg-sky-100 text-slate-900'
          }`}
          onClick={() => setIsGuest(true)}
        >
          For Guests
        </button>
        <button
          className={`w-1/2 h-full px-3 sm:px-6 transition-all duration-300 rounded-full flex justify-center items-center font-medium ${
            !isGuest
              ? 'bg-slate-900 text-white'
              : 'bg-sky-100 text-slate-900'
          }`}
          onClick={() => setIsGuest(false)}
        >
          For Hosts
        </button>
      </div>

      {/* Content Container */}
      {isGuest ? (
        <div className="w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-14 md:gap-20 px-2 sm:px-4">
          {/* Right Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto">
            <div className="w-52 sm:w-60 h-52 sm:h-60  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <img
              className="relative w-full h-auto z-10"
              src="/assets/lunest-for-guest-img2.png"
              alt="Guest section"
            />
          </div>

          {/* Left Text */}
          <div className="max-w-xl flex flex-col gap-6 text-start">
            <h2 className="text-black text-2xl md:text-3xl font-bold font-['aeonik']">
              Need a Place to Stay?
            </h2>
            <div>
              <h3 className="text-black text-xl md:text-2xl font-medium font-['aeonik']">
                Join as a Guest and enjoy:
              </h3>
              <ul className="flex flex-col gap-4 mt-4 font-['aeonik']">
                {[
                  '100% verified homes',
                  'Safe, agent-free bookings',
                  'Transparent reviews & pricing',
                  'Book securely — pay online',
                  'Discounts on early bookings',
                  'Loyalty points and rewards',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <img className='w-5 h-5' src="/assets/lunest-tick-o.svg" alt="" />
                    </div>
                    <span className="text-black text-base md:text-lg font-normal leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-14 md:gap-20 ">
          {/* Left Section - Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto">
            <div className="w-52 sm:w-60 h-52 sm:h-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
            <img
              className="relative w-full h-auto z-10"
              src="/assets/lunest-for-host.png"
              alt="Host section"
            />
          </div>

          {/* Right Section - Text */}
          <div className="max-w-xl flex flex-col gap-6 text-start">
            <h2 className="text-black text-2xl md:text-3xl font-bold font-['aeonik']">
              Own a Property?
            </h2>
            <div>
              <h3 className="text-black text-xl md:text-2xl font-medium font-['aeonik']">
                Join as a Landlord/Host and get:
              </h3>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  'Verified & KYC-approved guests',
                  'Flexible earning options (night, month, year)',
                  'Instant bookings & automated dashboard',
                  'Caution fee and payout protection',
                  'Exclusive rewards for top performers',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center">
                        <img className='w-5 h-5' src="/assets/lunest-tick-o.svg" alt="" />
                    </div>
                    <span className="text-black text-base md:text-lg font-normal font-['aeonik'] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostGuest;
