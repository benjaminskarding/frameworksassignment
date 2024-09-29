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
      // Fetch the logged-in user's profile information with optional query parameters
      const response = await fetch("/api/social/profiles/me?_following=true&_followers=true&_posts=true", {
        method: "GET",
        headers: headers,
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch profile.");
      }
  
      // Update the DOM with the user's profile information
      document.getElementById("userNameDisplay").textContent = data.name || data.email || "Unknown User";
      
      // If the user has a bio, display it
      if (data.bio) {
        const bioElement = document.createElement("p");
        bioElement.textContent = `Bio: ${data.bio}`;
        document.querySelector(".pageContainer").appendChild(bioElement);
      }
  
      // Display avatar if available
      if (data.avatar && data.avatar.url) {
        const avatarElement = document.createElement("img");
        avatarElement.src = data.avatar.url;
        avatarElement.alt = data.avatar.alt || "User Avatar";
        document.querySelector(".pageContainer").appendChild(avatarElement);
      }
  
      // Display posts count if available
      if (data._count && data._count.posts !== undefined) {
        const postCountElement = document.createElement("p");
        postCountElement.textContent = `Posts: ${data._count.posts}`;
        document.querySelector(".pageContainer").appendChild(postCountElement);
      }
  
    } catch (error) {
      console.error("Error fetching user profile:", error);
      alert("Failed to load profile information.");
    }
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", displayUserInfo);
  