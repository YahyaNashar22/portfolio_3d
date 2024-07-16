"use client";

import { motion } from "framer-motion";
import { styles } from "@/app/style";
import github from "@/public/assets/github.png";
import live_globe from "@/public/assets/live_globe.png";
import SectionWrapper from "@/hoc/SectionWrapper";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import ProjectsDesktopView from "./ProjectsDesktopView";
import ProjectsMobileView from "./ProjectsMobileView";

type ProjectCardProp = {
  index: number;
  name: string;
  description: string;
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
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true);
  // const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
  //   typeof window !== "undefined" && window.innerWidth >= 1024 ? false : true
  // );

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1024) {
  //       setIsSmallScreen(false);
  //     } else {
  //       setIsSmallScreen(true);
  //     }
  //   };
  //   if (typeof window !== "undefined") {
  //     handleResize();
  //     window.addEventListener("resize", handleResize);

  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, []);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      onHoverStart={() => {
        if (!isSmallScreen && video) setIsShortPreview(true);
      }}
      onHoverEnd={() => setIsShortPreview(false)}
    >
      {!isSmallScreen ? (
        <ProjectsDesktopView
          isShortPreview={isShortPreview}
          video={video}
          image={image}
          name={name}
          source_code_link_back_end={source_code_link_back_end}
          github={github}
          source_code_link_front_end={source_code_link_front_end}
          live_link={live_link}
          live_globe={live_globe}
          description={description}
          tags={tags}
        />
      ) : (
        <ProjectsMobileView
          isSmallScreen={isSmallScreen}
          isShortPreview={isShortPreview}
          setIsShortPreview={setIsShortPreview}
          video={video}
          image={image}
          name={name}
          source_code_link_back_end={source_code_link_back_end}
          github={github}
          source_code_link_front_end={source_code_link_front_end}
          live_link={live_link}
          live_globe={live_globe}
          description={description}
          tags={tags}
        />
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

      <div className="w-full flex flex-wrap">
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
