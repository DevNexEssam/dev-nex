"use client"
import { IoShareSocialSharp } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { INFO_LINKS } from "@/components/sections/about/AboutData";
const Social = () => {
    const [open , setOpen] = useState (false);
    const handelSocial = ()=> {
        setOpen(!open)
    }
  return (
    <div className="fixed right-0 top-[50%] z-50">
        <span onClick={handelSocial} className="block p-[10px] bg-main_color text-[20px] font-bold text-primary_color cursor-pointer ">
            <IoShareSocialSharp />
        </span>
        <div className={!open ? ' hidden' : 'bg-bg_alt flex flex-col items-center gap-5'}>
            {INFO_LINKS.map((item)=> (
                <Link className="p-[10px] text-primary_color hover:bg-main_color w-full " href={item.path} key={item.id}>
                    {item.icon}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Social