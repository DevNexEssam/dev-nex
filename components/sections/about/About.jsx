"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TitleSections from "@/components/ui/title-section/TitleSections";
import { IoMdDownload } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { INFO_DATA, INFO_LINKS, SKILLS_DATA } from "./AboutData";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    useEffect(() => {
      Aos.init();
    }, []);
  return (
    <section id="about">
      <div className="container">
        <TitleSections title="about me" />
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          {/* LEFT */}
          <div className="w-[300px] h-full bg-bg_alt rounded-[20px] p-[30px] md:w-[400px] sm:w-[400px] mx-auto" data-aos= 'fade-up-right'>
            {INFO_DATA.map((item) => (
              <div key={item.id}>
                <div className="border-container">
                  <Image
                    src={item.photo}
                    alt="profile photo"
                    width={500}
                    height={500}
                    className="rotating-border-image rounded-full "
                  />
                </div>
                <div className="mt-10 text-center flex flex-col gap-4">
                  <h1 className="text-primary_color text-[30px] font-bold capitalize">
                    {item.name}
                  </h1>
                  <h3 className="text-secondary_color text-[15px] tracking-[1px] ">
                    {item.bio}
                  </h3>
                </div>
              </div>
            ))}
            <div className="flex gap-[30px] items-center mx-auto w-max mt-10">
              {INFO_LINKS.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className="text-secondary_color text-[15px] px-[12px] py-[10px] border border-secondary_color/20 rounded-[10px] hover:bg-main_color"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col justify-between gap-5 w-full" data-aos= 'fade-up-left'>
            {/* TOP */}
            <div className="rounded-[20px] p-[30px] bg-bg_alt">
              <div className="mt-5">
                <h1 className="text-primary_color text-[35px] font-bold uppercase">
                  Hi there! 👋 <br />
                  I'm a passionate front-end{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-main_color">
                    developer
                  </span>
                </h1>
                <h1 className="text-[#71717A] text-[20px] font-bold uppercase">
                  Crafting seamless experiences with precision and creativity.
                </h1>
                <p className="text-[17px] text-secondary_color mt-5">
                  I specialize in creating immersive digital experiences that
                  seamlessly blend stunning design with powerful functionality.
                  Every detail, from the layout to the interactions, is
                  thoughtfully crafted to deliver an intuitive and engaging user
                  experience. My focus is on ensuring that every element serves
                  a purpose, creating a harmonious balance between aesthetics
                  and performance.
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap items-center gap-5 mt-5">
                  {SKILLS_DATA.map((item) => (
                    <span key={item.id} className="text-white text-[25px] border border-main_color/25 p-2 rounded-md hover:bg-main_color">
                      {item.icon}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center mt-5">
                  <span className="text-main_color">
                    <FaCode />
                  </span>
                  <span className="text-primary_color font-bold">
                    Open to Freelance Opportunities
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-[20px] p-[30px] bg-bg_alt">
              <div className="flex flex-col gap-4 items-center md:flex-row">
                <Link
                  href="/"
                  className=" flex gap-2 items-center text-primary_color text-[14px] font-bold capitalize bg-main_color px-[30px] py-[15px] rounded-[10px] hover:bg-main_color/50"
                >
                  <span>
                    <IoMdDownload />
                  </span>
                  Download Resume
                </Link>
                <Link
                  href="/"
                  className="capitalize border text-primary_color text-[14px] font-bold border-main_color px-[30px] py-[15px] rounded-[10px] hover:bg-main_color"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
