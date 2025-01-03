import Layout from "@/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Tourist = () => {
  return (
    <>
      <Layout>
        <div className=" pb-6">
          <div className="heading w-full sm:mt-[-50px] mt-[-30px]">
            <h1 className=" sm:text-5xl text-2xl sm:font-semibold font-bold capitalize w-full text-center">
              Famous Tourist Attraction
            </h1>
          </div>
          <div className="sm:pt-14 sm:px-10 pt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/lakshadweep.svg"
                  }
                  width={100}
                  height={50}
                  unoptimized
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Lakshadweep
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/andaman-new.png"
                  }
                  width={100}
                  height={50}
                  unoptimized
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Andaman
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/kashmir.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Kashmir
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/jaipur.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Jaipur
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/bangalore.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Banglore
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/paris.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Paris
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/leh.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Ladakh
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/bali-indonesia.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Bali
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/dubai.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Dubai
                  </h2>
                </div>
              </div>
            </Link>

            <Link href={"/holidays"} className=" cursor-pointer sm:py-5 py-2">
              <div className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={
                    "https://images.emtcontent.com/desk-img/hol-icon/kerala.svg"
                  }
                  width={100}
                  height={50}
                  className=""
                />
                <div className="text">
                  <h2 className="font-semibold sm:text-xl text-md text-center">
                    Kerala
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Tourist;
