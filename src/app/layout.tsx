import React from "react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import MantineProvider from "../providers/MantineProvider";
import "@mantine/core/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akapay",
  icons: {
    icon: ["/img/akapay.svg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head></head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
