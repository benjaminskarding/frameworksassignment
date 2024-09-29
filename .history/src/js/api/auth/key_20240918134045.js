import { API_AUTH_KEY } from "../constants";

export async function getKey(authToken) {
  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "failed to generate API key");
    }
    return data.data.key; 
  } catch (error) {
    console.error("Error creating API key", error);
    throw error;
  }
}