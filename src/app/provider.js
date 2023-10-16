"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

export default function Provider({ children }) {
    
  useEffect(() => {
    AOS.init();
  }, []);

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
