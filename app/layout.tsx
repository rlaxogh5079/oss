"use client";

import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <html>
      <body>
        <NextUIProvider className={className}>{children}</NextUIProvider>
      </body>
    </html>
  );
}
