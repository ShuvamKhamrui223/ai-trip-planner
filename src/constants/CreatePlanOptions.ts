export const createPlanOptions = {
    tripWith: [
        { tripWithName: "solo", numberOfPerson: 1 },
        { tripWithName: "couple", numberOfPerson: 2 },
        { tripWithName: "mini family upto 4", numberOfPerson: 4 },
        { tripWithName: "big family 8-10", numberOfPerson: 8 },
        { tripWithName: "large family 10+", numberOfPerson: 10 },
        { tripWithName: "friends", numberOfPerson: 4 },
    ],
    tripBudgetTypes: [
        { tripBudgetType: "cheap", subText: "minimal cost" },
        { tripBudgetType: "moderate", subText: "keep the cost average" },
        { tripBudgetType: "luxery", subText: "not worried about cost" }
    ],
    accomodations: ["hotels", "hostels", "resorts", "vacation rentals", "camping"],
    tripTypes: ["adventure", "relaxation", "cultural exploration", "nature and wildlife", "romantic gateway", "family vacation"],
    preferredActivities: ["sightseeing", "hiking", "water sports", "food and dinning", "shopping", "nightlife", "hisorical tour"],
    preferredTransportation: ["public transport", "rental cars", "walking", "biking"],
    interests: ["art and museums", "beach and relaxation", "mountain and trekking", "local festival and events", "wildlife safari", "just for fun", "tuorist focused"],
    dietaryPreference: ["vegetarian", "vegan", "pescatarian", "flexitarian"],
    healthPreferce: ["gluten-free", "dairy-free/lacotose-free", "sugar-free", "nut-free", 'soy-free', "high-protein", "low carb"],
    otherPreferences: ["alcohol-free", "spicy food only", "mild spicy", "non spicy", "FODMAP food only"]
}