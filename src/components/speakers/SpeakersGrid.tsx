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
    // groups -> sub_groups -> speakers
    const groups: Record<string, Record<string, NonNullable<SpeakerSectionData["speakers"]>>> = {};
    const list = speakerData?.speakers ?? [];

    // First group speakers by group and then by sub_group
    for (const sp of list) {
      const groupKey = sp.group || "Others";
      const subGroupKey = sp.sub_group || "";
      if (!groups[groupKey]) groups[groupKey] = {};
      if (!groups[groupKey][subGroupKey]) groups[groupKey][subGroupKey] = [];
      groups[groupKey][subGroupKey].push(sp);
    }

    // Sort speakers within each sub_group by their order
    Object.keys(groups).forEach((groupKey) => {
      Object.keys(groups[groupKey]).forEach((subGroupKey) => {
        groups[groupKey][subGroupKey].sort(
          (a, b) => (a.order || 0) - (b.order || 0)
        );
      });
    });

    return groups;
  }, [speakerData]);
  return (
    <div className="py-20 mx-auto bg-[#FCFAF5]">
      <div className="max-w-7xl mx-auto space-y-12">
        {Object.entries(groupedSpeakers).map(([groupName, subGroups]) => (
          <section
            key={groupName}
            className={`${groupName === 'Opening' ? 'pl-12 pr-12 sm:pr-8' : 'px-12 sm:px-8'}`}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6">{groupName}</h2>

            {Object.entries(subGroups).map(([subGroupName, speakers]) => (
              <div key={subGroupName} className="space-y-4 mb-8">
                {subGroupName && (
                  <h3 className="text-2xl font-bold">{subGroupName}</h3>
                )}
                <div
                  className={`grid ${groupName === 'Opening' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}
                >
                  {speakers.map((speaker) => (
                    <div
                      key={speaker.id}
                      className={`flex flex-col ${groupName === 'Opening' ? 'items-center md:items-start' : 'items-center'}`}
                    >
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
                      <div
                        className={`${groupName === 'Opening' ? 'w-64 md:w-[380px] text-center' : 'w-64 md:w-[380px] text-center'} py-4 pb-6`}
                      >
                        <h3 className="text-xl font-semibold">{speaker.name}</h3>
                        <p>{speaker.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

export default SpeakersGrid;
