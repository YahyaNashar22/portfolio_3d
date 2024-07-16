"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

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
      {
        isLoading && (
          <Image
            src={image}
            alt="website_preview"
            className="w-full h-full object-cover rounded-2xl"
          />
        )
        //  (
        //   <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
        //     Loading video...
        //   </div>
        // )
      }
    </div>
  );
};

export default ShortPreview;
