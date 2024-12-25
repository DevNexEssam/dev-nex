import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";

export const INFO_DATA = [
    {
        id : 0,
        photo : "/profile.png",
        name : "essam mohamed",
        role : "web developer",
        location : "Alex, egypt",
        bio : "Front-End Developer | Next.js, React.js, Tailwind CSS  Creating amazing web experiences."
    }
]

export const INFO_LINKS = [
    {
        id: 0,
        icon: <FaFacebookF />,
        path: "https://www.facebook.com/devnextjs",
    },
    {
        id: 1,
        icon: <FaInstagram />,
        path: "https://www.instagram.com/devnex.esaam/",
    },
    {
        id: 2,
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/essam-mohamed-829b27342/",
    },
    {
        id: 3,
        icon: <LuGithub />,
        path: "https://github.com/DevNexEssam",
    },
]