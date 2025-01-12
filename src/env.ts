export const env = {
    gemini: {
        api_key: String(import.meta.env.VITE_GEMINI_API_KEY)
    },
    fireBase: {
        api_key: String(import.meta.env.VITE_OPEN_WEATHER_API_KEY)
    }
}