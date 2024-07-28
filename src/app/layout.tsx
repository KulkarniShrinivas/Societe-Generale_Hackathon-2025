import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import {GoogleAnalytics} from "@next/third-parties/google";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pandit in Bangalore Book Verified Pandits Online for Puja/Homa or Havan - Marathisarvapooja",
  description: "Experienced Marathi Pandits/Guruji in Bangalore for Puja/Homa or Havan. Book now at Marathisarvapooja.com or call ⭐ 7899148582. We offer puja services in different languages like Marathi, Kannada, Hindi, Tamil, Telugu. ⭐15+ Years Experienced ⭐11000+ Puja's Performed",
  robots: {
    index: true,
    follow: true
  },
  icons:"https://res.cloudinary.com/dckh0xu7s/image/upload/f_auto,q_auto/v1717906159/logo_bcbcuz.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics
        gaId="G-3NRQN0NYBE"
      />
    </html>
  );
}
