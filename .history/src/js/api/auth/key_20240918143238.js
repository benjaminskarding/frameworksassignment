import { API_AUTH_KEY } from "../constants";

export async function getKey(accessToken) {
  try {
    console.log("Access Token in getkey:", accessToken);

    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    console.log("Raw Response:", response);

    const data = await response.json();
    console.log("API Key Response:", data);
    if (!response.ok) {
      throw new Error(data.message || "Failed to generate API key");
    }
    return data.data.key; 
  } catch (error) {
    console.error("Error creating API key", error);
    throw error;
  }
}