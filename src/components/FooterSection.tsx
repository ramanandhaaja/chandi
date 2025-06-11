import React from "react";
import Image from "next/image";

const FooterSection: React.FC = () => {
  return (
    <footer className="relative pt-10 pb-2 px-0 bg-[url('/images/footer/footer-img.png')] bg-cover bg-center">
      {/* Gradient overlay */}
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 flex flex-col items-center md:items-stretch gap-y-8 ">
          {/* Top Row: Logo/Socials and Info Columns */}
          <div className="flex flex-col md:flex-row w-full md:items-start gap-8 md:gap-16">
            {/* Left: Logo and Socials */}
            <div className="flex flex-col items-start w-full md:w-[35%] mb-6 md:mb-0">
              {/* Logo with text */}
              <div className="flex items-center mb-8">
                <Image
                  src="/images/footer/logo.png"
                  alt="Kementerian Kebudayaan"
                  width={403}
                  height={86}
                  className="mr-4"
                />
              </div>
            </div>

            {/* Middle: Info Columns */}
            <div className="flex flex-row gap-32 w-full md:flex-1">
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase">
                  Information
                </h3>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  About
                </a>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  Summit Info
                </a>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  Registration
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase">
                  Media
                </h3>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  Live Streaming
                </a>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  News & Updates
                </a>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  Cultural Showcase
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase">
                  Contact
                </h3>
                <a href="#" className="text-black hover:text-[#6D1A36]">
                  Contact & Help Desk
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center gap-[60px] mt-8 w-full">
            {/* Social media icons as gold/bronze circular buttons */}
            <div className="flex flex-row gap-8 items-start w-full md:w-[35%] mb-6 md:mb-0">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <g transform="scale(0.8) translate(5,5)">
                    <path fill="#fff" d="M16 3C9.373 3 4 8.373 4 15c0 2.492.83 4.794 2.237 6.677L4 29l7.537-2.201A12.94 12.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.692 0-3.326-.333-4.84-.98l-.345-.145-4.476 1.308 1.29-4.36-.223-.354A9.97 9.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.074-7.295c-.277-.139-1.638-.81-1.892-.902-.254-.093-.439-.139-.624.139-.184.277-.713.902-.873 1.088-.161.185-.323.208-.6.07-.277-.139-1.17-.431-2.23-1.375-.823-.734-1.379-1.64-1.542-1.917-.161-.278-.017-.428.122-.566.126-.126.277-.323.415-.484.139-.162.185-.277.277-.462.092-.185.046-.347-.023-.485-.07-.139-.624-1.507-.855-2.064-.225-.541-.454-.468-.624-.477-.161-.007-.347-.009-.531-.009a1.02 1.02 0 0 0-.74.347c-.254.277-.97.949-.97 2.31 0 1.36.993 2.677 1.132 2.861.139.185 1.953 2.987 4.74 4.067.663.286 1.18.457 1.583.585.665.212 1.27.182 1.748.111.533-.08 1.638-.669 1.87-1.315.231-.646.231-1.2.162-1.315-.07-.115-.254-.185-.531-.324z"/>
                  </g>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3H4c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h8.62v-7h-2.35v-2.69h2.35v-1.99c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.07 2.09.1v2.43h-1.43c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.69h-2.34V21H20c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </div>
            <p className="text-black text-sm leading-relaxed m-0">
              Gedung Kementerian Kebudayaan (Gedung E)
              <br />
              Jalan Jenderal Sudirman, Senayan, Jakarta Pusat, 10270
            </p>
          </div>
        </div>

        {/* Gold Section: Interest & Email */}
        <div className="mt-0 md:flex md:justify-between md:items-center gap-8">
          {/* Left: Interest/Email */}
          <div className="py-14 rounded-2xl md:w-1/2">
            <div className="text-left mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                Interested in at the Culture Summit
                or have any questions?
              </h2>
            </div>
          </div>
          {/* Right: Footer Bottom */}
          <div className="px-4 md:px-12 py-14 rounded-2xl md:w-1/2">
            <p className="text-white/90 text-lg font-light">
              Just send us your contact email and we will contact you.
            </p>
            <div className="flex flex-row">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-white/80 text-gray-800 placeholder:text-gray-400 px-6 py-3 rounded-l-full flex-1 w-full outline-none"
            />
            <button className="bg-white/20 hover:bg-white/40 transition-colors py-3 px-6 rounded-r-full flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-center gap-8">
          <p className="text-white opacity-80 mb-2 md:mb-0">
            &copy; 2025 — Copyright
          </p>
          <div className="flex gap-6 justify-center md:justify-end">
            <a href="#" className="text-white opacity-80 hover:opacity-100">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
