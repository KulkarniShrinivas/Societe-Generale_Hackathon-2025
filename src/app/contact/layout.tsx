import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pandit in Bangalore Book Verified Pandits Online for Puja/Homa or Havan - Marathisarvapooja",
  description: "Experienced Marathi Pandits/Guruji in Bangalore for Puja/Homa or Havan. Book now at Marathisarvapooja.com or call ⭐ 7899148582. We offer puja services in different languages like Marathi, Kannada, Hindi, Tamil, Telugu. ⭐15+ Years Experienced ⭐11000+ Puja's Performed",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>

  );
}
