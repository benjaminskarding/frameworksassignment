import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";

toggleLogoutButton();
authGuard();


// Fetch and display the user's profile information
async function displayUserInfo() {
    const token = localStorage.getItem("authToken");
    const apiKey = localStorage.getItem("userApiKey");
  
    if (!token || !apiKey) {
      alert("You must be logged in to view this page.");
      window.location.href = "/auth/login";  // Redirect to login if not logged in
      return;
    }
  
    const headers = new Headers();
    headers.append("X-Noroff-API-Key", apiKey);  // Attach user-specific API key
    headers.append("Authorization", `Bearer ${token}`);  // Attach auth token
  
    try {
      // Fetch the logged-in user's profile information
      const response = await fetch("/api/social/profiles/me", {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch profile.");
      }
  
      // Display the user's name or email in the <h3 id="userNameDisplay">
      const userNameDisplay = document.getElementById("userNameDisplay");
      userNameDisplay.textContent = data.name || data.email || "Unknown User";  // Display the name or email
  
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Failed to load profile information.");
    }
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", displayUserInfo);
  