import { Geist, Geist_Mono } from "next/font/google";
import { Banner } from "@/components/Components/Hero/Banner";
import FlightLanding from "@/components/Components/HomeLanding/HomeLanding";
import Tourist from "@/components/Components/HomeLanding/Tourist";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Banner />
      <FlightLanding/>
      <Tourist/>
    </>
  );
}
