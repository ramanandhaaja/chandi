"use client";

import { useState } from "react";
import FooterSection from "@/components/FooterSection";
import Image from "next/image";

export default function RegisterPage() {
  const [country, setCountry] = useState("");
  const [positionType, setPositionType] = useState("");

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/images/register/pattern-bg.png')] bg-no-repeat bg-cover opacity-10 z-0"></div>

      {/* Main content */}
      <div className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        {/* Registration label */}
        <p className="text-center text-black mb-4 font-medium">Registration</p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-16 text-black">
          Register & Attend
        </h1>

        {/* Registration Type Selector */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 items-center w-full">
          {/* Investors */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
              <Image src="/images/register/delegasinegara.png" alt="Delegasi Negara" className="w-10 h-10 object-contain" width={16} height={16} />
            </div>
            <p className="text-center text-gray-500 font-medium">Delegasi Negara</p>
          </div>

          {/* Business Man */}
          <div className="bg-white rounded-full border border-solid border-[#D49300] p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image src="/images/register/umum.png" alt="Umum" className="w-10 h-10 object-contain" width={16} height={16} />
            
            </div>
            <p className="text-center text-gray-500 font-medium">Umum</p>
          </div>
          {/* Founder */}
          <div className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
            <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image src="/images/register/media.png" alt="Media" className="w-10 h-10 object-contain" width={16} height={16} />
            
            </div>
            <p className="text-center text-gray-500 font-medium">Media</p>
          </div>
        </div>

        {/* Description Box */}
        <div className="mt-12 border border-gray-200 rounded-lg p-8 text-center">
          <p className="text-gray-700 leading-relaxed">
            Dive deeper into the transformative power of the Culture Summit, a
            pivotal event designed to cultivate collaboration among teams,
            enhance employee engagement, spark innovative ideas, and ensure
            organizations stay ahead in an ever-evolving business landscape.
            This summit serves as a platform for sharing insights, fostering
            connections, and igniting a culture of creativity that empowers
            employees to thrive and contribute to the company&apos;s success.
          </p>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto mt-16">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <input
                type="text"
                placeholder="First Name*"
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                placeholder="Phone No*"
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                required
              />
            </div>

            {/* Country */}
            <div>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="" disabled>
                    Country
                  </option>
                  <option value="indonesia">Indonesia</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="singapore">Singapore</option>
                  <option value="thailand">Thailand</option>
                  <option value="philippines">Philippines</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-[#B4B4B4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Position Type */}
            <div>
              <div className="relative">
                <select
                  className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
                  value={positionType}
                  onChange={(e) => setPositionType(e.target.value)}
                >
                  <option value="" disabled>
                    Position Type
                  </option>
                  <option value="executive">Executive</option>
                  <option value="manager">Manager</option>
                  <option value="staff">Staff</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-[#B4B4B4]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Organization */}
            <div className="md:col-span-2">
              <input
                type="text"
                placeholder="Organization / Institution"
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#D2AF6D] hover:bg-[#C29D5C] text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 w-full md:w-64"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
