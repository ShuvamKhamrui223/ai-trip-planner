/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GEMINI_API_KEY: string,

    readonly VITE_FIREBASE_API_KEY: string,
    readonly VITE_PROJECT_ID: string,
    readonly VITE_AUTH_DOMAIN: string,
    readonly VITE_STORAGE_BUCKET: string,
    readonly VITE_MESSAGING_SENDER_ID: string,
    readonly VITE_APP_ID: string,

    readonly VITE_GOOGLE_PLACE_API_KEY: string

    readonly VITE_OPEN_WEATHER_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}