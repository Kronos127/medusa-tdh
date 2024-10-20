export const adminFetcher = async (url: string, options: RequestInit = {}) => {
    const response = await fetch(`${process.env.MEDUSA_BACKEND_URL}${url}`, {
        ...options,
        credentials: "include",
    })

    if (!response.ok) {
        throw new Error("Failed to fetch data from the admin API")
    }

    return response.json()
};
