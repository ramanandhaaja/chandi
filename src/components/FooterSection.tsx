import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterSection: React.FC = () => {
  return (
    <footer className="relative pt-10 pb-2 px-0 bg-[url('/images/footer/footer-img.png')] bg-cover bg-center">
      {/* Gradient overlay */}
      <div className="max-w-8xl mx-auto px-4 md:px-8">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-12 flex flex-col items-center md:items-stretch gap-y-8">
          {/* Top Row: Logo and Info Columns */}
          <div className="flex flex-col md:flex-row w-full md:items-start gap-8 md:gap-16">
            {/* Left: Logo */}
            <div className="flex flex-col items-start w-full md:w-[35%] mb-6 md:mb-0">
              <div className="flex items-center mb-4 md:mb-8">
                <Link href="/">
                  <Image
                    src="/images/footer/logo.png"
                    alt="Kementerian Kebudayaan"
                    width={403}
                    height={86}
                    className="mr-4"
                  />
                </Link>
              </div>
            </div>

            {/* Right: Info Columns */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full md:flex-1">
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
                <a href="/register" className="text-black hover:text-[#6D1A36]">
                  Registration
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase">
                  Media
                </h3>
                <Link href="/stream" className="text-black hover:text-[#6D1A36]">
                  Live Streaming
                </Link>
                <Link href="/news_updates" className="text-black hover:text-[#6D1A36]">
                  News & Updates
                </Link>
                <Link href="/showcase" className="text-black hover:text-[#6D1A36]">
                  Cultural Showcase
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xs font-semibold text-gray-500 mb-3 tracking-widest uppercase">
                  Contact
                </h3>
                <Link href="/contact_us" className="text-black hover:text-[#6D1A36]">
                  Contact & Help Desk
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Row: Social Media and Address */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-4 md:mt-8 w-full">
            {/* Social media icons */}
            <div className="flex flex-row gap-4 items-center w-full md:w-auto mb-6 md:mb-0">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/footer/social1.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </a>
              <a
                href="#"
                aria-label="X/Twitter"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/footer/social2.png"
                  alt="Whatsapp"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-[#D2AF6D] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/images/footer/social3.png"
                  alt="Facebook"
                  width={40}
                  height={40}
                  style={{ objectFit: "contain" }}
                />
              </a>
            </div>
            <p className="text-black text-sm leading-relaxed m-0 md:ml-8">
              Gedung Kementerian Kebudayaan (Gedung E)
              <br />
              Jalan Jenderal Sudirman, Senayan, Jakarta Pusat, 10270
            </p>
          </div>
        </div>

        {/* Gold Section: Interest & Email */}
        <div className="mt-8 md:mt-0 md:flex md:justify-between md:items-center gap-8">
          {/* Left: Interest Text */}
          <div className="py-8 md:py-14 rounded-2xl md:w-1/2">
            <div className="text-center md:text-left mb-6 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-light text-white mb-3">
                Interested in the Culture Summit or have any questions?
              </h2>
            </div>
          </div>
          {/* Right: Email Form */}
          <div className="px-4 md:px-12 py-8 md:py-14 rounded-2xl md:w-1/2">
            <p className="text-white/90 text-base md:text-lg font-light mb-4 text-center md:text-left">
              Just send us your contact email and we will contact you.
            </p>
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-white/80 text-gray-800 placeholder:text-gray-400 px-6 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none flex-1 w-full outline-none mb-2 sm:mb-0"
              />
              <button className="bg-white/20 hover:bg-white/40 transition-colors py-3 px-6 rounded-full sm:rounded-r-full sm:rounded-l-none flex items-center justify-center">
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

        <div className="text-center md:flex md:justify-between md:items-center gap-4 mt-8">
          <p className="text-white opacity-80 mb-4 md:mb-0">
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
