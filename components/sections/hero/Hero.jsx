"use client"
import Image from "next/image";
import { LiaDownloadSolid } from "react-icons/lia";
import { HERO_LINKS } from "./heroData";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="flex items-center justify-center py-10 lg:py-20 lg:h-screen">
      <div className="circle "></div>
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 gap-10 items-center justify-center lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-[18px] font-bold sm:text-[20px] md:text-[30px] text-primary_color">
              I am Essam
            </h3>
            <h1 className="text-[40px] leading-[50px] font-bold sm:text-[50px] sm:leading-[60px] lg:text-[70px] lg:leading-[70px] text-transparent bg-clip-text bg-gradient-to-r from-main_color to-main_color/40">
            <Typewriter
            options = {{
              strings: ["Web Developer", "Frontend Developer", "Next.js & Tailwind CSS"],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: "|"
            }}
            />
            </h1>
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-secondary_color max-w-[90%] md:max-w-[600px]">
              I craft modern front-end solutions using Next.js and Tailwind CSS
              to deliver seamless and user-focused experiences that enhance web
              interactions
            </h3>
            {/* SOCIAL & BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-5 mt-5">
              <Link
                href="/"
                className="flex items-center gap-3 px-6 py-4 rounded-full text-main_color border border-main_color hover:bg-main_color hover:text-white"
              >
                <span className="block capitalize font-bold">Download CV</span>
                <span className="block">
                  <LiaDownloadSolid />
                </span>
              </Link>
              <div className="flex items-center gap-3">
                {HERO_LINKS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className="text-main_color p-2 rounded-full border border-main_color hover:bg-main_color hover:text-white"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/profile.png"
              alt="photo"
              width={300}
              height={300}
              quality={100}
              className="rounded-full border-2 border-main_color/25 transition-all duration-500 hover:border-main_color sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
