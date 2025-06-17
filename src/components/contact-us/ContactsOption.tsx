import Image from "next/image";
import EmailIcon from "../../../public/email.svg";

const ContactsOption = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FCFAF5] relative overflow-hidden">
      <div className="absolute top-0 right-0 bottom-0 z-0">
        <Image
          src="/for-whom-bg.svg"
          alt="pattern"
          width={800}
          height={1000}
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center w-full">
        <div className="rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
          <div className="w-[630px] h-[314px] flex items-center justify-center mb-4">
            <div className="flex flex-col space-y-4 justify-center items-center text-[#9D7935]">
              <p className="text-center font-medium">Whatsapp Chat</p>
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp logo"
                width={53}
                height={53}
              />
              <p className="text-center font-medium text-2xl">08293849224</p>
            </div>
          </div>
        </div>

        <div className="bg-[#FCFAF5] rounded-3xl flex flex-col items-center justify-center transition-all hover:shadow-lg border border-solid border-[#E9D7B6]">
          <div className="w-[630px] h-[314px] flex items-center justify-center mb-4">
            <div className="flex flex-col space-y-4 justify-center items-center text-[#9D7935]">
              <p className="text-center font-medium">Email</p>
              <Image src="/email.svg" alt="email logo" width={55} height={55} />
              <p className="text-center font-medium text-2xl">
                hello@kemenkebud.gov
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description Box */}
      <div className="bg-[#FCFAF5] relative mt-12 border border-gray-200 rounded-lg p-8 text-center">
        <p className="w-2/3 mx-auto text-[#1F1F1F] leading-relaxed">
          Dive deeper into the transformative power of the Culture Summit, a
          pivotal event designed to cultivate collaboration among teams, enhance
          employee engagement, spark innovative ideas, and ensure organizations
          stay ahead in an ever-evolving business landscape. This summit serves
          as a platform for sharing insights, fostering connections, and
          igniting a culture of creativity that empowers employees to thrive and
          contribute to the company&apos;s success.
        </p>
      </div>
    </section>
  );
};
export default ContactsOption;
