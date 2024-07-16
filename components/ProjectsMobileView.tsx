import Image, { StaticImageData } from "next/image";
import ShortPreview from "./ShortPreview";

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
  return (
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative">
      sart
    </div>
  );
};

export default ProjectsMobileView;
