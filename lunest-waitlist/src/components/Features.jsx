import React from "react";
import Cards from "./Cards";

const Features = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center px-4 py-10 lg:py-4 relative">
      <div className="w-full mx-auto px-6 flex flex-wrap justify-evenly items-start flex-wrap content-start gap-10">
        <Cards
          bgColor="bg-violet-200"
          imgSrc="/assets/lunest-verified.svg"
          title="Verified, Agent-Free Rentals:"
          description="No more agent stress. Guests enjoy access to carefully verified homes, and landlords list directly with full control."
        />

        <Cards
          bgColor="bg-red-200/50"
          imgSrc="/assets/lunest-secure-platform.svg"
          title="Secure & Transparent Platform:"
          description="Every booking is protected. We support secure payments, caution fees, and in-app communication to build trust on both sides."
        />

        <Cards
          bgColor="bg-green-100"
          imgSrc="/assets/lunest-early-access.svg"
          title="Early Access Rewards:"
          description="Landlords enjoy free setup support and visibility boost. Guests get exclusive discounts on early bookings."
        />

        <Cards
          bgColor="bg-sky-100"
          imgSrc="/assets/lunest-flexible-rental.svg"
          title="Flexible Rental Options:"
          description="List or book homes by the night, month, or year — with dynamic pricing tools and calendar availability built in."
        />
        <Cards
          bgColor="bg-fuchsia-300/50"
          imgSrc="/assets/lunest-easy-to-use.svg"
          title="Easy for Anyone to Use:"
          description="An intuitive mobile-first platform designed for smooth onboarding, easy search, and instant bookings or approvals."
        />
        <Cards
          bgColor="bg-amber-200/50"
          imgSrc="/assets/lunest-real-reviews.svg"
          title="Real Reviews. Real People:"
          description="Only verified users can leave reviews. Say goodbye to fake listings or shady hosts/guests."
        />
      </div>
    </div>
  );
};

export default Features;
