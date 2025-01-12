import React from "react";
import { TripDetails } from "../../../types/geminiResponse";

type TripBasicsInfoProps = {
  basicInfo: TripDetails | undefined;
};
const TripBasicsInfo: React.FC<TripBasicsInfoProps> = ({ basicInfo }) => {
  return (
    <div className="">
      <h1 className="text-5xl capitalize font-bold text-gray-200">
        {basicInfo?.location}
      </h1>
      <div className="h-[0.01em] w-full bg-gray-800 my-4"></div>
      <div className="flex gap-2 flex-wrap">
        <p className="text-gray-300 first-letter:capitalize bg-gray-400/15 hover:bg-gray-400/20 w-fit px-4 py-2">
          plan for: {basicInfo?.number_of_travelers}
        </p>
        <p className="text-gray-300 first-letter:capitalize bg-gray-400/15 hover:bg-gray-400/20 w-fit px-4 py-2">
          plan for: {basicInfo?.number_of_travel_days}{" "}
          {basicInfo?.number_of_travel_days &&
          basicInfo?.number_of_travel_days > 1
            ? "days"
            : "day"}
        </p>
        <p className="text-gray-300 first-letter:capitalize bg-gray-400/15 hover:bg-gray-400/20 w-fit px-4 py-2">
          selected accomodation: {basicInfo?.accommodation_preference}
        </p>
        <p className="text-gray-300 first-letter:capitalize bg-gray-400/15 hover:bg-gray-400/20 w-fit px-4 py-2">
          selected transportation mode: {basicInfo?.transportation_preference}
        </p>
      </div>
    </div>
  );
};

export default TripBasicsInfo;
