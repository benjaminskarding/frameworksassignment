import { API_AUTH_KEY } from "../constants";
import { headers } from "../headers";

export async function getKey(accessToken) {
  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: headers(accessToken),
    });


    if (!response.ok) {
      throw new Error(`Failed to generate API key. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Key Response Data:", data);


    return data.data.key;
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
}
