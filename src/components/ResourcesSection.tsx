"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa";

const resources = [
  
  {
    title: "Call for Abstract",
    subtitle: "Call for Abstract CHANDI 2025.pdf",
    size: "1 MB",
    url: "/files/Call for Abstract CHANDI SUMMIT 2025.pdf",
  },
];

const ResourcesSection = ({ page }: { page: string; }) => {

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0">
            {page === "main" && (
              <>
              <div className="flex items-center mb-4">
                <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
                <p className="text-sm font-medium">Resources</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Access Key
              </h2>
              </>
            )}
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-600">
              {page != "main" ? "Resources" : ""}
            </h2>
            {page === "main" && (
            <p className="text-base leading-relaxed">
              Download essential resources and PDFs related to the CHANDI 2025. Access our comprehensive guide, speaker bios, and event schedules to enhance your experience. Stay informed and engaged with the latest updates and materials that will help you make the most of this cultural gathering.
            </p>
            )}
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {resources.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">{res.subtitle}</div>
                  </div>
                  <div className="mx-4 text-sm font-medium text-neutral-600 whitespace-nowrap">
                    {res.size}
                  </div>
                  <a
                    href={res.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-200 hover:bg-yellow-400 transition"
                  >
                    <HiDownload className="text-xl text-neutral-700 group-hover:text-white" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
