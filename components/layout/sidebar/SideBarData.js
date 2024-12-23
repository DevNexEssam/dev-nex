import { FaHome } from "react-icons/fa";
import { MdWindow } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
export const SIDEBAR_LINKS = [
    {
        id : 0,
        label : "services",
        path : "/services",
        icon : <MdWindow />
    },
    {
        id : 1,
        label : "portfolio",
        path : "/portfolio",
        icon : <FaCode />
    },
    {
        id : 2,
        label : "about",
        path : "/about",
        icon : <FaUser />
    },
    {
        id : 3,
        label : "contact",
        path : "/contact",
        icon : <BiSolidMessageRoundedDots />
    },
]