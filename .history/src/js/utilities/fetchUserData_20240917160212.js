async function fetchUserProfile(token, apiKey) {
    try {
      console.log("Fetching user profile with token and API key...");
  
      // Set up headers with auth token and API key
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);
      headers.append("X-Noroff-API-Key", apiKey);
  
      // Make a GET request to the profile endpoint
      const response = await fetch("/api/social/profiles/me", {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch user profile.");
      }
  
      // Log user profile information
      console.log("User Profile Information:", data);
  
      // Optionally, store user data in localStorage for quick access
      localStorage.setItem("userProfile", JSON.stringify(data));
  
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }
  