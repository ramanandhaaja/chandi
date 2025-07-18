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
        subtitle='The CHANDI SUMMIT 2025 will convene global leaders in Bali from September 3 to 5, 2025, under the theme "Culture for the Future." It aims to explore cultures role in sustainable development through four panel discussions. The Programme Committee invites abstract submissions for presentations.'
      />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-[#4A2E2B]">
        <div className="space-y-20">
          {/* Background Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20">
            <div className="md:w-1/4">
              <h2 className="text-4xl font-bold">Background</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-lg leading-relaxed">
                The CHANDI SUMMIT 2025 (Culture, Heritage, Art, Narrative,
                Diplomacy, and Innovation) will convene global leaders,
                policymakers, scholars, and cultural practitioners under the
                theme “Culture for the Future.” This summit aims to position
                culture as a catalyst for sustainable development, peace, and
                innovation. As part of this mission, four high-level panel
                discussions will explore critical intersections of culture,
                sustainability, and technology. The CHANDI SUMMIT 2025 Programme
                Committee invites abstract submissions for presentations at the
                conference in Bali, Indonesia, from 3 to 5 September 2025.
              </p>
            </div>
          </div>

          {/* Objectives Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20">
            <div className="md:w-1/4">
              <h2 className="text-4xl font-bold">Objectives</h2>
            </div>
            <div className="md:w-3/4">
              <ol className="list-decimal list-inside space-y-2 text-lg">
                <li>
                  Bridging academic research, policy insights, and practices
                  at the grassroots level.
                </li>
                <li>
                  Develop policy recommendations and collaborative frameworks.
                </li>
                <li>Connect stakeholders for post-summit initiatives.</li>
              </ol>
            </div>
          </div>

          {/* Topics Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20">
            <div className="md:w-1/4">
              <h2 className="text-4xl font-bold">Topics</h2>
            </div>
            <div className="md:w-3/4">
              <p className="text-lg mb-4">
                The CHANDI SUMMIT 2025 Program Committee calls on participants
                to submit abstracts on the following topics:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-lg">
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
              <p className="text-lg mt-4">
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
        <div className="mt-24 py-10">
          <div className="flex items-center" aria-hidden="true">
            <hr className="flex-1 border-gray-400" />
            <h1 className="text-5xl font-bold px-6 text-[#4A2E2B] shrink-0">
              Submission Guidelines
            </h1>
            <hr className="flex-1 border-gray-400" />
          </div>
        </div>

        {/* Abstract Requirements Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-20">
          <div className="md:w-1/4">
            <h2 className="text-4xl font-bold">
              Abstract
              <br />
              Requirements
            </h2>
          </div>
          <div className="md:w-3/4">
            <ol className="list-decimal list-outside pl-5 space-y-4 text-lg">
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
                <ul className="list-disc list-outside pl-6 mt-2 space-y-2">
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
        </div>
      </div>

      {/* Important Dates Section */}
      <div style={{ backgroundColor: "#DAAD120D" }} className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-[#4A2E2B]">
          <h2 className="text-4xl font-bold text-center mb-12">
            Important Dates
          </h2>
          <div className="space-y-4 max-w-[1200px] mx-auto">
            <div className="flex justify-between items-center min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-8 py-4">
              <div
                style={{ width: "466px" }}
                className="font-semibold text-lg w-[466px] flex-shrink-0"
              >
                Opening abstract
              </div>
              <div
                style={{ width: "266px" }}
                className="text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                July 08, 2025
              </div>
              <div
                style={{ width: "266px" }}
                className="text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                23:59 GMT+7
              </div>
            </div>
            <div className="flex justify-between items-center min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-8 py-4">
              <div
                style={{ width: "466px" }}
                className="font-semibold text-lg w-[466px] flex-shrink-0"
              >
                Deadline for Abstract Submission
              </div>
              <div
                style={{ width: "266px" }}
                className="text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                August 10, 2025
              </div>
              <div
                style={{ width: "266px" }}
                className="text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                23:59 GMT+7
              </div>
            </div>
            <div className="flex justify-between items-center min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-8 py-4">
              <div
                style={{ width: "466px" }}
                className="font-semibold text-lg w-[466px] flex-shrink-0"
              >
                Notification of Acceptance of Abstract
              </div>
              <div
                style={{ width: "266px" }}
                className="text-center text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                August 20, 2025
              </div>
              <div
                style={{ width: "266px" }}
                className="text-center text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                23:59 GMT+7
              </div>
            </div>
            <div className="flex justify-between items-center min-h-[82px] bg-[#FCFAF5] rounded-xl border border-gray-200 px-8 py-4">
              <div
                style={{ width: "466px" }}
                className="font-semibold text-lg w-[466px] flex-shrink-0"
              >
                CHANDI SUMMIT 2025 day
              </div>
              <div
                style={{ width: "266px" }}
                className="text-center text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                September 03, 2025
              </div>
              <div
                style={{ width: "266px" }}
                className="text-center text-lg w-[266px] flex-shrink-0 flex justify-center"
              >
                14:00 GMT+7
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-24">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
    Submission Method
  </h2>
  <div className="mb-8 bg-[#FCFAF5] rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6] p-4 sm:p-8">
    <div className="w-full max-w-md sm:max-w-xl md:max-w-2xl flex items-center justify-center mb-4 h-auto">
      <div className="flex flex-col space-y-2 sm:space-y-4 justify-center items-center text-[#9D7935] w-full">
        <p className="text-center font-medium text-base sm:text-lg">Email to:</p>
        <p className="text-center font-medium text-lg sm:text-2xl break-all">
          secretariatchandisummit2025@kemenbud.go.id
        </p>
        <p className="text-center font-medium text-base sm:text-lg">Subject Line:</p>
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
          <p className="text-center font-semibold text-2xl sm:text-4xl font-medium">Important Notes</p>
          <ul className="text-base sm:text-xl list-disc list-inside mt-2">
            <li>This conference only accepts the abstract.</li>
            <li>Authors must be able to give a 15-20 minute presentation.</li>
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
      <FooterSection />
    </>
  );
}
