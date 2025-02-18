import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { generateUniqueString } from "../../utils/generateUniqueString";

import { run } from "../../config/gemini.config";

import Container from "../../Container";
import CreateplanPreLoader from "../../components/common/PreLoader/CreateplanPreLoader";
import { useAuthContext } from "../../contexts/AuthContext";
import { addToTripHistory } from "../../utils/firebase.utils";

const PlanCreationForm = lazy(() => import("../../features/GeneratePlan"));

export type userPreferenceTypes = {
  destination: string;
  accomodation: string;
  tranportationType: string;
  numberOfTraveler: number;
  numberOfTravellngDays: number;
  travelBudgetType: string;
  tripTypes: string;
};
const CreatePlanPage = () => {
  const [userPreference, setUserPreference] = useState<userPreferenceTypes>({
    destination: "",
    accomodation: "",
    tranportationType: "",
    numberOfTraveler: 0,
    numberOfTravellngDays: 0,
    travelBudgetType: "",
    tripTypes: "",
  });

  const navigate = useNavigate();

  const {
    isLoading: planLoading,
    error: planError,
    data: generatedPlan,
  } = useQuery({
    queryKey: ["travel-plan"],
    queryFn: async () => {
      const response = await run(
        userPreference.destination,
        userPreference.accomodation,
        userPreference.travelBudgetType,
        userPreference.tranportationType,
        userPreference.tripTypes,
        userPreference.numberOfTraveler,
        userPreference.numberOfTravellngDays
      );

      return response;
    },
    staleTime: 84600000,
    refetchOnReconnect: false,
    refetchOnMount: false,
    enabled:
      !!userPreference.accomodation &&
      !!userPreference.destination &&
      !!userPreference.numberOfTraveler &&
      !!userPreference.numberOfTravellngDays &&
      !!userPreference.tranportationType &&
      !!userPreference.travelBudgetType &&
      !!userPreference.tripTypes,
  });
  const { user } = useAuthContext();
  const planid = useMemo(() => generateUniqueString(), []);
  useEffect(() => {
    if (generatedPlan && user?.email) {
      addToTripHistory(generatedPlan, user?.email);
      navigate(`${planid}`, { state: generatedPlan });
    }
  }, [generatedPlan]);

  if (planLoading) {
    return <CreateplanPreLoader />;
  }

  if (planError)
    return (
      <section className="min-h-screen flex flex-col items-center">
        <p className="text-balance text-xl my-6 first-letter:uppercase">
          {"something went wrong"}
        </p>
      </section>
    );

  return (
    <Container>
      <section className="py-8">
        <h2 className="text-4xl font-bold text-gray-300 first-letter:uppercase mb-2">
          tell us about your trip
        </h2>
        <p className="text-sm text-gray-400 capitalize first-letter:uppercase">
          choose location, budget, accomodation to let AI prepare your trip
        </p>
        <Suspense fallback={"loading form"}>
          <PlanCreationForm
            userPreferenceHandler={setUserPreference}
            planGenerationStatus={planLoading}
          />
        </Suspense>
      </section>
    </Container>
  );
};

export default CreatePlanPage;
