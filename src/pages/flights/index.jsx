import { useState } from "react";
import OneWay from "./_components/OneWay";
import RoundTrip from "./_components/RoundTrip";

const Flight = () => {
  const [activeTab, setActiveTab] = useState("oneWay");

  return (
    <div className="p-5 sm:mt-16 mt-16 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 rounded-lg shadow-lg">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 my-6">
        <button
          className={`relative px-6 py-2 rounded-full transition-all duration-300
          ${activeTab === "oneWay" ? "text-white shadow-md" : "text-gray-600 dark:text-gray-300"}
          ${activeTab === "oneWay" ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-transparent"}`}
          onClick={() => setActiveTab("oneWay")}
        >
          <span
            className={`absolute inset-0 z-0 rounded-full border-2
            ${activeTab === "oneWay" ? "border-transparent" : "border-gradient-to-r from-pink-500 via-purple-500 to-blue-500"}
            `}
          ></span>
          <span className="relative z-10">One-Way Trip</span>
        </button>
        <button
          className={`relative px-6 py-2 rounded-full transition-all duration-300
          ${activeTab === "roundTrip" ? "text-white shadow-md" : "text-gray-600 dark:text-gray-300"}
          ${activeTab === "roundTrip" ? "bg-gradient-to-r from-blue-500 to-blue-600" : "bg-transparent"}`}
          onClick={() => setActiveTab("roundTrip")}
        >
          <span
            className={`absolute inset-0 z-0 rounded-full border-2
            ${activeTab === "roundTrip" ? "border-transparent" : "border-gradient-to-r from-pink-500 via-purple-500 to-blue-500"}
            `}
          ></span>
          <span className="relative z-10">Round-Trip</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        {activeTab === "oneWay" ? <OneWay /> : <RoundTrip />}
      </div>
    </div>
  );
};

export default Flight;
