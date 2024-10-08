"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default CustomProvider;
