"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import github from "@/public/assets/github.png";
import live_globe from "@/public/assets/live_globe.png";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ShortPreview from "./ShortPreview";

type ProjectCardProp = {
  index: number;
  name: string;
  description: String;
  tags: any[];
  image: StaticImageData;
  video?: string;
  source_code_link_front_end?: string;
  source_code_link_back_end?: string;
  live_link?: string;
};

const ProjectCard: React.FC<ProjectCardProp> = ({
  index,
  name,
  description,
  tags,
  image,
  video,
  source_code_link_front_end,
  source_code_link_back_end,
  live_link,
}) => {
  const [isShortPreview, setIsShortPreview] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSmallScreen(false);
      } else {
        setIsSmallScreen(true);
      }
    };
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onHoverStart={() => {
        if (!isSmallScreen && video) setIsShortPreview(true);
      }}
      onHoverEnd={() => setIsShortPreview(false)}
    >
      {!isSmallScreen ? (
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
          <div className="mt-5">
            <h3>
              {name}{" "}
              {isSmallScreen && video && (
                <span className="float-end violet-gradient text-[14px] p-1.5 rounded-2xl">
                  <button onClick={() => setIsShortPreview(!isShortPreview)}>
                    {isShortPreview ? "Stop preview" : "Watch preview"}
                  </button>
                </span>
              )}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      ) : (
        <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full relative">
          <div className="relative w-full h-[240px]">
            {/* {isShortPreview && video && <ShortPreview video={video} />}

            {!isShortPreview && (
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
                placeholder="blur"
              />
            )} */}

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
          <div className="mt-5">
            <h3>
              {name}{" "}
              {isSmallScreen && video && (
                <span className="float-end violet-gradient text-[14px] p-1.5 rounded-2xl">
                  <button onClick={() => setIsShortPreview(!isShortPreview)}>
                    {isShortPreview ? "Stop preview" : "Watch preview"}
                  </button>
                </span>
              )}
            </h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
