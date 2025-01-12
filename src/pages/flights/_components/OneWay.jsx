import React from "react";
import OriginCountryFlight from "./_DataComponents/Country";

const OneWay = () => {
  return (
    <>
      <div>OneWay</div>
      <div className="flex flex-col">
        <label className={`block text-sm font-medium mb-0`}>Country</label>
        <OriginCountryFlight />
        {/* {errors.departureCountry && (
              <p className="text-red-500 text-xs">{errors.departureCountry}</p>
            )} */}
      </div>
    </>
  );
};

export default OneWay;
