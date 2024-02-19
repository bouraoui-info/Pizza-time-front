import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMapPin } from "react-icons/hi2";

const Location = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<
    Array<{ place_name: string }>
  >([]);

  const [isEditing, setIsEditing] = useState<boolean>(true); // Changed to true

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setQuery(event.target.value);
      const endpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${event.target.value}.json?proximity=-33.9249,18.4241&country=ZA&access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}&autocomplete=true`;

      const response = await fetch(endpoint);
      const results = await response.json();
      setSuggestions(results?.features);
    } catch (error: any) {
      console.log("Error fetching data: " + error.message);
    }
  };

  function handleSelectAddress(place_name: string): void {
    // Your implementation for selecting an address
  }

  return (
    <div className="mx-8 md:mx-12 mt-12">
      <form className="max-w-6xl mx-auto">
        <div className="relative">
          {isEditing && (
            <>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {/* Placeholder icon */}
                <span aria-hidden="true" className="w-5 h-5 text-gray-700">
                  <HiMapPin />
                </span>
              </div>
              {/* Input field with placeholder */}
              <input
                type="search"
                className="block w-96 p-4 pl-10 pr-4 text-sm text-gray-900 rounded-lg bg-gray-200 outline-none"
                placeholder="Saisissez votre adresse, code postal ou ville"
                value={query}
                onChange={handleChange}
              />
            </>
          )}

          {suggestions?.length > 0 && (
            <div className="absolute bg-gray-100 w-full shadow-sm">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between w-full p-1 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSelectAddress(suggestion.place_name)}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Location;
