import { API_AUTH_KEY } from "../constants";  

export async function getKey() {
  const token = localStorage.getItem("authToken"); 
  if (!token) {
    throw new Error("No authentication token found. Please log in first.");
  }

  try {
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to retrieve API key.");
    }

    // Return the API key
    return data.apiKey;
  } catch (error) {
    console.error("Error fetching API key:", error);
    throw new Error(error.message || "Something went wrong while fetching the API key.");
  }
}
