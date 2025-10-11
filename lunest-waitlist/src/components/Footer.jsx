import React from "react";

import {
  FaceSmileIcon,
  ChatBubbleLeftIcon,
  PhoneIcon,
  GlobeAltIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import specific brand icons
import {
  faInstagram,
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-lunestBlue text-white w-full px-4 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start gap-6">
          {/* Logo Blocks */}
          <div className="flex flex-col items-center gap-2">
            <img className="h-16" src="/assets/lunest-footer-logo.svg" alt="" />
          </div>

          {/* Tagline & Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-bold font-['aeonik']">
              ...Book in Style, Stay in Confidence
            </p>
            <div className="flex gap-4">
              <div className="inline-flex border rounded-[5px] px-[7px] py-[3px]">
                <a href="https://www.instagram.com/lunest.app/" className="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-4 h-4 hover:text-blue-400 "
                  />
                </a>
              </div>
              <div className="inline-flex border rounded-[5px] px-[7px] py-[3px]">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="w-4 h-4 hover:text-blue-400"
                  />
                </a>
              </div>

              <div className="inline-flex border rounded-[5px] px-[7px] py-[3px]">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="w-4 h-4 hover:text-blue-400"
                  />
                </a>
              </div>
              <div className="inline-flex border rounded-[5px] px-[7px] py-[3px]">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="w-4 h-4 hover:text-blue-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-2xl font-medium font-['aeonik']">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2 text-1xl font-['aeonik']">
            {["Home", "Features", "For Guests", "For Hosts", "Why Join"].map(
              (link) => (
                <li key={link}>{link}</li>
              )
            )}
            <li className="underline font-medium text-1xl font-['aeonik'] flex gap-2">
              {" "}
              <a href="/waitlist" className="flex gap-1">
                Join the Waitlist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>{" "}
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-2xl font-medium font-['aeonik']">
            Questions or Partnerships?
          </h4>
          <ul className="flex flex-col gap-3 text-1xl font-['aeonik']">
            <li className="flex gap-3">
              <EnvelopeIcon className="w-5 h-5 hover:text-blue-600" />{" "}
              hello@lunest.app
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="w-5 h-5 hover:text-blue-500" />{" "}
              +234-XXX-XXX-XXXX
            </li>
            <li className="flex gap-3">
              <GlobeAltIcon className="w-5 h-5 hover:text-blue-500" />{" "}
              www.lunest.app
            </li>
          </ul>
        </div>

        {/* CTA & Store Buttons */}
        <div className="flex flex-col gap-6 items-start">
          <button
            href="#"
            className=" flex px-5 py-2.5 border rounded-full text-sky-100 font-medium font-['aeonik']"
          >
            <img src="/assets/zap-footer.svg" alt="Coming Soon" /> Coming Soon
          </button>
          <div className="flex gap-4">
            <img src="/assets/appstore.svg" className="w-24 h-6" />
            <img src="/assets/googleplay.svg" className="w-24 h-6" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-neutral-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white gap-4">
        <div className="flex items-center gap-2 font-['aeonik']">
          <span>© {currentYear} Lunest Technologies. All Rights Reserved</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
