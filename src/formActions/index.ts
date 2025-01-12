import { ActionFunctionArgs } from "react-router-dom"

export const getUserPreference = async ({ request }: ActionFunctionArgs) => {
    const url = new URL(request.url)
    const queries = Object.fromEntries(url.searchParams.entries())

    return queries
}