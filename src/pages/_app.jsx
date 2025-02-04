import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import ThemeSwitcher from "@/components/Components/Header/ThemeSwitcher";
import ThemeProvide from "@/components/Components/Header/ThemeProvide";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "@/components/Components/Footer/Footer";
import Header from "@/components/Components/Header/Header";
import { CountryProvider } from "@/context/CountryContext";

export const metadata = {
  title: "MakeMyTrip App",
  description: "Generated by create next app",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={`${montserrat.variable} font-mont w-full min-h-screen`}>
        <CountryProvider>
          <ThemeProvide>
            <ThemeSwitcher />
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ThemeProvide>
        </CountryProvider>
      </main>
    </>
  );
}
