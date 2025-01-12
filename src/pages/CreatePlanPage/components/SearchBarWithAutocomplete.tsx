import { ChangeEvent, useState } from "react";
import { useDebouncedValue } from "../../../hooks/useDebouncedValue";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { ISearched } from "../../../types/CountryApiTypes";
import { toast } from "react-toastify";
const SearchBarWithAutocomplete = () => {
  const [searchQury, setSearchQuery] = useState<string>("");
  
  const debouncedValue = useDebouncedValue(searchQury.toLowerCase(), 1000);

  const {
    isLoading,
    data: suggestions,
    error,
  } = useQuery({
    queryKey: ["search-suggestions", debouncedValue],
    queryFn: async (): Promise<ISearched[] | undefined> => {
      try {
        const apikey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
        if (!apikey) {
          throw new Error("api key is missing");
        }
        if (debouncedValue) {
          const response = await axios.get(
            `http://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
              debouncedValue
            )}&limit=5&appid=${apikey}`
          );
          if (!response.status) throw new Error("nothing found");

          return response.data;
        }
      } catch (error) {
        const axiosError = error as AxiosError;
        toast.error(axiosError?.message);
      }
    },

    enabled: !!debouncedValue && debouncedValue?.length > 2,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <div>
      <input
        type="text"
        name="destination"
        id="destination"
        required={true}
        value={searchQury}
        onChange={handleInputChange}
        placeholder="Ex. London"
        className="select-menu-style w-full"
        list="destinationSuggestion"
      />

      {/* suggestions */}
      <ul className="shadow-md bg-gray-900/40" role="listbox">
        {isLoading && "loading suggestions"}
        {error && "error loading suggestions"}
        {!error && !isLoading && suggestions?.length === 0 && "no result found"}
        {suggestions &&
          searchQury.length > 0 &&
          suggestions?.length > 0 &&
          suggestions?.map((sug: ISearched, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-700 cursor-pointer space-x-2"
              onClick={() =>
                setSearchQuery(`${sug.name} ${sug.state} ${sug.country}`)
              }
            >
              <strong className="text-base text-gray-400">{sug.name}</strong>

              <span className="text-sm">{sug.state}</span>
              <span className="text-sm">{sug.country}</span>
            </li>
          ))}
        {/* show suggestions only when countries are available */}
      </ul>
    </div>
  );
};

export default SearchBarWithAutocomplete;
