"use client";

import { motion } from "framer-motion";

import { styles } from "@/app/style";
import { experiences } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";
import { textVariant } from "@/utils/motion";
import Image from "next/image";

type prop = {
  experience: { [key: string]: any };
};

const ExperienceCard: React.FC<prop> = ({ experience }) => {
  return (
    <section className="flex flex-col md:flex-row gap-y-10 items-center justify-start my-4 bg-[#1d1836] p-10 border-b-[3px] border-white">
      <Image
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%] object-contain"
      />
      <div className="flex flex-col items-start justify-between gap-2">
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.company_name}
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point: string, index: string) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
        <p className="text-secondary text-[16px] font-semibold m-0">
          {experience.date}
        </p>
      </div>
    </section>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className={styles.sectionSubText}>Where I have Worked so far</p>
        <h2 className={styles.heroHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <div>
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
