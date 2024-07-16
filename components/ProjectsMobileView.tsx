import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type props = {
  github: string | StaticImageData;
  live_globe: string | StaticImageData;
  isSmallScreen: boolean;
  isShortPreview: boolean;
  setIsShortPreview: (e: boolean) => void;
  name: string;
  video?: string;
  image: string | StaticImageData;
  description: string;
  tags: any[];
  source_code_link_back_end?: string;
  source_code_link_front_end?: string;
  live_link?: string;
};

const ProjectsMobileView: React.FC<props> = ({
  isSmallScreen,
  isShortPreview,
  setIsShortPreview,
  video,
  image,
  name,
  source_code_link_back_end,
  github,
  source_code_link_front_end,
  live_link,
  live_globe,
  description,
  tags,
}) => {
  const [isShowDetails, setIsShowDetails] = useState<boolean>(false);

  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full relative">
      <div
        className="w-full h-full"
        onClick={() => setIsShowDetails(!isShowDetails)}
      >
        {isShowDetails ? (
          <div className="w-full h-full">
            <div className="mt-12">
              <h3>{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag: { [key: string]: any }) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              {/* Backend Github Repo Link */}
              {source_code_link_back_end && (
                <div
                  onClick={() =>
                    window.open(source_code_link_back_end, "_blank")
                  }
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative z-[100]"
                >
                  <Image
                    src={github}
                    alt="github_back_end"
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                    B
                  </span>
                </div>
              )}
              {/* Frontend Github Repo Link */}
              {source_code_link_front_end && (
                <div
                  onClick={() =>
                    window.open(source_code_link_front_end, "_blank")
                  }
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative z-[100]"
                >
                  <Image
                    src={github}
                    alt="github_front_end"
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <span className="absolute top-0 right-0 bg-yellow-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                    F
                  </span>
                </div>
              )}
              {/* Live Website Preview Link */}
              {live_link && (
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative z-[100]"
                >
                  <Image
                    src={live_globe}
                    alt="live_preview"
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full text-xs w-5 h-5 flex justify-center items-center">
                    L
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            placeholder="blur"
          />
        )}
      </div>
    </div>
  );
};

export default ProjectsMobileView;
