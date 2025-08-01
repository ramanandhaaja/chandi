"use client";

import React from "react";


const VideoHeadline= () => {
  return (
    <section className="w-full m-0 p-0">
      {/* Top Red Section with Video */}
      <div className="relative w-full  flex items-center justify-center overflow-hidden">
        <video
          className="top-0 left-0 w-full object-cover z-[1]"
          src="/video/independence.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoHeadline;
