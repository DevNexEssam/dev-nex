"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TitleSections = ({ title }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <h1 className="text-[25px] md:text-[35px] lg:text-[35px] capitalize text-transparent bg-clip-text bg-gradient-to-r from-main_color to-white mb-20 mx-auto w-max font-bold" data-aos="zoom-in">
      {title}
    </h1>
  );
};

export default TitleSections;
