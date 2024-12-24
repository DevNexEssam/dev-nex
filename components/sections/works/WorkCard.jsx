import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const WorkCard = ({title , desc , image , demo , code}) => {
  return (
    <div className=" p-[20px] rounded-[15px] flex flex-col justify-center items-center">
      <Image src={image} alt={title} width={550} height={550} quality={90} className="rounded-xl" />
      <div className="mt-2 p-[20px] rounded-[20px] transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-main_color/80 duration-300">
        <div className="flex justify-between items-center">
        <h1 className="text-white text-[20px] font-bold capitalize md:text-[30px]">{title}</h1>
        <div className="flex items-center gap-3 text-white">
            <Link href={demo} className=" capitalize bg-main_color px-[10px] py-[5px] rounded-[20px] hover:bg-bg_main">preview</Link>
            <Link href={code} className="flex gap-2 items-center capitalize border border-main_color px-[10px] py-[5px] rounded-[20px] hover:bg-bg_main"><FaGithub /> code</Link>
        </div>
        </div>
        <p className="text-secondary_color text-[15px] mt-5 ">{desc}</p>
      </div>
    </div>
  )
}

export default WorkCard
