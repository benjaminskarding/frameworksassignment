import { authGuard } from "../../utilities/authGuard";

authGuard();


// Fetch and display the user's profile information
async function displayUserInfo() {
    const token = localStorage.getItem("authToken");
    const apiKey = localStorage.getItem("userApiKey");
  
    console.log("Token:", token);
    console.log("API Key:", apiKey);
  
    if (!token || !apiKey) {
      alert("You must be logged in to view this page.");
      console.log("No auth token or API key found.");
      window.location.href = "/auth/login";  // Redirect to login if not logged in
      return;
    }
  
    const headers = new Headers();
    headers.append("X-Noroff-API-Key", apiKey);  // Attach user-specific API key
    headers.append("Authorization", `Bearer ${token}`);  // Attach auth token
  
    console.log("Headers set:", headers);
  
    try {
      // Fetch the logged-in user's profile information
      const response = await fetch("/api/social/profiles/me?_following=true&_followers=true&_posts=true", {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
      console.log("Profile data received:", data);
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch profile.");
      }
  
      // Update the DOM with the user's profile information
      document.getElementById("userNameDisplay").textContent = data.name || data.email || "Unknown User";
      console.log("Updated userNameDisplay to:", document.getElementById("userNameDisplay").textContent);
      
      // Other profile info (bio, avatar, etc.)...
  
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Failed to load profile information.");
    }
  }
  
  