import { API_AUTH_KEY } from "../constants";

export async function getKey(accessToken) {
  try {
    console.log("Access Token in getKey:", accessToken);

    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`, // Correctly using access token here
      },
    });

    console.log("Raw Response Status:", response.status); // Log status for debugging
    console.log("Raw Response:", response);

    const data = await response.json();
    console.log("API Key Response Data:", data);

    if (!response.ok) {
      console.error("Error response:", data); // Log server error if any
      throw new Error(data.message || "Failed to generate API key");
    }

    return data.data.key; // Return the API key if everything is good
  } catch (error) {
    console.error("Error creating API key", error);
    throw error;
  }
}
