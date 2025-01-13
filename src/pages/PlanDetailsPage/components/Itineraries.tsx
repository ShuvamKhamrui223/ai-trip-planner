import React from "react";
import { Itinerary } from "../../../types/geminiResponse";
import ActivityCard from "./ActivityCard";

type ItinerariesProps = {
  daily_itinerary: Itinerary[] | undefined;
};
const Itineraries: React.FC<ItinerariesProps> = ({ daily_itinerary }) => {
  return (
    <div className="my-4 ">
      <h2 className="text-2xl capitalize mb-2">daily itinerary</h2>
      <div className="flex flex-col">
        {daily_itinerary?.map((itinerary) => (
          <div className="ring-1 ring-gray-800 py-4 px-2" key={itinerary.day}>
            <h2 className="text-lg capitalize text-gray-200/70">
              activities for day {itinerary.day}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {itinerary.activities.map((activity) => (
                <ActivityCard activityDetails={activity} key={activity.place_name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itineraries;
