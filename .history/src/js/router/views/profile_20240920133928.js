import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();

export async function loadProfile() {
  try {
    const accessToken = localStorage.getItem("authToken");
    const name = localStorage.getItem("name"); // Assuming 'name' is stored on login

    const profileData = await readProfile(name, accessToken);

    // Display profile data in HTML
    document.getElementById("userNameDisplay").innerText = profileData.name;

    // Optional: Handle avatar or other profile info
    if (profileData.avatar) {
      // Assuming you have an img element to display the avatar
      document.getElementById("userAvatar").src = profileData.avatar.url;
    }

  } catch (error) {
    console.error("Error loading profile:", error);
    document.getElementById("userNameDisplay").innerText = "Error loading profile";
  }
}

loadProfile();
