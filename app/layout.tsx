"use client";

import "@/app/ui/global.css";
import { ReactNode } from "react";
import CustomProvider from "./components/CustomProvider";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function RootLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CustomProvider>
          <NextThemesProvider attribute="class" defaultTheme="dark">
            <main className="w-screen h-screen p-8 flex items-start justify-center">
              {children}
            </main>
          </NextThemesProvider>
        </CustomProvider>
      </body>
    </html>
  );
}
