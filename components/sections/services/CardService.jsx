"use client"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const CardService = ({ title, desc, num }) => {
  useEffect(()=> {
    Aos.init();
  },[])
  return (
    <div className="bg-bg_alt px-6 sm:px-8 md:px-[50px] py-[20px] sm:py-[30px] border border-transparent rounded-[25px] hover:border-main_color" data-aos= 'fade-up'>
      <span className="px-[15px] sm:px-[20px] py-1 sm:py-2 text-[14px] sm:text-[18px] text-main_color rounded-lg border border-main_color font-bold">
        {num}
      </span>
      <div className="mt-4 sm:mt-6">
        <h2 className="text-white text-[22px] sm:text-[30px] capitalize font-bold">{title}</h2>
        <p className="text-secondary_color text-[13px] sm:text-[15px]">{desc}</p>
      </div>
    </div>
  );
}

export default CardService;
