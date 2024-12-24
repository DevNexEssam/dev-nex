"use client"
import Link from "next/link"
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { SIDEBAR_LINKS } from "./SideBarData"
import { useState } from "react";

const SideBar = () => {
  const [open , setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className=" bg-bg_alt px-[20px] py-[20px] rounded-full fixed left-5 top-16 z-40">
      <span onClick={handleOpen} className={!open ? "block text-white text-[25px] mx-auto cursor-pointer" : "block text-white text-[25px] mx-auto cursor-pointer mb-6"}>
        {!open ? <IoMenuSharp /> : <IoClose />}
      </span>
      <div className={!open ? "hidden" : " flex flex-col gap-10 items-center"}>
        {SIDEBAR_LINKS.map((item)=> (
          <Link title={item.label} key={item.id} href={item.path} className="flex items-center gap-2 text-secondary_color hover:text-main_color">
            <span>
              {item.icon}
            </span>
            {/* <span>
              {item.label}
            </span> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideBar
