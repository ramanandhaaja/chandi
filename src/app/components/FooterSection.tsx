import React from "react";
import Image from "next/image";

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#D9BD71] to-[#CCAC59] pt-10 pb-2 px-0 ">
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-12 flex flex-col items-center md:items-stretch gap-y-8 mb-12">
          {/* Top Row: Logo/Socials and Info Columns */}
          <div className="flex flex-col md:flex-row w-full md:items-start gap-8 md:gap-16">
            {/* Left: Logo and Socials */}
            <div className="flex flex-col items-start w-full md:w-[35%] mb-6 md:mb-0">
              {/* Logo with text */}
              <div className="flex items-center mb-8">
                <Image
                  src="/placeholder.svg"
                  alt="Kementerian Kebudayaan"
                  width={70}
                  height={70}
                  className="mr-4"
                />
                <div className="text-[#6D1A36] font-semibold text-sm leading-tight text-black">
                  <div>KEMENTERIAN KEBUDAYAAN</div>
                  <div>REPUBLIK INDONESIA</div>
                </div>
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
                className="w-10 h-10 rounded-full bg-[#E9D7B6] flex items-center justify-center hover:opacity-80 transition-opacity"
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
                    fill="#6D1A36"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#E9D7B6] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.288.13.331.202.043.72.043.433-.101.824z"
                    fill="#6D1A36"
                  />
                  <path
                    d="M20.287 3.482c-1.949-1.955-4.544-3.033-7.303-3.034-5.692 0-10.322 4.628-10.328 10.32-.002 1.82.462 3.594 1.344 5.164l-1.428 5.215 5.342-1.401c1.516.823 3.223 1.257 4.955 1.257h.004c5.693 0 10.323-4.629 10.325-10.325.003-2.761-1.068-5.351-3.011-7.296zm-7.31 15.846h-.003c-1.55 0-3.068-.415-4.391-1.199l-.313-.186-3.248.852.876-3.185-.202-.322c-.861-1.369-1.315-2.951-1.312-4.576.004-4.735 3.858-8.587 8.595-8.587 2.295.001 4.448.894 6.064 2.514 1.617 1.62 2.507 3.77 2.505 6.060-.003 4.734-3.853 8.579-8.538 8.579z"
                    fill="#6D1A36"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-[#E9D7B6] flex items-center justify-center hover:opacity-80 transition-opacity"
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
                    fill="#6D1A36"
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
        <div className="mt-8 md:flex md:justify-between md:items-center gap-8">
          {/* Left: Interest/Email */}
          <div className="px-4 md:px-12 py-14 rounded-2xl md:w-1/2">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                Interested in at the Culture Summit
                <br />
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
        <div className="mt-8 md:mt-0 pt-2 pb-2 px-4 md:px-12 text-xs md:w-auto flex flex-col md:items-end">
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
