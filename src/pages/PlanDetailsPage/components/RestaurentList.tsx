import React from "react";
import { AccommodationOption } from "../../../types/geminiResponse";
import { FcRating } from "react-icons/fc";

type RestaurentListProps = {
  restaurentDetails: AccommodationOption[] | undefined;
  selectedAccomodation: string | undefined;
};
const RestaurentList: React.FC<RestaurentListProps> = ({
  restaurentDetails,
  selectedAccomodation,
}) => {
  return (
    <div className="w-full bg-slate-900/90 px-2 py-4">
      <h2 className="text-2xl capitalize mb-3">
        available {selectedAccomodation}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {restaurentDetails?.map((restaurent) => (
          <div className="bg-gray-300 w-full sm:basis-96 lg:basis-72">
            <img src="/assets/trip_details.webp" alt="" className="" />
            <div className="flex flex-col py-3">
              <h3 className="text-3xl text-gray-800 ml-2 ">
                {restaurent.name}{" "}
                <span className="text-lg inline-flex items-center gap-1">
                  <FcRating />
                  {restaurent.rating}
                </span>
              </h3>
              <p className="text-base text-gray-600 ml-2 ">
                {restaurent.address}
              </p>
              <p className="text-xl font-bold text-gray-600 ml-2 py-2">
                {`$${restaurent.price}`}
              </p>
              <div className="flex gap-2 ml-2">
                {restaurent.amenities.map((aminity) => (
                  <p className="text-gray-300 bg-gray-900 w-fit px-2  capitalize">
                    {aminity}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurentList;
