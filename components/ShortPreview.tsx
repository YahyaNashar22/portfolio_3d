"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Prop = {
  video: string;
  name: string;
  image: string | StaticImageData;
};

const ShortPreview: React.FC<Prop> = ({ video, name, image }) => {
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
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            placeholder="blur"
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
