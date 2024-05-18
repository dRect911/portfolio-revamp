import type { Metadata } from "next";
import { ibm_plex_sans } from "./fonts";
import "./globals.css";
import bg from "@/public/ccchaos-gradient.png";
import Navbar from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: "Kenneth | Web Developer",
  description:
    "I'm a web developer specializing in building exceptional digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ibm_plex_sans.className}
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        
        <Navbar />
        {children}
      </body>
    </html>
  );
}


