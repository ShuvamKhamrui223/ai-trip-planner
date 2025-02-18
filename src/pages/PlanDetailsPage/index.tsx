import { useLocation } from "react-router-dom";
import Container from "../../Container";
import { GeminiResponse } from "../../types/geminiResponse";
import { lazy, Suspense, useEffect, useState } from "react";
import TripBasicsInfo from "./components/TripBasicsInfo";
import TripNote from "./components/TripNote";

const Itineraries = lazy(() => import("./components/Itineraries"));
const RestaurentList = lazy(() => import("./components/RestaurentList"));

const PlanDetailsPage = () => {
  const { state: locationState } = useLocation();
  const [planDetails, setPlanDetails] = useState<GeminiResponse>();
  useEffect(() => {
    locationState && setPlanDetails(JSON.parse(locationState));
  }, [locationState]);

  return (
    <Container>
      <section className="min-h-screen py-6">
        <>
          <img
            src="/assets/trip_details.webp"
            alt=""
            className="w-full max-w-screen-lg mx-auto h-96 object-cover rounded shadow-lg shadow-gray-800 my-4"
          />
          {/* speacial notes for the trip if needed */}
          {planDetails?.notes && <TripNote note={planDetails?.notes} />}{" "}
          {/* user defined trip info */}
          {planDetails?.trip_details && (
            <TripBasicsInfo basicInfo={planDetails?.trip_details} />
          )}
          {planDetails?.daily_itinerary && (
            <Suspense>
              <Itineraries daily_itinerary={planDetails?.daily_itinerary} />
            </Suspense>
          )}
          {/* restaurents */}
          {planDetails?.accommodation_options && (
            <Suspense>
              <RestaurentList
                restaurentDetails={planDetails?.accommodation_options}
                selectedAccomodation={
                  planDetails?.trip_details.accommodation_preference
                }
              />
            </Suspense>
          )}
        </>
      </section>
    </Container>
  );
};

export default PlanDetailsPage;
