import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <Layout>
      <div>
        <div className="">
          <div className="heading w-full sm:mt-[-70px] mt-[-30px]">
            <h1 className=" sm:text-5xl text-2xl sm:font-semibold font-bold capitalize w-full text-center pb-5">
              Why Book With Us..?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
            {[
              {
                src: "https://images.emtcontent.com/nwhomfiles/easy-booking.svg",
                title: "Easy Booking",
                description:
                  "We offer easy and convenient flight bookings with attractive offers.",
              },
              {
                src: "https://images.emtcontent.com/nwhomfiles/lowest-booking.svg",
                title: "Lowest Price",
                description:
                  "We ensure low rates on hotel reservations, holiday packages, and flight tickets.",
              },
              {
                src: "https://images.emtcontent.com/nwhomfiles/exc-deal.svg",
                title: "Exciting Deals",
                description:
                  "Enjoy exciting deals on flights, hotels, buses, and tour packages.",
              },
              {
                src: "https://images.emtcontent.com/nwhomfiles/support.svg",
                title: "24/7 Support",
                description:
                  "Get assistance 24/7 on any kind of travel-related query. We are happy to assist you.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center border-2 border-sky-300 rounded-xl p-6 shadow-md"
              >
                <div className="mb-4">
                  <Image
                    src={item.src}
                    unoptimized
                    width={80}
                    height={80}
                    alt={item.title}
                    className="rounded-full"
                  />
                </div>
                <h2 className="text-center text-xl font-bold mb-3">
                  {item.title}
                </h2>
                <p className="text-center text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WhyChooseUs;
