"use client";

import React from "react";
import { notFound, useParams } from "next/navigation";
import MuxPlayer from "@mux/mux-player-react";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";

export default function StreamPage() {
  // Get params from useParams hook instead
  const params = useParams();
  const playbackId = params?.playbackId as string;

  if (!playbackId) {
    notFound();
    return null;
  }

  return (
    <>
      {/* Header Section */}
      <HeaderSection />
      <main className="flex flex-col items-center justify-center h-screen text-black pt-24">
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
