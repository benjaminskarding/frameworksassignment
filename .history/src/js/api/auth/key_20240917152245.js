export async function getKey(name) {
    const token = localStorage.getItem("authToken");  // Get the user's token from localStorage

  if (!token) {
    throw new Error("No authentication token found. Please log in first.");
  }

  try {
    // Fetch API key by passing the user's token in the Authorization header
    const response = await fetch(API_AUTH_KEY, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  // Pass the user's access token
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to retrieve API key.");
    }

    // Save the API key in localStorage (for future requests)
    localStorage.setItem("userApiKey", data.apiKey);

    // Return the API key
    return data.apiKey;
  } catch (error) {
    console.error("Error fetching API key:", error);
    throw new Error(error.message || "Something went wrong while fetching the API key.");
  }
}
