import React from "react";
import { notFound } from "next/navigation";
import MuxPlayer from "@mux/mux-player-react";
import FooterSection from "@/components/FooterSection";

interface PageProps {
  params: { playbackId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function StreamPage({ params }: PageProps) {
  const { playbackId } = params;

  if (!playbackId) {
    notFound();
    return null;
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-black">
        <h1>Live Stream</h1>
        <MuxPlayer
          playbackId={playbackId}
          streamType="live"
          autoPlay
          style={{
            width: "720px",
            height: "405px",
            background: "#000",
            borderRadius: 8,
            boxShadow: "0 2px 12px #0002",
          }}
        />
        <p className="mt-4 text-gray-600">
          Share this page to let others watch your stream!
        </p>

        {/* Footer Section */}
        <FooterSection />
      </main>
    </>
  );
}
