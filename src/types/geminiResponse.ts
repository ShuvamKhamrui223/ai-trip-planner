export type TripDetails = {
    location: string;
    budget: string;
    number_of_travelers: number;
    transportation_preference: string[];
    number_of_travel_days: number;
    trip_preference: string;
    accommodation_preference: string;
};

export type GeoCoordinates = {
    latitude: number;
    longitude: number;
};

export type AccommodationOption = {
    name: string;
    geo_coordinates: GeoCoordinates;
    address: string;
    price: string;
    image_url: string;
    rating: number;
    amenities: string[];
};

// export type Accommodation = {
//     options: AccommodationOption[];
//     selected_hotel: string;
// };

export type RestaurantSuggestion = {
    name: string;
    cuisine: string;
    price_range: string;
    description: string;
    address: string;
    image_url: string;
};


export type Activity = {
    place_name: string;
    place_details: string;
    estimated_time: number;
    why_special: string;
    image_url: string;
    price: string;
    transportation: string;
    geo_coordinates: GeoCoordinates;
};

export type Itinerary = {
    day: number;
    activities: Activity[];
};

export type Transportation = {
    details: string;
    approximate_cost: string;
};

export type CostBreakdown = {
    accommodation: string;
    activities: string;
    food: string;
    transportation: string;
};

export type GeminiResponse = {
    trip_details: TripDetails;
    accommodation_options: AccommodationOption[];
    restaurant_suggestions: RestaurantSuggestion[];
    daily_itinerary: Itinerary[];
    transportation: Transportation;
    cost_breakdown: CostBreakdown;
    notes: string;
};
