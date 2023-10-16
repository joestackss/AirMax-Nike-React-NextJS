"use client";

import { footerLogo, headerlogo } from "@/assets/images";
import { useTheme } from "next-themes";
import Image from "next/image";
import { footerLinks } from "../constants";

const Footer = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <footer
      className="max-container py-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        {/* Section One */}
        <div className="flex flex-col items-start">
          <a href="/">
            <Image src={theme == "dark" ? footerLogo : headerlogo} />
          </a>

          <p className="mt-6 text-base leading-7 font-spaceGrotesk sm:max-w-sm">
            Elevate your style with the latest Nike Air Max collection as you
            gear up for the new term at your closest Nike store. Explore the
            perfect Air Max fit in-store.
          </p>
        </div>

        {/* Section Two */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-spaceGrotesk text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>

              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-spaceGrotesk text-base leading-normal hover:text-gray-300"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
