import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { supabase } from "../supabaseClient"; // import client

const Waitlistform = () => {
  //track useState for user type
  //const [userType, setUserType] = useState("");

  // Store form field values in a single object (makes it easier to manage)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    user_type: "",
    property_type: "",
    property_count: "",
    property_location: "",
  });

  // This function updates formData as the user types in each field
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, // Keep all previous values
      [e.target.name]: e.target.value, // Update the field that changed
    }));
  };

  // This function runs when the user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default browser refresh on form submit

    // Destructure fields from formData for cleaner usage
    const {
      full_name,
      email,
      phone,
      user_type,
      property_type,
      property_count,
      property_location,
    } = formData;

    // Use Supabase client to insert a new row into the "waitlist" table
    const { error } = await supabase.from("lunest-waitlist").insert([
      {
        full_name, // User's full name
        email, // User's email
        phone, // Phone number
        user_type: formData.user_type, // "landlord" or "guest"

        // Only submit property fields if user is a landlord
        property_type: formData.user_type === "landlord" ? property_type : null,
        property_count:
          formData.user_type === "landlord" ? parseInt(property_count) : null,
        property_location: formData.user_type === "landlord" ? property_location : null,
      },
    ]);

    if (error) {
      // If something went wrong, show an error message
      alert("Error submitting form: " + error.message);
    } else {
      // If everything worked, show success message
      alert("🎉 Successfully added to waitlist!");

      // Clear the form so the user can submit again if they want
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        user_type: "", // Reset user type
        property_type: "",
        property_count: "",
        property_location: "",
      });

     
    }
  };

  return (
    <>
      <Header />

      <section className="w-full min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center px-4 lg:pt-[60px] lg:pt-20 pb-[5px] lg:pb-[10px] md:px-20 relative">
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
            className=" w-auto g:h-80 h-40 right-0 "
            src="/assets/lunest-outline-right.png"
            alt=""
          />
        </div>

        <div className="lg:w-[80%] w-[95%] items-center justify-center flex flex-col relative">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[30px] outline outline-1 outline-offset-[-1px] outline-blue-700 mb-8">
            <img className="w-3 h-4" src="/assets/lunest-zap.svg" alt="" />
            <span className="text-blue-700/70 text-base font-medium font-aeonik">
              Coming Soon
            </span>
          </div>

          {/* Main Text */}
          <div className="max-w-6xl text-center mb-6">
            <h1 className="text-4xl lg:text-5xl font-medium font-aeonik">
              Join the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-200">
                LUNEST
              </span>{" "}
              Waitlist
            </h1>
          </div>
          <p className="self-center w-[85%] text-center lg:text-lg text-sm mb-10 leading-1 font-aeonik">
            Be part of Nigeria’s smarter, more secure rental platform. Whether
            you’re a guest or a landlord, we’ll notify you first when we launch
            — with early access and exclusive perks.
          </p>

          {/* Form Container */}
          <div className="relative z-10 w-full max-w-[700px] flex flex-col justify-start items-start gap-10 mb-8">
            {/* Form Fields */}
            <form
              onSubmit={handleSubmit}
              className="w-full lg:w-[700px] flex flex-col gap-[10px] px-2 font-aeonik"
            >
              {/* Full Name */}
              <label
                htmlFor="fullName"
                className="text-zinc-800 text-sm font-medium font-aeonik"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                name="full_name"
                value={formData.full_name}
                required
                onChange={handleChange}
                className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 font-['Aeonik_Pro']"
              />

              {/* Email Address */}
              <label
                htmlFor="email"
                className="text-zinc-800 text-sm font-medium font-['Aeonik_Pro']"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 font-['Aeonik_Pro']"
              />

              {/* Phone Number */}
              <label
                htmlFor="phoneNumber"
                className="text-zinc-800 text-sm font-medium font-['Aeonik_Pro']"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phoneNumber"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +2348012345678"
                className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 font-['Aeonik_Pro']"
              />

              {/* User Type Radio */}
              <div className="flex flex-col gap-3">
                <label className="text-zinc-800 text-sm font-medium font-['Aeonik_Pro']">
                  I’m signing up as a:
                </label>

                <div className="flex gap-5">
                  <label className="flex items-center gap-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="user_type"
                      value="guest"
                      checked={formData.user_type === "guest"}
                      onChange={handleChange}
                      className="form-radio accent-blue-700 font-['Aeonik_Pro']"
                    />
                    <span className="text-zinc-700 text-base font-['Aeonik_Pro']">
                      Guest
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="user_type"
                      value="landlord"
                      checked={formData.user_type === "landlord"}
                      onChange={handleChange}
                      className="form-radio accent-blue-700 font-['Aeonik_Pro']"
                    />
                    <span className="text-zinc-700 text-base font-['Aeonik_Pro']">
                      Host/Landlord
                    </span>
                  </label>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    formData.user_type === "landlord"
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {/* LANDLORD-ONLY FIELDS */}
                  <div className="flex flex-col gap-5 px-2 py-5">
                    <label className="text-zinc-800 text-sm font-medium font-['Aeonik_Pro']">
                      Type of Property You Own
                    </label>
                    <input
                      type="text"
                       name="property_type"
                      placeholder="e.g. 2-bedroom flat in Lekki"
                      className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 font-['Aeonik_Pro']"
                      value={formData.property_type}
                      onChange={handleChange}
                    />

                    <label className="text-zinc-800 text-sm font-medium">
                      Number of Properties
                    </label>
                    <input
                      type="number"
                      name="property_count"
                      placeholder="e.g. 2"
                      value={formData.property_count}
                      onChange={handleChange}
                      className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 font-['Aeonik_Pro']"
                    />
                    <label
                      htmlFor="location"
                      className="text-zinc-800 text-sm font-medium"
                    >
                      Property Location
                    </label>
                    <input
                      type="text"
                      name="property_location"
                      placeholder="e.g. Lagos, Abuja"
                      value={formData.property_location}
                      onChange={handleChange}
                      className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className=" w-max inline-flex relative justify-start bg-gradient-to-br from-blue-700 to-indigo-200 p-[2px] rounded-[30px] ">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-[30px] outline-[1px] outline-offset-[-3px] bg-white inline-flex justify-center items-center gap-3.5"
                >
                  <span className="text-reserveBtn text-xl font-medium font-aeonik">
                    Reserve my Spot
                  </span>

                  <div className="h-4 relative">
                    <img alt="" src="/assets/arrow-right-col.svg" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Waitlistform;
