import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();


async function loadUserProfile() {
    console.log("Loading user profile...");
    
    const profile = await readProfile(); // Fetch profile based on authToken
  
    if (profile) {
      console.log("Profile loaded successfully:", profile);
  
      document.getElementById('userNameDisplay').textContent = profile.name;
      document.getElementById('avatar').src = profile.avatar.url;
      document.getElementById('avatar').alt = profile.avatar.alt;
      document.getElementById('profileEmail').textContent = profile.email;
    } else {
      console.log("Profile data not available");
    }
  }


loadUserProfile();