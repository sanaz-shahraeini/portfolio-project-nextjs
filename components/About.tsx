
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "@/data";
import { SectionWrapper } from "../hoc/index";
import { fadeIn } from "../lib/motion";
import Image from "next/image";
import "./about.css";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt glareEnable tiltEnable tiltMaxAngleX={30} tiltMaxAngleY={30}>
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="border-2 background-card w-full rounded-[20px] p-[1px]"
        style={{
          //   add these two
          //   you can generate the color from here https://cssgradient.io/
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
            
          />

          <h3 className="text-center text-[20px] font-bold  text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        Who <span className="text-purple">I am?</span>
      </h1>
     
        <p className="text-start text-white-100 my-10 font-bold text-[20px]">
          I'm a skilled web developer with experience in TypeScript &
          JavaScript, and expertise in frameworks like React, Next.js &
          Three.js.
          <br/>I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
    
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
