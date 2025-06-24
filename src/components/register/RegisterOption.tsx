import Image from "next/image";

const RegisterOption = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Registration Type Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 items-center w-full">
        {/* Investors */}
        <div className="bg-[#FCFAF5] rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/money.svg"
              alt="Delegasi ]"
              className="w-10 h-10 object-contain"
              width={16}
              height={16}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Delegasi</p>
        </div>

        {/* Business Man */}
        <div className="bg-[#FCFAF5] rounded-full border border-solid border-[#D49300] p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/suitcase.svg"
              alt="Umum"
              className="w-10 h-10 object-contain"
              width={16}
              height={16}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Umum</p>
        </div>
        {/* Founder */}
        <div className="bg-[#FCFAF5] rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
          <div className="w-16 h-16 flex items-center justify-center mb-4">
            <Image
              src="/mic.svg"
              alt="Media"
              className="w-10 h-10 object-contain"
              width={16}
              height={16}
            />
          </div>
          <p className="text-center text-gray-500 font-medium">Media</p>
        </div>
      </div>

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
