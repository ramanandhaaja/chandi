"use client";

import React from "react";
import { HiDownload } from "react-icons/hi";
import { FaFilePdf } from "react-icons/fa";

const resources = [
  {
    title: "Rundown CHANDI 2025",
    subtitle: "Rundown_CHANDI_2025.pdf",
    size: "1 MB",
    url: "/files/Rundown_CHANDI_2025.pdf",
  },
  {
    title: "Bali Cultural Initiative Declaration 2025",
    subtitle: "BALI_CULTURAL_INITIATIVE_DECLARATION_2SEPT2025_2241.pdf",
    size: "0.5 MB",
    url: "/files/BALI_CULTURAL_INITIATIVE_DECLARATION_2SEPT2025_2241.pdf",
  },
  {
    title: "Selected Abstract Announcement",
    subtitle: "Selected Abstract Announcement.pdf",
    size: "1 MB",
    url: "/files/SelectedAbstracts_Announcement.pdf",
  },
  {
    title: "Poster Publikasi",
    subtitle: "Poster_Publikasi.pdf",
    size: "55 MB",
    url: "/files/Poster_Publikasi.pdf",
  },

  {
    title: "CHANDI2025 Ministerial Summit Concept Note",
    subtitle: "CHANDI2025 Ministerial Summit Concept Note.pdf",
    size: "0.5 MB",
    url: "/files/CHANDI2025_Ministerial_Summit_Concept_Note.pdf",
  },
  {
    title: "CHANDI2025 Ministerial Summit Session Guidelines",
    subtitle: "CHANDI2025 Ministerial Summit Session Guidelines.pdf",
    size: "0.5 MB",
    url: "/files/CHANDI2025_Ministerial_Summit_Session_Guidelines.pdf",
  },

  {
    title: "Bali Cultural Initiative Declaration 2025",
    subtitle: "Bali_Cultural_Initiative_Declaration_2025.pdf",
    size: "0.5 MB",
    url: "/files/Bali_Cultural_Initiative_Declaration_2025.pdf",
  },

  {
    title: "CHANDI2025 Ministerial Summit Order of Business",
    subtitle: "CHANDI2025_Ministerial_Summit_Order_of_Business.pdf",
    size: "0.5 MB",
    url: "/files/CHANDI2025_Ministerial_Summit_Order_of_Business.pdf",
  },
  {
    title: "Concept Note - Agenda Panel Discussion",
    subtitle: "ConceptNote_Agenda_PanelDiscussion31August.pdf",
    size: "0.5 MB",
    url: "/files/ConceptNote_Agenda_PanelDiscussion31August.pdf",
  },
];

const opening_presentation = [
  {
    title: "Presentation from Minister of Culture of the Republic of Indonesia",
    subtitle: "Paparan_PAK_MENTERI_CHANDI_2025_V2_(complete).pdf",
    size: "9.5 MB",
    url: "/files/Paparan_PAK_MENTERI_CHANDI_2025_V2_(complete).pdf",
  },
  {
    title:
      "Presentation from Coordinator Minister of Human Development and Cultural Affairs of the Republic of Indonesia",
    subtitle: "Paparan_MENKO_PMK.pdf",
    size: "0.5 MB",
    url: "/files/Paparan_MENKO_PMK.pdf",
  },
  {
    title: "Presentation from Jana Abusalha",
    subtitle: "Paparan_by_Jana_Abusalha_20250901_000657_0000.pdf",
    size: "31 MB",
    url: "/files/Paparan_by_Jana_Abusalha_20250901_000657_0000.pdf",
  },
];

const panel_presentation = [
  {
    title: "Panel Discussion 2 - Zou Yi Qing, Vice President of ICOMOS China Scientific Committee on Cultural Route",
    subtitle: "Panel_Discussion_2-ZOUYQ.pdf",
    size: "19.5 MB",
    url: "/files/Panel_Discussion_2-ZOUYQ.pdf",
  },
];

