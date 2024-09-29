import { API_AUTH_KEY } from "../constants";

export async function getKey(accessToken) {
  try {
    // Log the token for debugging
    console.log("Access Token:", accessToken);

    // Make a simple POST request using the user's Bearer token
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`, // Pass the user's auth token
      },
    });

    // Check the response status and log it
    if (!response.ok) {
      throw new Error(`Failed to generate API key. Status: ${response.status}`);
    }

    // Await the JSON response
    const data = await response.json();
    console.log("API Key Response Data:", data);

    // Return the user's API key
    return data.data.key;
  } catch (error) {
    console.error("Error creating API key:", error);
    throw error;
  }
}
