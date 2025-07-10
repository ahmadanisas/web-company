"use client";

import { useEffect } from "react";
import { useThemeStore } from "../../store/theme";
import Header from "@/components/Header";
import Footer from "./Footer";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkMode = useThemeStore((state) => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
