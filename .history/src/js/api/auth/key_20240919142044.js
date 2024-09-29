import { API_AUTH_KEY } from "../constants";

export async function getKey(accessToken) {
  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: headers(accessToken), // Pass the user's accessToken in the header
    });

    if (!response.ok) {
      throw new Error(`Failed to generate API key. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data.key; // Return the user's API key
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
}
