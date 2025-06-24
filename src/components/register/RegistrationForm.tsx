import { useState } from "react";

const RegistrationForm = () => {
  const [country, setCountry] = useState("");
  const [positionType, setPositionType] = useState("");
  return (
    <div>
      {/* Registration Form */}
      <div className="max-w-4xl mx-auto py-20 mb-20">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name*"
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name*"
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email*"
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <input
              type="tel"
              placeholder="Phone No*"
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
              required
            />
          </div>

          {/* Country */}
          <div>
            <div className="relative">
              <select
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
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
                className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
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
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-3 border border-[#B4B4B4] text-[#B4B4B4] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2AF6D] bg-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#FCFAF5] hover:bg-[#C29D5C] hover:text-white text-[#9D7935] text-2xl font-semibold py-6 px-12 rounded-2xl transition-colors duration-300 w-full md:w-64 cursor-pointer shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
