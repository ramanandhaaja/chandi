import Image from "next/image";
import { useState } from "react";

type OptionType = "delegation" | "public" | "press" | "speaker";
type DelegationType = "domestic" | "international" | null;

const RegisterOption = () => {
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const [delegationType, setDelegationType] = useState<DelegationType>(null);

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    // Reset delegation type when switching between options
    if (option !== "delegation") {
      setDelegationType(null);
    }
  };
  
  const handleDelegationTypeClick = (type: DelegationType) => {
    setDelegationType(type);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Registration Type Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center w-full">
        {/* Investors */}
        <div 
          onClick={() => handleOptionClick("delegation")}
          className={`bg-[#FCFAF5] ${selectedOption === "delegation" ? "rounded-full border border-solid border-[#D49300]" : "rounded-3xl border border-solid border-[#E9D7B6]"} p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg cursor-pointer`}
        >
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/images/register/delegation.png"
              alt="Delegasi"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Delegation</p>
        </div>

        {/* Business Man */}
        <div 
          onClick={() => handleOptionClick("public")}
          className={`bg-[#FCFAF5] ${selectedOption === "public" ? "rounded-full border border-solid border-[#D49300]" : "rounded-3xl border border-solid border-[#E9D7B6]"} p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg cursor-pointer`}
        >
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/images/register/public.png"
              alt="Umum"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Public</p>
        </div>
        {/* Founder */}
        <div 
          onClick={() => handleOptionClick("press")}
          className={`bg-[#FCFAF5] ${selectedOption === "press" ? "rounded-full border border-solid border-[#D49300]" : "rounded-3xl border border-solid border-[#E9D7B6]"} p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg cursor-pointer`}
        >
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/images/register/press.png"
              alt="Media"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Press</p>
        </div>
        <div 
          onClick={() => handleOptionClick("speaker")}
          className={`bg-[#FCFAF5] ${selectedOption === "speaker" ? "rounded-full border border-solid border-[#D49300]" : "rounded-3xl border border-solid border-[#E9D7B6]"} p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg cursor-pointer`}
        >
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/images/register/speaker.png"
              alt="Speaker"
              className="object-contain"
              width={80}
              height={80}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Speaker</p>
        </div>
      </div>

      {/* Delegation Type Options */}
      {selectedOption === "delegation" && (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto px-4">
          <div 
            onClick={() => handleDelegationTypeClick("domestic")}
            className={`${delegationType === "domestic" ? "border-2 border-[#D49300] text-[#D49300]" : "border border-[#E9D7B6] text-[#D49300]"} bg-white rounded-xl py-6 px-8 text-center font-medium cursor-pointer transition-all hover:shadow-md flex items-center justify-center h-16`}
          >
            <span className="text-lg">Domestic</span>
          </div>
          <div 
            onClick={() => handleDelegationTypeClick("international")}
            className={`${delegationType === "international" ? "border-2 border-[#D49300] text-[#D49300]" : "border border-[#E9D7B6] text-[#D49300]"} bg-white rounded-xl py-6 px-8 text-center font-medium cursor-pointer transition-all hover:shadow-md flex items-center justify-center h-16`}
          >
            <span className="text-lg">International</span>
          </div>
        </div>
      )}

      {/* Description Box */}
      <div className="mt-12 p-8 text-center">
        <p className="text-gray-700 leading-relaxed">
          Dive deeper into the transformative power of the Culture Summit, a
          pivotal event designed to cultivate collaboration among teams, enhance
          employee engagement, spark innovative ideas, and ensure organizations
          stay ahead in an ever-evolving business landscape. This summit serves
          as a platform for sharing insights, fostering connections, and
          igniting a culture of creativity that empowers employees to thrive and
          contribute to the company&apos;s success.
        </p>
      </div>
    </div>
  );
};
export default RegisterOption;
