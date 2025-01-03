import React from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo";

const FlightLanding = () => {
  return (
    <>
      <div>
        <Layout>
          {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mt-10 mt-[33rem]">
            <div className="flex gap-2 border-2 justify-center align-middle border-yellow-400 w-[300px] py-2.5 rounded-full">
              <Image src={bestBookingImage} />
              <span>Best Flight Booking System</span>
            </div>
          </div> */}
          <div className="heading w-full">
            <h1 className=" sm:text-5xl text-2xl font-semibold capitalize sm:mt-[-0px] sm:mb-[-20px] w-full text-center">
              Kickstart Your Travel Journey
            </h1>
          </div>
          {/* <GlobeDemo /> */}
          <AppleCardsCarouselDemo />
        </Layout>
      </div>
    </>
  );
};

export default FlightLanding;