const plenary_presentation = [
  {
    title: "Plenary 1 - Evelise Bruneau, Conservator of the Southeast Asian collections at Musée Guimet, France",
    subtitle: "Presentation_on_Museums_Evelise_Bruneau.pdf",
    size: "0.5 MB",
    url: "/files/Presentation_on_Museums_Evelise_Bruneau.pdf",
  },
  {
    title: "Plenary 2 - Giring Ganesha, Vice Minister of Culture of Indonesia",
    subtitle: "PLENARY_2-VICE MINISTER_OF_CULTURE-Giring_Ganesha.pdf",
    size: "4.1 MB",
    url: "/files/PLENARY_2-VICE MINISTER_OF_CULTURE-Giring_Ganesha.pdf",
  },
  {
    title: "Plenary 2 - Jean Couteau, Art Historian, Curator, Writer, and Bali Cultural Observer",
    subtitle: "Plenary_2_Jean-FIX-FINAL Chandi.pdf",
    size: "0.5 MB",
    url: "/files/Plenary_2_Jean-FIX-FINAL Chandi.pdf",
  },
  {
    title: "Plenary 3 - Ni Putu Pradnya Lalita Nara, Student from Green School Bali",
    subtitle: "Plenary_3_Chandi_Summit-Lalita.pdf",
    size: "70.1 MB",
    url: "/files/Plenary_3_Chandi_Summit-Lalita.pdf",
  },
  {
    title: "Plenary 3 - Fauzi Ismail, President of Singapore Heritage Society",
    subtitle: "Plenary_3_Fauzi_Ismail.pdf",
    size: "4.5 MB",
    url: "/files/Plenary_3_Fauzi_Ismail.pdf",
  },
];

const workshop_presentation = [
  {
    title: "Workshop Angklung",
    subtitle: "Workshop_angklung.pdf",
    size: "2.5 MB",
    url: "/files/Workshop_angklung.pdf",
  },
  {
    title: "Workshop Batik",
    subtitle: "Workshop_batik.pdf",
    size: "14.5 MB",
    url: "/files/Workshop_batik.pdf",
  },
  {
    title: "Workshop Dance",
    subtitle: "Workshop_dance.pdf",
    size: "0.5 MB",
    url: "/files/Workshop_dance.pdf",
  },
  {
    title: "Workshop Mask",
    subtitle: "Workshop_mask.pdf",
    size: "4.0 MB",
    url: "/files/Workshop_mask.pdf",
  },
];

const seminar_isi_presentation = [
  {
    title: "Seminar ISI - ANAK AGUNG GDE BAGUS UDAYANA",
    subtitle: "Seminar ISI - ANAK AGUNG GDE BAGUS UDAYANA.pdf",
    size: "2.0 MB",
    url: "/files/Seminar ISI - ANAK AGUNG GDE BAGUS UDAYANA.pdf",
  },
  {
    title: "Seminar ISI - I Gede Yudarta",
    subtitle: "Seminar ISI - I Gede Yudarta.pdf",
    size: "19.0 MB",
    url: "/files/Seminar ISI - I Gede Yudarta.pdf",
  },
  {
    title: "Seminar ISI - I Komang Sudirga",
    subtitle: "Seminar ISI - I Komang Sudirga.pdf",
    size: "3.6 MB",
    url: "/files/Seminar ISI - I Komang Sudirga.pdf",
  },
  {
    title: "Seminar ISI - Moe Chiba",
    subtitle: "Seminar ISI - Moe Chiba.pdf",
    size: "4.4 MB",
    url: "/files/Seminar ISI - Moe Chiba.pdf",
  },
  {
    title: "Seminar ISI - Nyoman Dewi Pebryani",
    subtitle: "Seminar ISI - Nyoman Dewi Pebryani.pdf",
    size: "3.3 MB",
    url: "/files/Seminar ISI - Nyoman Dewi Pebryani.pdf",
  },
  {
    title: "Seminar ISI - Yudil Chatim",
    subtitle: "Seminar ISI - Yudil Chatim.pdf",
    size: "1.5 MB",
    url: "/files/Seminar ISI - Yudil Chatim.pdf",
  },
];

