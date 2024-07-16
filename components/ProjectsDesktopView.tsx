import Image, { StaticImageData } from "next/image";
import ShortPreview from "./ShortPreview";
import { Tilt } from "react-tilt";

type props = {
  github: string | StaticImageData;
  live_globe: string | StaticImageData;
  isShortPreview: boolean;
  name: string;
  video?: string;
  image: string | StaticImageData;
  description: string;
  tags: any[];
  source_code_link_back_end?: string;
  source_code_link_front_end?: string;
  live_link?: string;
};

const ProjectsDesktopView: React.FC<props> = ({
  isShortPreview,
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
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative"
    >
      <div className="relative w-full h-[240px]">
        {isShortPreview && video && <ShortPreview video={video} />}

        {!isShortPreview && (
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
            placeholder="blur"
          />
        )}

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          {/* Backend Github Repo Link */}
          {source_code_link_back_end && (
            <div
              onClick={() => window.open(source_code_link_back_end, "_blank")}
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
              onClick={() => window.open(source_code_link_front_end, "_blank")}
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
      <div className="mt-5">
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
    </Tilt>
  );
};

export default ProjectsDesktopView;
