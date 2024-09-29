import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();


async function loadUserProfile() {
    const profile = await readProfile(); 
  
    if (profile) {
      document.getElementById('userNameDisplay').textContent = profile.name;
      document.getElementById('avatar').src = profile.avatar.url;
      document.getElementById('avatar').alt = profile.avatar.alt;
      document.getElementById('profileEmail').textContent = profile.email;
    } else {
      console.log("Profile data not available");
    }
  }

loadUserProfile();