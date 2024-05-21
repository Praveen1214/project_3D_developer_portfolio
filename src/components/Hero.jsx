import { motion } from "framer-motion";
import { herobg } from "../assets";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[180px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#7cf3cc]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Praveen
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer,
            <br className="sm:block hidden" />
            Content Creator & Designer
          </p>
          <p className="text-white mt-5 text-[19px]">
            Crafting Tomorrow's Innovations !
          </p>

          <a
            href="/CV - Dileepa praveen.pdf" 
            download="CV - Dileepa praveen.pdf"
            className="inline-block mt-10"
          >
            <button
              type="button"
              className="py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center cursor-pointer rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Download CV
            </button>
          </a>
        </div>

<div className="hidden sm:flex flex-col justify-center items-center mx-5 ml-20">
        <img
          src={herobg}
          alt="hero"
          className="w-[700px] h-[500px] object-contain"
          
        />
      </div>
    </div>

      <div className="absolute xs:bottom-12 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
