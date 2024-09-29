import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();

import { readProfile } from "../../api/profile/read";

export async function loadProfile() {
  try {
    // Get the access token from localStorage
    const accessToken = localStorage.getItem("authToken"); 
    if (!accessToken) {
      throw new Error("Access token not found. Please log in again.");
    }

    // Fetch the profile data using the access token
    const profileData = await readProfile("me", accessToken); // Using 'me' to fetch the logged-in user's profile

    // Display profile data in HTML
    document.getElementById("userNameDisplay").innerText = profileData.name;

    // Optional: Handle avatar or other profile info
    if (profileData.avatar) {
      document.getElementById("userAvatar").src = profileData.avatar.url;
    }

  } catch (error) {
    console.error("Error loading profile:", error);
    document.getElementById("userNameDisplay").innerText = "Error loading profile";
  }
}


loadProfile();
