"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderSection: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [daysLeft, setDaysLeft] = useState(24); // Initial value from the image

  // Calculate days left until the summit
  useEffect(() => {
    const summitDate = new Date("2025-07-12"); // Set your actual summit date here
    const today = new Date();
    const diffTime = summitDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays > 0 ? diffDays : 0);
  }, []);

  // Handle scroll events to make the header floating/sticky

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-2 sm:py-4 bg-transparent`}
    >
      <div className="max-w-8xl mt-2 mx-6 sm:mx-4 px-4 sm:px-4 md:px-6 lg:px-8 bg-[#F8F7F2] rounded-full py-4 sm:py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/chandi_logo_color.png"
                alt="CHANDI SUMMIT 2025"
                width={180}
                height={40}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </div>

          {/*middle menu*/}
          <div className="bg-[#F8F7F2] px-6 py-2 hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium hover:text-[#D2AF6D] ${
                pathname === "/" ? "text-[#D2AF6D]" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              href="/stream"
              className={`font-medium hover:text-[#D2AF6D] ${
                pathname === "/stream" ? "text-[#D2AF6D]" : "text-gray-800"
              }`}
            >
              Live
            </Link>
            <Link
              href="/news_updates"
              className={`font-medium hover:text-[#D2AF6D] ${
                pathname === "/news_updates"
                  ? "text-[#D2AF6D]"
                  : "text-gray-800"
              }`}
            >
              News
            </Link>
            <Link
              href="/showcase"
              className={`font-medium hover:text-[#D2AF6D] ${
                pathname === "/showcase" ? "text-[#D2AF6D]" : "text-gray-800"
              }`}
            >
              Showcase
            </Link>
            <Link
              href="/contact_us"
              className={`font-medium hover:text-[#D2AF6D] ${
                pathname === "/contact_us" ? "text-[#D2AF6D]" : "text-gray-800"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Days Counter and Register Button */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-[#F8F7F2] px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <span className="text-[#D2AF6D]">{daysLeft} Days</span>
              <span className="ml-1 text-gray-700">Left</span>
            </div>
            <Link
              href="/register"
              className="bg-[#D2AF6D] text-white px-5 py-2 rounded-full font-medium hover:bg-[#C19A58] transition-colors flex items-center"
            >
              Register Now
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 hover:text-[#D2AF6D] focus:outline-none p-1 rounded-full mr-0 sm:mr-1"
            >
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg p-4 rounded-3xl mt-2 mx-4">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-[#D2AF6D] font-medium py-2"
            >
              Home
            </Link>
            <Link
              href="/stream"
              className="text-gray-800 hover:text-[#D2AF6D] font-medium py-2"
            >
              Live
            </Link>
            <Link
              href="/news_updates"
              className="text-gray-800 hover:text-[#D2AF6D] font-medium py-2"
            >
              News
            </Link>
            <Link
              href="/showcase"
              className="text-gray-800 hover:text-[#D2AF6D] font-medium py-2"
            >
              Showcase
            </Link>
            <Link
              href="/contact_us"
              className="text-gray-800 hover:text-[#D2AF6D] font-medium py-2"
            >
              Contact
            </Link>

            {/* Days Counter and Register Button */}
            <div className="flex flex-col space-y-3 pt-2">
              <div className="bg-[#F8F7F2] px-3 py-1 rounded-full text-sm font-medium inline-flex items-center self-start">
                <span className="text-[#D2AF6D]">{daysLeft} Days</span>
                <span className="ml-1 text-gray-700">Left</span>
              </div>
              <Link
                href="/register"
                className="bg-[#D2AF6D] text-white px-5 py-2 rounded-full font-medium hover:bg-[#C19A58] transition-colors inline-flex items-center self-start"
              >
                Register Now
                <svg
                  className="w-5 h-5 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
