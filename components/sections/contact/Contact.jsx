"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import TitleSections from "@/components/ui/title-section/TitleSections";

export default function Contact() {
      useEffect(() => {
        Aos.init();
      }, []);
  return (
    <section id="contact" className="py-[50px]">
      <div className="circle top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <TitleSections title="Contact Us" />
      <div className="container">
        {/* DATA */}
        <div className=" mt-16 grid grid-rows-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div className="grid grid-cols-1 justify-center md:grid-cols-1 items-center gap-5" data-aos= 'fade-up-right'>
            <div className=" flex gap-3 items-center bg-bg_alt p-[15px] md:w-[100%] overflow-hidden py-[25px] px-[15px] rounded-[15px] hover:bg-main_color">
              <FaEnvelope className="text-[30px] text-primary_color" />
              <span className="block p-0 text-secondary_color">
                essammohamedabdelmaaboud22@gmail.com
              </span>
            </div>
            <div className=" flex gap-3 items-center bg-bg_alt  md: overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-main_color">
              <FaPhoneAlt className="text-[30px] text-primary_color" />
              <span className="block text-secondary_color">
                +20 101868446885
              </span>
            </div>
            <div className=" flex gap-3 items-center bg-bg_alt  md:w-[100%] overflow-hidden px-[15px] py-[25px] rounded-[15px] hover:bg-main_color">
              <FaLocationDot className="text-[30px] text-primary_color" />
              <span className="block text-primary_color">
                Alexandria, Egypt
              </span>
            </div>
          </div>
          {/* RIGHT */}
          <div data-aos= 'fade-up-left'>
            <form
              action="/"
              className="bg-bg_alt p-[20px] rounded-[10px] flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-bg_main text-main_color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-bg_main text-main_color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="bg-bg_main text-main_color border-none outline-0 rounded-[10px] p-4 w-[100%]"
                />
              </div>
              <div>
                <textarea
                  name="des"
                  placeholder="Message"
                  className="w-[100%] bg-bg_main text-main_color p-3 outline-0 rounded-[10px]"
                ></textarea>
              </div>
              <button className="text-primary_color bg-main_color text-center capitalize px-[30px] py-[10px] w-max rounded-[15px] hover:bg-main_color/50">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
