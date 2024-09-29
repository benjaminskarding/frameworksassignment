import { API_AUTH_KEY } from "../constants";

export async function getKey(accessToken) {
  try {
    // Log the token to ensure it's correctly formatted
    console.log("Access Token in getKey:", accessToken);

    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`, // Ensure the token is passed correctly
      },
    });

    console.log("Raw Response Status:", response.status); // Log the response status
    console.log("Raw Response:", response); // Log the full response

    const data = await response.json();
    console.log("API Key Response Data:", data); // Log API key response data

    if (!response.ok) {
      console.error("Error response:", data); // Log error response if any
      throw new Error(data.message || "Failed to generate API key");
    }

    return data.data.key; // Return the API key
  } catch (error) {
    console.error("Error creating API key", error);
    throw error;
  }
}

