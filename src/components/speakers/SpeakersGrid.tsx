import { getImageURL, getItems } from "@/lib/api";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

interface SpeakerSectionData {
  speakers?: {
    id: number;
    name: string;
    title: string;
    group: string;
    sub_group: string;
    image: string;
    order: number;
  }[];
}

const SpeakersGrid = () => {
  const [speakerData, setSpeakerData] = useState<SpeakerSectionData | null>(
    null
  );

  useEffect(() => {
    async function fetchSpeakerData() {
      try {
        const items = await getItems("speaker", {
          fields: "*",
        });
        if (items && items.length > 0) {
          setSpeakerData({
            speakers: items,
          });
        }
      } catch (error) {
        console.error("Failed to fetch about section data:", error);
      }
    }
    fetchSpeakerData();
  }, []);
  
  const groupedSpeakers = useMemo(() => {
    const groups: Record<string, NonNullable<SpeakerSectionData["speakers"]>> = {};
    const list = speakerData?.speakers ?? [];
    
    // First group the speakers
    for (const sp of list) {
      const key = sp.group || "Others";
      if (!groups[key]) groups[key] = [];
      groups[key].push(sp);
    }
    
    // Then sort speakers within each group by their order
    Object.keys(groups).forEach(group => {
      groups[group].sort((a, b) => (a.order || 0) - (b.order || 0));
    });
    
    return groups;
  }, [speakerData]);
  return (
    <div className="py-20 mx-auto bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(groupedSpeakers).map(([groupName, speakers]) => (
          <section key={groupName} className="px-12 sm:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">{groupName}</h2>
            {speakers[0]?.sub_group && (
              <h2 className="text-2xl font-bold mb-6">{speakers[0].sub_group}</h2>
            )}
            <div className={`grid ${groupName === 'Opening' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
              {speakers.map((speaker) => (
                <div key={speaker.id} className={`flex flex-col ${groupName === 'Opening' ? 'items-center md:items-start' : 'items-center'}`}>
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
                  <div className={`${groupName === 'Opening' ? 'w-64 md:w-[380px] text-center' : 'text-center'} py-4 pb-6`}>
                    <h3 className="text-xl font-semibold">{speaker.name}</h3>
                    <p>{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default SpeakersGrid;
