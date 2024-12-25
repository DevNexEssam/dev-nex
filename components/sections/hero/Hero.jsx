"use client";
import { LiaDownloadSolid } from "react-icons/lia";
import Link from "next/link";
import { ReactTyped } from 'react-typed';


const Hero = () => {
  return (
    <section className="flex items-center justify-center py-10 lg:py-20 h-screen">
      <div className="circle top-0 right-[0px] md:top-10 md:right-[200px]"></div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Title Section */}
          <h3 className="text-[18px] font-bold sm:text-[20px] md:text-[30px] text-primary_color mx-auto">
            I am Essam
          </h3>
          <h1 className="text-[40px] sm:text-[50px] lg:text-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-main_color to-main_color/40 drop-shadow-lg">
            <ReactTyped
              strings={[
                "Web Developer",
                "Frontend Developer",
                "Next.js Specialist",
                "Tailwind CSS Enthusiast",
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              startDelay={500}
              loop
            />
          </h1>
          <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-secondary_color max-w-[90%] md:max-w-[800px] mt-5">
            I craft modern front-end solutions using Next.js and Tailwind CSS to
            deliver seamless and user-focused experiences that enhance web
            interactions.
          </h3>

          {/* Action Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              aria-label="Download CV"
              className="flex items-center gap-3 px-6 py-4 rounded-full text-main_color border border-main_color hover:bg-main_color hover:text-white transition-all duration-300"
            >
              <span className="block capitalize font-bold">Download CV</span>
              <span className="block">
                <LiaDownloadSolid />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
