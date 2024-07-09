import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource-variable/newsreader';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          {children}
        </ChakraProvider>
        </body>
    </html>
  );
}
