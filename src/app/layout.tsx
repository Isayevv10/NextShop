"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { Navbar } from "@src/components/Navbar/Navbar";
import { Footer } from "@src/components/Footer/Footer";
import { AppContextProvider } from "@src/context/AppContext";

// export const metadata: Metadata = {
//   title: "MS BUY",
//   description: "shopping",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>MS BUY</title>
      </head>
      <body>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <AppContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AppContextProvider>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
