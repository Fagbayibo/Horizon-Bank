import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google"; //Added new font
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); //Added variable 
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
}) //Additional font created

export const metadata: Metadata = {
  title: "Horizon Bank App",  //App name
  description: "A modern banking platform for everyone", //App description
  icons: { //App favicon Don't forget
    icon : '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Using template string to input font so as to be able to access it over all the entire app */}
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body> 
    </html>
  );
}
