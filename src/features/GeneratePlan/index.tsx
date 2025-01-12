import React, { FormEvent, lazy, Suspense } from "react";
import { Form } from "react-router-dom";

import { createPlanOptions } from "../../constants/CreatePlanOptions";
import { toast } from "react-toastify";
import { userPreferenceTypes } from "../../pages/CreatePlanPage";

const SearchBarWithAutocomplete = lazy(
  () =>
    import("../../pages/CreatePlanPage/components/SearchBarWithAutocomplete")
);

type PlanCreationFormProps = {
  userPreferenceHandler: React.Dispatch<
    React.SetStateAction<userPreferenceTypes>
  >;
  planGenerationStatus: boolean;
};

const PlanCreationForm: React.FC<PlanCreationFormProps> = ({
  userPreferenceHandler,
  planGenerationStatus,
}) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);

    const destination = formdata.get("destination") as string;
    const accomodations = formdata.get("accomodationType") as string;
    const transportationTypes = formdata.getAll(
      "transportationType[]"
    ) as string[];
    const numberOfTraveler = Number(formdata.get("numberOfTraveler"));
    const numberOfTravellingDays = Number(
      formdata.get("numberOfTravellingDays")
    );
    const travelBudgetType = formdata.get("travelBudgetType") as string;
    const tripTypes = formdata.getAll("tripType[]") as string[];

    if (
      !destination ||
      !accomodations ||
      numberOfTraveler == 0 ||
      numberOfTravellingDays == 0 ||
      !transportationTypes ||
      !travelBudgetType ||
      !tripTypes
    ) {
      toast.error("please fill the relevant fields");
      return;
    }
    userPreferenceHandler({
      accomodation: accomodations,
      destination: destination,
      numberOfTraveler: numberOfTraveler,
      numberOfTravellngDays: numberOfTravellingDays,
      travelBudgetType: travelBudgetType,
      tranportationType: transportationTypes.join(","),
      tripTypes: tripTypes.join(","),
    });
  };

  return (
    <Form
      action="/create-plan"
      method="GET"
      onSubmit={handleSubmit}
      className="my-4  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
    >
      {/* location */}
      <div className="flex flex-col gap-2">
        {/* searchbar with place autocompletion */}
        <label htmlFor="destination" className="create-plan-form-label">
          select your destinaton
        </label>
        <Suspense>
          <SearchBarWithAutocomplete />
        </Suspense>
      </div>

      {/* no. of traveler */}
      <div className="flex flex-col gap-2">
        <label htmlFor="numberOfTraveler" className="create-plan-form-label">
          number of travelers
        </label>
        <input
          type="number"
          name="numberOfTraveler"
          className="select-menu-style"
          placeholder="Ex. 3"
          min={1}
          required={true}
          id=""
        />
      </div>

      {/* no of travelling days */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="numberOfTravellingDays"
          className="create-plan-form-label"
        >
          number of travelling days
        </label>
        <input
          type="number"
          name="numberOfTravellingDays"
          className="select-menu-style"
          placeholder="Ex. 3"
          min={1}
          required={true}
          id=""
        />
      </div>

      {/* travel budget */}
      <div className="flex flex-col gap-2">
        <label htmlFor="travelBudgetType" className="create-plan-form-label">
          select travel budget type
        </label>
        <select
          name="travelBudgetType"
          className="select-menu-style"
          required={true}
          id=""
        >
          <option value="Select accomodation" hidden>
            select your budget type
          </option>
          {createPlanOptions.tripBudgetTypes.map((budgetType) => (
            <option
              value={budgetType.tripBudgetType}
              className=""
              key={budgetType.tripBudgetType}
            >
              {budgetType.tripBudgetType}
            </option>
          ))}
        </select>
      </div>

      {/* accomodation */}
      <div className="flex flex-col gap-2">
        <label htmlFor="accomodationType" className="create-plan-form-label">
          select your accomodation type
        </label>
        <select
          name="accomodationType"
          id=""
          required={true}
          className="px-2 py-2 rounded-md bg-gray-900 text-gray-200 capitalize"
        >
          <option value="Select accomodation" hidden>
            select accomodation
          </option>
          {createPlanOptions.accomodations.map((accom) => (
            <option value={accom} className="" key={accom}>
              {accom}
            </option>
          ))}
        </select>
      </div>

      {/* trip type */}
      <fieldset className="flex flex-col gap-2">
        <legend className="create-plan-form-label mb-2">trip type</legend>
        <div className="flex items-start justify-start flex-wrap gap-2">
          {createPlanOptions.tripTypes.map((tripType) => (
            <div className="flex  gap-2" key={tripType}>
              <input
                type="checkbox"
                className="appearance-none peer"
                name="tripType[]"
                id={tripType}
                value={tripType}
              />
              <label htmlFor={tripType} className="option-chip">
                {tripType}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {/* transportation preference */}
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="create-plan-form-label">
          transportation preference
        </label>
        <div className="flex flex-wrap gap-2">
          {createPlanOptions.preferredTransportation.map(
            (transportationType) => (
              <div className="flex flex-col gap-2" key={transportationType}>
                <input
                  type="checkbox"
                  className="hidden peer"
                  name="transportationType[]"
                  id={transportationType}
                  value={transportationType}
                />
                <label htmlFor={transportationType} className="option-chip">
                  {transportationType}
                </label>
              </div>
            )
          )}
        </div>
      </div>

      <button
        className="btn bg-gray-300 text-gray-800 disabled:bg-gray-800 capitalize font-bold hover:bg-gray-200 cursor-pointer disabled:cursor-not-allowed"
        type="submit"
        disabled={planGenerationStatus}
      >
        generate plan
      </button>
    </Form>
  );
};

export default PlanCreationForm;
