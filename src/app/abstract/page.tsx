import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import HeroAlternative from "@/components/HeroAlternative";
import ContactsOption from "@/components/contact_us/ContactsOption";
import Image from "next/image";

export default function ContactUsPage() {
  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <HeroAlternative
        title="CALL FOR ABSTRACT"
        subtitle='The CHANDI 2025 will convene global leaders in Bali from September 3 to 5, 2025, under the theme "Culture for the Future." It aims to explore cultures role in sustainable development through four panel discussions. The Programme Committee invites abstract submissions for presentations.'
      />

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-24 text-[#4A2E2B]">
        <div className="space-y-12 md:space-y-20">
          

          
          {/* Selected Abstracts Announcement Content */}
          <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-relaxed">
          <h1 className="text-2xl md:text-5xl font-bold px-3 md:px-6 text-[#4A2E2B] shrink-0 text-center">
                Congratulations to the Selected Abstracts for the CHANDI 2025 Panel Discussions!
              </h1>
            <p>
              We are delighted to announce the winning abstracts for the CHANDI 2025 Panel Discussions. These abstracts were carefully and objectively
              reviewed by our distinguished Co-Hosts: ICOM (International Council of Museums) Indonesia, ICOMOS (International Council on Monuments and
              Sites) Indonesia, BPPI (Indonesian Heritage Trust), and BRIN (National Research and Innovation Agency), to ensure alignment with the overall
              theme of the panel and the spirit of CHANDI 2025.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">
                PANEL 1: “Reclaiming History, Restoring Justice: International Cooperation for Repatriation and the Fight Against Illicit Trafficking of Cultural Objects”
              </h3>
              <ol className="list-decimal list-outside pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Pramudji NF</p>
                  <p className="text-sm md:text-base">Faculty of Cultural Sciences, Khairun University, Ternate, the Republic of Indonesia</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Diaspora Collections and Multi-layered Claims: A Systematic Literature Review on Negotiation Practices</p>
                </li>
                <li>
                  <p className="font-semibold">Muhammad Fahmi Reksa Al Farisi</p>
                  <p className="text-sm md:text-base">SOAS University of London</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Restitution and Responsibility: International Legal Efforts to Fight Illicit Trafficking and Repatriate Cultural Heritage (A United Kingdom–Southeast Asia Case Study)</p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">
                PANEL 2: “Traditional Knowledge and Local Practices in Building Resilient and Inclusive Societies in the Post-2030 World”
              </h3>
              <ol className="list-decimal list-outside pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Fakhriati</p>
                  <p className="text-sm md:text-base">National Research and Innovation Agency</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Tradition as Infrastructure: Reclaiming local knowledge for resilient futures in the Indonesian archipelago</p>
                </li>
                <li>
                  <p className="font-semibold">A. Hukmi</p>
                  <p className="text-sm md:text-base">Makassar Islamic University</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Culture as Infrastructure: Rituals and Oral Traditions of the Hukaea Laea Indigenous Community in Southeast Sulawesi in Building Inclusive and Resilient Societies</p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">
                PANEL 3: “Financing the Future of Culture: Unlocking Investment for Preservation and Innovation”
              </h3>
              <ol className="list-decimal list-outside pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Ahmad Saifudin Mutaqi</p>
                  <p className="text-sm md:text-base">Islamic University of Indonesia (Universitas Islam Indonesia/UII) / Sustainable Inclusive Heritage Economic Community (Komunitas Ekonomi Pusaka Inklusif Berkelanjutan/KEPel)</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Sustainable Cultural Heritage Preservation Strategies through Crowdsourcing and Participatory Funding</p>
                </li>
                <li>
                  <p className="font-semibold">Prasasti S.</p>
                  <p className="text-sm md:text-base">Maastricht University, Netherlands</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> From Tax to Score: Sustainable Funding Strategy to Conserve Indonesian Classical Music</p>
                </li>
              </ol>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-bold">
                PANEL 4: “Responding the Climate Risks to Heritage and Fostering Culture-Based Climate Action”
              </h3>
              <ol className="list-decimal list-outside pl-6 space-y-4">
                <li>
                  <p className="font-semibold">Dewi D.A.P</p>
                  <p className="text-sm md:text-base">BALIDOC Film & Documentary Community</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Children’s Documentary as a Cultural Climate Action Tool: The Case of Wana Kerthi – A Celebration for Nature</p>
                </li>
                <li>
                  <p className="font-semibold">Somya Goel</p>
                  <p className="text-sm md:text-base">Indian Institute of Heritage</p>
                  <p className="mt-1"><span className="font-semibold">Title:</span> Echoes of Adaptation: Archaeological Insights from the Meghalayan Age for Climate-Resilient Heritage Management</p>
                </li>
              </ol>
            </div>

            <p className="mt-4">
              Selected authors are kindly requested to confirm their participation by <span className="font-semibold">23 August 2025</span>, to present at the Panel Discussions during the Summit. We look forward to your contributions and to welcoming you in Bali!
            </p>

            <p className="mt-4">
            We received over 200 abstracts in the very short time frame.  For the  abstract that have not yet been selected to be presented in this Panel Discussion, We appreciate your hard work and and would be very interested to hear from you again in future endeavors.
<br/><br/>
Should you be interested to join CHANDI 2025 and become a participant in the panel discussion and the many events we have in store, you are welcome to join us by following <b><u><a href="https://registration-chandisummit2025.genstix.id/" className="underline">this link</a></u></b>. We have attached the invitation below, and note that this summit is free and we do not take any fee for the registration. Although we do not cover transport and accommodation participants will be welcome to join our opening ceremony, entertainment, workshops, refreshments and enjoy our booths in our venue.
<br/><br/>
Warm regards,
<br/><br/>
CHANDI 2025 Secretariat</p>
          </div>
          
          <div className="mt-16 md:mt-24 py-8 md:py-10">
            <div className="flex items-center" aria-hidden="true">
              <hr className="flex-1 border-gray-400" />
              <h1 className="text-2xl md:text-5xl font-bold px-3 md:px-6 text-[#4A2E2B] shrink-0 text-center">
                About Abstract
              </h1>
              <hr className="flex-1 border-gray-400" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-12 md:mb-20">
            <div className="md:w-1/4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
                Background
              </h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-base md:text-lg leading-relaxed">
                The CHANDI 2025 (Culture, Heritage, Art, Narrative,
                Diplomacy, and Innovation) will convene global leaders,
                policymakers, scholars, and cultural practitioners under the
                theme “Culture for the Future.” This summit aims to position
                culture as a catalyst for sustainable development, peace, and
                innovation. As part of this mission, four high-level panel
                discussions will explore critical intersections of culture,
                sustainability, and technology. The CHANDI 2025 Programme
                Committee invites abstract submissions for presentations at the
                conference in Bali, Indonesia, from 3 to 5 September 2025.
              </p>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-12 md:mb-20">
            <div className="md:w-1/4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
                Objectives
              </h2>
            </div>
            <div className="md:w-3/4">
              <ol className="list-decimal list-inside space-y-3 md:space-y-2 text-base md:text-lg">
                <li>
                  Bridging academic research, policy insights, and practices at
                  the grassroots level.
                </li>
                <li>
                  Develop policy recommendations and collaborative frameworks.
                </li>
                <li>Connect stakeholders for post-summit initiatives.</li>
              </ol>
            </div>
          </div>

          {/* Topics Section */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 mb-12 md:mb-20">
            <div className="md:w-1/4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
                Topics
              </h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-base md:text-lg mb-4">
                The CHANDI 2025 Program Committee calls on participants
                to submit abstracts on the following topics:
              </p>
              <ol className="list-decimal list-inside space-y-3 md:space-y-2 text-base md:text-lg">
                <li>
                  Reclaiming History, Restoring Justice: International
                  Cooperation for Repatriation and the Fight Against Illicit
                  Trafficking of Cultural Objects.
                </li>
                <li>
                  Traditional Knowledge and Local Practices in Building
                  Resilient and Inclusive Societies in the Post-2030 World.
                </li>
                <li>
                  Financing the Future of Culture: Unlocking Investment for
                  Preservation and Innovation.
                </li>
                <li>
                  Responding to the Climate Risks to Heritage and Fostering
                  Culture-Based Climate Action.
                </li>
              </ol>
              <p className="text-base md:text-lg mt-4">
                Our four topics can be viewed as standalone, but they are also
                deeply intertwined with one another. The topics may be seen as
                corollaries complementary to each other. The topics can be
                considered as widely as possible and are designed in keeping
                with our mission to encourage ideas about culture for the
                future.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Guidelines Title */}
        {/* <div className="mt-16 md:mt-24 py-8 md:py-10">
          <div className="flex items-center" aria-hidden="true">
            <hr className="flex-1 border-gray-400" />
            <h1 className="text-2xl md:text-5xl font-bold px-3 md:px-6 text-[#4A2E2B] shrink-0 text-center">
              Submission Guidelines
            </h1>
            <hr className="flex-1 border-gray-400" />
          </div>
        </div>

        {/* Abstract Requirements Section */}
        {/* <div className="flex flex-col md:flex-row gap-6 md:gap-16 mt-12 md:mt-20">
          <div className="md:w-1/4">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">
              Abstract
              <br />
              Requirements
            </h2>
          </div>
          <div className="md:w-3/4">
            <ol className="list-decimal list-outside pl-4 md:pl-5 space-y-4 md:space-y-4 text-base md:text-lg">
              <li>The abstract submitted must be original work.</li>
              <li>The abstract should be written in English.</li>
              <li>
                It should include the title, authors’ full names (indicating
                the presenting author), affiliation, keywords, and main text.
              </li>
              <li>Individuals and collaborative teams are welcome.</li>
              <li>
                The main text should be summarized in separate paragraphs
                for: introduction, methodology, results, conclusions, and topic
                relevance.
              </li>
              <li>
                The maximum length of the main text is 350 words (excluding
                spaces).
              </li>
              <li>
                The abstract must be submitted as a Microsoft Word document
                (docx).
              </li>
              <li>
                Page margins must be set as follows: Top = 2.5 cm; Bottom =
                2.5 cm; Left = 2.25 cm; Right = 2.0 cm.
              </li>
              <li>
                Use Times New Roman font for all text, including headings.
              </li>
              <li>
                Specific instructions:
                <ul className="list-disc list-outside pl-4 md:pl-6 mt-2 space-y-2 text-sm md:text-base">
                  <li>
                    Title: 14 points, bold, sentence case (capitals for proper
                    nouns only).
                  </li>
                  <li>
                    Authors’ names: 11 points; initials of the first name should
                    come after the family name for each author; the presenting
                    author should be underlined; use superscript number to
                    indicate different affiliations.
                  </li>
                  <li>
                    Authors’ affiliation: 11 points, sentence case (capitals for
                    first letter and proper nouns only); provide email address
                    of the first or presenting author and each affiliation
                    defined by a superscript number.
                  </li>
                  <li>Abstract text: 12 points.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div> */}
      </div>

      {/* Important Dates Section */}
      <div style={{ backgroundColor: "#DAAD120D" }} className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-[#4A2E2B]">
          <h2 className="text-4xl font-bold text-center mb-12">
            Important Dates
          </h2>
          <div className="space-y-4 max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-6 md:px-8 py-4">
              <div className="font-semibold text-base md:text-lg md:w-[466px] flex-shrink-0">
                Opening abstract
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                July 08, 2025
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                23:59 GMT+7
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-6 md:px-8 py-4">
              <div className="font-semibold text-base md:text-lg md:w-[466px] flex-shrink-0">
                Deadline for Abstract Submission
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                August 10, 2025
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                23:59 GMT+7
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-6 md:px-8 py-4">
              <div className="font-semibold text-base md:text-lg md:w-[466px] flex-shrink-0">
                Notification of Acceptance of Abstract
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                August 20, 2025
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                23:59 GMT+7
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1 md:gap-0 min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-6 md:px-8 py-4">
              <div className="font-semibold text-base md:text-lg md:w-[466px] flex-shrink-0">
                CHANDI 2025 day
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                September 03, 2025
              </div>
              <div className="text-base md:text-lg md:w-[266px] flex-shrink-0 md:flex md:justify-center">
                14:00 GMT+7
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
          Submission Method
        </h2>
        <div className="mb-8 bg-[#FCFAF5] rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6] p-4 sm:p-8">
          <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl flex items-center justify-center mb-4 h-auto">
            <div className="flex flex-col space-y-2 sm:space-y-4 justify-center items-center text-[#9D7935] w-full">
              <p className="text-center font-medium text-base sm:text-lg">
                Email to:
              </p>
              <p className="text-center font-medium text-lg sm:text-2xl break-all">
                secretariatchandisummit2025@kemenbud.go.id
              </p>
              <p className="text-center font-medium text-base sm:text-lg">
                Subject Line:
              </p>
              <p className="text-center font-medium text-lg sm:text-2xl break-words">
                [Panel 1/2/3/4] - Abstract Title - Author Name
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center w-full">
          <div className="bg-[#FCFAF5] rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6] p-4 sm:p-8">
            <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl flex items-center justify-center mb-4 h-[214px]">
              <div className="flex flex-col space-y-2 sm:space-y-4 justify-center items-center text-[#210000] w-full">
                <p className="text-center font-semibold text-2xl sm:text-4xl font-medium">
                  Important Notes
                </p>
                <ul className="text-base sm:text-xl list-disc list-inside mt-2">
                  <li>This conference only accepts the abstract.</li>
                  <li>
                    Authors must be able to give a 15-20 minute presentation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-[#FCFAF5] rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6] p-4 sm:p-8">
            <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl flex items-center justify-center mb-4 h-[214px]">
              <div className="flex flex-col space-y-2 sm:space-y-4 justify-center items-center text-[#210000] w-full">
                <p className="text-center font-semibold text-2xl sm:text-4xl font-medium">
                  Benefits for Selected Presenters
                </p>
                <ul className="text-base sm:text-xl list-disc list-inside mt-2">
                  <li>Complimentary summit registration for first authors</li>
                  <li>Global Exposure</li>
                  <li>Networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      <FooterSection />
    </>
  );
}
