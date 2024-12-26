import { INFO_LINKS } from "@/components/sections/about/AboutData";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bg_alt py-8">
      <div className="container">
        <div className="flex flex-col gap-3 justify-between items-center md:flex-row">
          <div className="text-primary_color">
            <h1>Copyright © 2024 Essam Mohamed. All Rights Reserves</h1>
          </div>
          <div className="flex gap-[10px] items-center">
            {INFO_LINKS.map((item) => (
              <Link
                key={item.id}
                href={item.path}
                className="text-secondary_color text-[15px] px-[12px] py-[10px] rounded-[10px] hover:bg-main_color"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