const seminar_udayana_presentation = [
  {
    title: "Seminar Udayana  - Joe Sidek",
    subtitle: "Seminar Udayana - Joe Sidek.pdf",
    size: "2.0 MB",
    url: "/files/Seminar Udayana - Joe Sidek.pdf",
  },
  {
    title: "Seminar Udayana - Ida Bagus Made Ari Segara + Ida Bagus Anom Wisnu Pujana",
    subtitle: "Seminar Udayana - Ida Bagus Made Ari Segara + Ida Bagus Anom Wisnu Pujana.pdf",
    size: "19.0 MB",
    url: "/files/Seminar Udayana - Ida Bagus Made Ari Segara + Ida Bagus Anom Wisnu Pujana.pdf",
  },
  {
    title: "Seminar Udayana - kristiawan",
    subtitle: "Seminar Udayana - kristiawan.pdf",
    size: "3.6 MB",
    url: "/files/Seminar Udayana - kristiawan.pdf",
  },
  {
    title: "Seminar Udayana - kristiawan PPT",
    subtitle: "Seminar Udayana - Kristiawan 1.pdf",
    size: "4.4 MB",
    url: "/files/Seminar Udayana - Kristiawan 1.pdf",
  },
  {
    title: "Seminar ISI - Nyoman Dewi Pebryani",
    subtitle: "Seminar ISI - Nyoman Dewi Pebryani.pdf",
    size: "3.3 MB",
    url: "/files/Seminar ISI - Nyoman Dewi Pebryani.pdf",
  },
  {
    title: "Seminar Udayana - Laksmi De Neefe Suardana",
    subtitle: "Seminar Udayana - Laksmi De Neefe Suardana.pdf",
    size: "1.5 MB",
    url: "/files/Seminar Udayana - Laksmi De Neefe Suardana.pdf",
  },
  {
    title: "Seminar Udayana - Lita Rahmiati",
    subtitle: "Seminar Udayana - Lita Rahmiati.pdf",
    size: "1.5 MB",
    url: "/files/Seminar Udayana - Lita Rahmiati.pdf",
  },
  {
    title: "Seminar Udayana - Putu Ardiyasa Presentation",
    subtitle: "Seminar Udayana - Putu Ardiyasa Presentation.pdf",
    size: "1.5 MB",
    url: "/files/Seminar Udayana - Putu Ardiyasa Presentation.pdf",
  },
];

const ResourcesSection = ({ page }: { page: string }) => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <div className="flex items-center mb-4">
              <div className="w-10 h-1 bg-black mr-4 rounded-full"></div>
              <p className="text-sm font-medium">Resources</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Access Key</h2>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-600">
              Resources
            </h2>
            <p className="text-base leading-relaxed">
              Download essential resources and PDFs related to the CHANDI 2025.
              Access our comprehensive guide, speaker bios, and event schedules
              to enhance your experience. Stay informed and engaged with the
              latest updates and materials that will help you make the most of
              this cultural gathering.
            </p>
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
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto mt-12">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center lg:mb-10">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-yellow-600">
              Presentations
            </h2>
            <p className="text-base leading-relaxed">
              Download presentations from key speakers and dignitaries. Access
              presentations from the Minister of Culture, Coordinator Minister,
              and other distinguished guests to gain insights into the cultural
              initiatives and discussions that shaped CHANDI 2025.
            </p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4"></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Opening Presentations
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {opening_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Panel Discussion
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {panel_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Plenary
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {plenary_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Workshop
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {workshop_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Seminar ISI
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {seminar_isi_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:gap-16 items-start md:items-center mb-8">
          {/* Left Column - Title and Description */}
          <div className="md:w-2/5 w-full mb-10 md:mb-0 self-start md:min-w-[320px] md:max-w-[400px]">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 text-yellow-600">
              Seminar Universitas Udayana
            </h2>
            <p className="text-base leading-relaxed"></p>
          </div>
          {/* Right Column - Resource List */}
          <div className="md:w-3/5 w-full">
            <div className="flex flex-col gap-4">
              {seminar_udayana_presentation.map((res, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-neutral-50 rounded-2xl px-4 py-3 shadow-sm hover:shadow-md transition group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl mr-4">
                    <FaFilePdf className="text-red-500 text-2xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold truncate">{res.title}</div>
                    <div className="text-xs text-neutral-500 truncate">
                      {res.subtitle}
                    </div>
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
