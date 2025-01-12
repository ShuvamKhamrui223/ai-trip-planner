import React from "react";
import { Activity } from "../../../types/geminiResponse";
import { BiCar, BiInfoCircle, BiTime } from "react-icons/bi";

type ActivityCardProp = {
  activityDetails: Activity | undefined;
};
const ActivityCard: React.FC<ActivityCardProp> = ({ activityDetails }) => {
  return (
    <div className="shadow bg-blue-900/10 py-6 px-5 rounded-lg flex flex-col">
      <h3 className="text-3xl mb-4">{activityDetails?.place_name}</h3>
      <div className="flex items-center gap-1 my-2">
        <BiTime className="text-2xl text-gray-500" />
        <h3 className="text-base">{activityDetails?.estimated_time}</h3>
      </div>

      <div className="flex gap-1 items-center my-1">
        <BiCar className="text-2xl text-gray-500" />
        <h3 className="text-base ">{activityDetails?.transportation}</h3>
      </div>

      <div className="flex items-center bg-blue-950/30 px-2 mt-4">
        <BiInfoCircle className="text-2xl mr-2" />
        <h3 className="text-sm py-4">{activityDetails?.place_details}</h3>
      </div>
    </div>
  );
};

export default ActivityCard;
