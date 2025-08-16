import React from "react";
import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-gray-300 text-[18px] sm:text-[17px] md:text-[18px] lg:text-[19px] max-w-4xl leading-relaxed tracking-wide"
      >
        I’m <span className="text-white font-semibold">Kritika Tyagi</span>, an
        Electronics and Communication Engineering student at{" "}
        <span className="text-white font-semibold">
          KIET Group of Institutions (Batch 2024–2028)
        </span>
        with a strong passion for building innovative, user-friendly web
        applications. My skill set spans{" "}
        <span className="text-white font-medium">
          HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB, and
          Three.js
        </span>
        , enabling me to create responsive designs, interactive 3D experiences,
        and efficient full-stack solutions. Currently, I’m diving into{" "}
        <span className="text-white font-medium">Solidity</span> to expand my
        expertise into the blockchain space, with the goal of developing secure,
        decentralized applications. I love combining creativity with technology
        to solve real-world problems, whether it’s through sleek front-end
        designs, robust back-end systems, or emerging Web3 innovations.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
