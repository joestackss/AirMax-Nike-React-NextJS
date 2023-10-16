"use client";

import Image from "next/image";
import { footerLogo, headerlogo } from "../images";
import { navigationUrl } from "../../constants";
import Button from "./Button";
import { useTheme } from "next-themes";
import { Bars4Icon } from "@heroicons/react/24/solid";

const Navigation = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="sm:px-16 px-8 py-4 z-10 w-full fixed ">
      <nav className="flex justify-between items-center max-container">
        {/* Brand Logo */}

        <a href="/">
          <Image
            src={theme == "dark" ? footerLogo : headerlogo}
            alt="logo"
            width={129}
            height={29}
          />
        </a>

        {/* Navigation Links */}

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navigationUrl.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="leading-normal text-lg font-semibold font-spaceGrotesk"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Button and Harmbuger */}

        <div
          className="flex gap-2 max-lg:hidden wide:mr-24 cursor-pointer"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <Button
            label="Switch"
            backgroundColor={theme == "dark" ? "bg-white" : "bg-black"}
            textColor={theme == "dark" ? "text-black" : "text-white"}
            border="border-0"
          />
        </div>

        <div
          className="hidden max-lg:block w-8 h-8"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          <Bars4Icon className="text-gray-600" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
