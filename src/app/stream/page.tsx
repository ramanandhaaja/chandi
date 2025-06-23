"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const startStream = async () => {
    setLoading(true);
    const res = await fetch("/api/create-stream", { method: "POST" });
    const data = await res.json();
    if (data.playbackId) {
      router.push(`/stream/${data.playbackId}`);
    } else {
      alert("Error starting stream");
    }
    setLoading(false);
  };

  return (
    <div className="bg-[#5B5630]">
      {/* Header Section */}
      <HeaderSection />
      <main className=" w-full min-h-screen flex flex-col items-center justify-center  overflow-auto pt-24">
        {/* Live Stream Preview Box */}
        <div
          className="mt-8 w-[1080px] h-[608px] min-w-[1080px] min-h-[608px] bg-black shadow-2xl flex items-center justify-center text-white text-3xl font-bold mb-16 mx-auto"
          style={{ width: 1080, height: 608, minWidth: 1080, minHeight: 608 }}
        >
          <button onClick={startStream} disabled={loading}>
            {loading ? "Creating Stream..." : "Start New Stream"}
          </button>
        </div>

        {/* Footer Section */}
        <FooterSection />
      </main>
    </div>
  );
}
