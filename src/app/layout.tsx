import React from "react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import MantineProvider from "../providers/MantineProvider";
import "@mantine/core/styles.css";
import "./globals.css";
import { Box } from "@mantine/core";

import { Header } from "../components/Header";

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
        <MantineProvider>
          <Box p={30} h={100}>
            <Header />
            {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
