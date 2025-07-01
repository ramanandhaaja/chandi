import Image from "next/image";

const RegisterOption = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Registration Type Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center w-full">
        {/* Investors */}
        <div className="bg-[#FCFAF5] rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
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
        <div className="bg-[#FCFAF5] rounded-full border border-solid border-[#D49300] p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg">
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
        <div className="bg-[#FCFAF5] rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
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
        <div className="bg-[#FCFAF5] rounded-3xl p-8 flex flex-col items-center justify-center aspect-square transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
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
