"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "../Icons/SunIcon";
import { MoonIcon } from "../Icons/MoonIcon";
import Link from "next/link";
import Image from "next/image";
import { PopoverGroup } from "@headlessui/react";
import { Popover } from "@headlessui/react";
import { PopoverButton } from "@headlessui/react";
import { PopoverPanel } from "@headlessui/react";

import Airplane from "../Icons/Airplane";
import HotelIcon from "../Icons/Hotel";
import TrainIcon from "../Icons/TrainIcon";
import HolidayIcon from "../Icons/HolidayIcon";
import TouristIcon from "../Icons/TouristIcon";
import BusIcon from "../Icons/BusIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 120 && currentScrollY < 150) {
          setHeaderVisible(false); // Hide header when scrolling down
        } else if (currentScrollY >= 150) {
          setHeaderVisible(false); // Completely hide header
        } else {
          setHeaderVisible(true); // Show header when scrolling up or less than 120px
        }

        // Show header when scrolling up
        if (currentScrollY < lastScrollY) {
          setHeaderVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header
      className={`${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ${
        theme === "light"
          ? "bg-white text-[#16181D]"
          : "bg-[#16181D] text-white"
      } shadow-md sm:px-5 fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 py-3"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Link href={"/"}>
              <Image
                alt="logo"
                src="https://images.emtcontent.com/brandlogo/emtlogo_new8.svg"
                className=" w-24"
                width={1}
                height={8}
                unoptimized
              />
            </Link>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
              theme === "light" ? "text-gray-700" : "text-white"
            }`}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close main menu" : "Open main menu"}
            </span>
            {/* Conditionally render the Hamburger or Cross icon */}
            {mobileMenuOpen ? (
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${
                theme === "light" ? "#16181D" : "text-white"
              }`}
            >
              <Link
                href={"/flights/"}
                className="flex flex-col justify-center items-center gap-2 text-[14px] font-semibold"
              >
                <Image
                  src={
                    "https://images.emtcontent.com/mob-emthome/flight-icon.svg"
                  }
                  width={55}
                  height={50}
                  className="mt-1"
                />
              </Link>
            </PopoverButton>
            <PopoverPanel
              className={`absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              }`}
            ></PopoverPanel>
          </Popover>

          <Link
            href={"/hotels/"}
            className={`${
              theme === "light" ? "#16181D" : "text-white"
            } flex flex-col justify-center items-center gap-2 text-[14px] leading-6 font-semibold`}
          >
            <Image
              src={"https://images.emtcontent.com/mob-emthome/hotel-icon.svg"}
              width={55}
              height={0}
              className="mt-0"
            />
          </Link>

          <Link
            href={"/trains/"}
            className={`${
              theme === "light" ? "#16181D" : "text-white"
            } flex flex-col justify-center items-center gap-2 text-[14px] leading-6 font-semibold`}
          >
            <Image
              src={"https://images.emtcontent.com/mob-emthome/train-icon.svg"}
              width={54}
              height={50}
              className="mt-1"
            />
          </Link>

          <a
            href="#"
            className={`text-sm font-semibold leading-6 ${
              theme === "light" ? "#16181D" : "text-white"
            }`}
          >
            <Link
              href={"/bus/"}
              className=" flex flex-col justify-center items-center gap-2 text-[14px] font-semibold"
            >
              <Image
                src={"https://images.emtcontent.com/mob-emthome/bus-icon.svg"}
                width={52}
                height={50}
                className="mt-1"
              />
            </Link>
          </a>

          <Link
            href={"/holidays/"}
            className=" flex flex-col justify-center items-center gap-2 text-[14px] font-semibold"
          >
            <Image
              src={"https://images.emtcontent.com/mob-emthome/holiday-icon.svg"}
              width={41}
              className="mt-1"
              height={50}
            />
          </Link>

          <Link
            href={"/cabs/"}
            className=" flex flex-col justify-center items-center gap-2 text-[14px] font-semibold"
          >
            <Image
              src={"https://images.emtcontent.com/mob-emthome/cabs-icon.svg"}
              width={46}
              height={50}
              className="mt-1"
            />
          </Link>
        </PopoverGroup>

        {/* Theme Switcher Icon */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={toggleTheme} className="p-2">
            {theme === "light" ? (
              <MoonIcon className="h-6 w-6 #16181D" />
            ) : (
              <SunIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className={`${
            theme === "light"
              ? "bg-white text-[#16181D]"
              : "bg-[#16181D] text-white"
          }  fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="logo"
                src="https://pngimagesfree.com/wp-content/uploads/Make-My-Trip-Logo-PNG@.png"
                className="h-8 w-auto"
                width={1}
                height={8}
                unoptimized
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`${
                      theme === "light"
                        ? "bg-white text-[#16181D]"
                        : "bg-[#16181D] text-white"
                    } "group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7`}
                  >
                    <Link
                      href={"/flights/"}
                      className=" flex justify-center items-center gap-16 text-[12.5px] font-bold"
                    >
                      {/* <Image src={PlaneImage} width={32} height={32} /> */}
                      <Airplane />
                      FLIGHTS
                    </Link>
                  </DisclosureButton>
                </Disclosure>
                <Link
                  href={"/hotels/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#16181D]"
                      : "bg-[#16181D] text-white"
                  } flex items-center gap-16 text-[12.5px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  {/* <Image src={HotelImage} width={32} height={32} /> */}
                  <HotelIcon />
                  HOTELS
                </Link>
                <Link
                  href={"/trains/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#16181D]"
                      : "bg-[#16181D] text-white"
                  } flex items-center gap-16 text-[12.5px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  {/* <Image src={TrainImage} width={32} height={32} /> */}
                  <TrainIcon />
                  TRAINS
                </Link>
                <Link
                  href={"/bus/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#16181D]"
                      : "bg-[#16181D] text-white"
                  } flex items-center gap-16 text-[12.5px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  {/* <Image src={HomeImage} width={32} height={32} /> */}
                  {/* <TouristIcon/> */}
                  <BusIcon />
                  BUSES
                </Link>

                <Link
                  href={"/holidays/"}
                  className={`${
                    theme === "light"
                      ? "bg-white text-[#16181D]"
                      : "bg-[#16181D] text-white"
                  } flex items-center gap-16 text-[12.5px] font-bold -mx-3 rounded-lg px-3 py-2 `}
                >
                  {/* <Image src={HolidayImage} width={32} height={32} /> */}
                  <HolidayIcon />
                  HOLIDAYS
                </Link>
              </div>
              <div className="flex justify-between align-middle items-center">
                <div className="py-6">
                  <a
                    href="#"
                    className={`${
                      theme === "light"
                        ? "bg-white text-[#16181D]"
                        : "bg-[#16181D] text-white"
                    }  -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 `}
                  >
                    Log in
                  </a>
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                  <button onClick={toggleTheme} className="p-2">
                    {theme === "light" ? (
                      <MoonIcon className="h-6 w-6 #16181D" />
                    ) : (
                      <SunIcon className="h-6 w-6 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
