import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();


async function loadUserProfile() {
  const username = 'exampleUser'; // replace with dynamic username if needed
  
  console.log("Loading profile for username:", username); // Log username
  
  const profile = await readProfile(username);

  if (profile) {
    console.log("Profile loaded successfully:", profile); // Log loaded profile

    document.getElementById('userNameDisplay').textContent = profile.name;
    document.getElementById('avatar').src = profile.avatar.url;
    document.getElementById('avatar').alt = profile.avatar.alt;
    document.getElementById('profileEmail').textContent = profile.email;
  } else {
    console.log("Profile data not available");
  }
}


loadUserProfile();