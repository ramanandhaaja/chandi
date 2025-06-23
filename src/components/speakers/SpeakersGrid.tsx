import { getImageURL, getItems } from "@/lib/api";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SpeakerSectionData {
  breadcrumb?: string;
  title?: string;
  translations?: {
    languages_code: string;
    breadcrumb?: string;
    title?: string;
  }[];
  speakers?: {
    id: number;
    name: string;
    title: string;
    image: string;
  }[];
}

const SpeakersGrid = () => {
  const [speakerData, setSpeakerData] = useState<SpeakerSectionData | null>(
    null
  );

  useEffect(() => {
    async function fetchSpeakerData() {
      try {
        const items = await getItems("speaker_landingpage", {
          fields: "*,translations.*,speakers.*",
        });
        if (items && items.length > 0) {
          setSpeakerData({
            translations: items[0].translations,
            speakers: items[0].speakers,
          });
        }
      } catch (error) {
        console.error("Failed to fetch about section data:", error);
      }
    }
    fetchSpeakerData();
  }, []);
  return (
    <div className="py-20 mx-auto bg-[#FCFAF5]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {speakerData?.speakers?.map((speaker) => (
          <div key={speaker.id} className="flex flex-col items-center">
            <div className="relative w-64 h-80 md:w-[380px] md:h-[427px] rounded-2xl overflow-hidden ">
              <Image
                src={
                  speaker.image
                    ? getImageURL(speaker.image)
                    : "/images/placeholder.svg"
                }
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center py-4 pb-6">
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersGrid;
