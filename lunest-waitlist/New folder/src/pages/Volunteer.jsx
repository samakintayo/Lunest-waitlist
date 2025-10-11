import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { supabase } from "../supabaseClient";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    role_interest: "",
    experience: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let cvUrl = null;

    try {
      // Upload CV if provided
      if (cvFile) {
        const fileName = `${Date.now()}_${cvFile.name}`;
        const { error: uploadError } = await supabase.storage
          .from("volunteer-cvs")
          .upload(fileName, cvFile);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage
          .from("volunteer-cvs")
          .getPublicUrl(fileName);

        cvUrl = urlData.publicUrl;
      }

      // Insert record
      const { error } = await supabase.from("lunest-volunteers").insert([
        {
          full_name: formData.full_name,
          email: formData.email,
          phone: formData.phone,
          role_interest: formData.role_interest,
          experience: formData.experience,
          cv_url: cvUrl,
        },
      ]);

      if (error) throw error;

      // Success modal
      setModal({
        show: true,
        message: "✅ Your volunteer application was submitted successfully!",
        type: "success",
      });

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        role_interest: "",
        experience: "",
      });
      setCvFile(null);
    } catch (err) {
      setModal({
        show: true,
        message: `❌ Error: ${err.message}`,
        type: "error",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Header />

      <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 lg:pt-[60px] pb-[40px] md:px-20 relative">
        {/* Background decorations */}
        <div className="absolute left-0 top-[210px] opacity-50">
          <img
            className="w-auto lg:h-80 h-40"
            src="/assets/lunest-outline.png"
            alt=""
          />
        </div>
        <div className="absolute right-0 top-[210px] opacity-50">
          <img
            className="w-auto lg:h-80 h-40"
            src="/assets/lunest-outline-right.png"
            alt=""
          />
        </div>

        <div className="lg:w-[80%] w-[95%] flex flex-col items-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[30px] outline outline-1 outline-blue-700 mb-8">
            <img className="w-3 h-4" src="/assets/lunest-zap.svg" alt="" />
            <span className="text-blue-700/70 text-base font-medium font-aeonik">
              Join the Vision
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-medium font-aeonik text-center mb-4">
            Volunteer for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-200">
              LUNEST
            </span>
          </h1>

          <p className="w-[85%] text-center lg:text-lg text-sm mb-10 font-aeonik">
            Be part of the team building the future of renting and home stays
            across Africa. Join our volunteer network and contribute your
            skills, time, and creativity to LUNEST.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-[700px] flex flex-col gap-5 font-aeonik"
          >
            {/* Full Name */}
            <label className="text-zinc-800 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="e.g. Jane Doe"
              required
              className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700"
            />

            {/* Email */}
            <label className="text-zinc-800 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700"
            />

            {/* Phone */}
            <label className="text-zinc-800 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="e.g. +2348012345678"
              className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700"
            />

            {/* Role */}
            <label className="text-zinc-800 text-sm font-medium">
              Area/Role of Interest
            </label>
            <select
              name="role_interest"
              value={formData.role_interest}
              onChange={handleChange}
              required
              className="w-full h-14 px-5 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700"
            >
              <option value="">Select a role</option>
              <option value="hr_operations">
                Human Resource & Team Operations
              </option>
              <option value="marketing">
                Digital Marketing & Growth Leads
              </option>
              <option value="content_strategy">
                Content Strategists & Brand Communication
              </option>
              <option value="legal_adviser">Legal Adviser</option>
              <option value="backend_developer">
                Backend Developer Intern
              </option>
              <option value="frontend_developer">
                Frontend Developer Intern
              </option>
              <option value="design">UI/UX & Design</option>
              <option value="real_estate">Real Estate Support</option>
              <option value="community">Community Growth</option>
              <option value="other">Other</option>
            </select>

            {/* Experience */}
            <label className="text-zinc-800 text-sm font-medium">
              Briefly tell us about your experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              placeholder="Tell us why you’d like to volunteer or your background..."
              className="w-full min-h-[100px] px-5 py-3 bg-neutral-100 rounded-3xl outline outline-1 outline-blue-700 text-neutral-700 resize-none"
            />

            {/* CV Upload */}
            <label className="text-zinc-800 text-sm font-medium">
              Upload your CV (optional)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full bg-neutral-100 rounded-3xl px-5 py-3 outline outline-1 outline-blue-700 text-neutral-700"
            />

            {/* Submit Button */}
            <div className="inline-flex relative justify-start bg-gradient-to-br from-blue-700 to-indigo-200 p-[2px] rounded-[30px] mt-4">
              <button
                type="submit"
                disabled={uploading}
                className="px-8 py-3 rounded-[30px] bg-white flex justify-center items-center gap-3.5"
              >
                <span className="text-xl font-medium">
                  {uploading ? "Submitting..." : "Submit Application"}
                </span>
                <div className="h-4 relative">
                  <img alt="" src="/assets/arrow-right-col.svg" />
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* Modal */}
        {modal.show && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-[90%] max-w-md text-center">
              <h2
                className={`text-2xl font-semibold mb-3 ${
                  modal.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {modal.type === "success" ? "Success!" : "Error"}
              </h2>
              <p className="text-gray-700 mb-6">{modal.message}</p>
              <button
                onClick={() => setModal({ show: false, message: "", type: "" })}
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default VolunteerForm;
