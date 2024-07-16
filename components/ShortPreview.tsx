"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

type Prop = {
  video: string;
  image: StaticImageData;
};

const ShortPreview: React.FC<Prop> = ({ video, image }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleWaiting = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <video
        controls
        preload="none"
        autoPlay
        muted
        className="w-full h-full rounded-lg absolute z-10"
        onLoadedData={handleLoadedData}
        onWaiting={handleWaiting}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20">
          <ClimbingBoxLoader
            size={24}
            cssOverride={{ width: "100%", height: "100%" }}
            color="#050816"
          />
          <p className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20 blue-text-gradient text-[16px]">
            Loading preview
          </p>
        </div>
      )}
    </div>
  );
};

export default ShortPreview;
