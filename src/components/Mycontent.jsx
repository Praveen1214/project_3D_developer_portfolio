import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { eye } from "../assets";
import { SectionWrapper } from "../hoc";
import { content } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 1, 0.75)}>
      <Tilt
        options={{
          max: 0.5,
          scale: 1,
          speed: 150,
        }}
        className='bg-gray-900 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={eye}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>


      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>problem solver</p>
        <h2 className={`${styles.sectionHeadText}`}>Content Creator</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          As a dedicated tech enthusiast and problem-solver, I identified a significant gap in the online community for Sri Lankan developers and tech professionals. While platforms like Stack Overflow provide a global space for project-related discussions, there was no localized forum catering specifically to the needs and challenges faced by Sri Lankan tech enthusiasts. To address this, I created the "Sri Lankan Tech Enthusiasts" Facebook group.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {content.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
