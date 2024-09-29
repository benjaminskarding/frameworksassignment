import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

export async function getKey(accessToken) {
  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: headers(accessToken), // Pass the accessToken for authorization
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Failed to generate API key: ${response.status}`);
    }

    return data.data.key;
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
}
