import { API_HOST, API_KEY } from "../Config";
export const Ajax = async (
  url,
  parameters = null,
  method = "GET",
  headers = null
) => {
  const params = parameters
    ? Object.entries(parameters)
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    : "";

  try {
    const response = await fetch(`${url}?${params}`, {
      method,
      headers: headers || {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`${response.statusText} (${response.status})`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
