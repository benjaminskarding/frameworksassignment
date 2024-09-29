import { authGuard } from "../../utilities/authGuard";
import { readProfile } from "../../api/profile/read";

authGuard();


document.addEventListener("DOMContentLoaded", async () => {
    const name = localStorage.getItem("name"); // Ensure 'name' is stored in localStorage
    if (!name) {
      console.error("No name found in localStorage");
      return;
    }
  
    try {
      const profileData = await readProfile(name); // Call the function with 'name'
      console.log("Profile Data:", profileData); // Display for debugging
  
      // Update the DOM with retrieved profile data
      document.getElementById("userNameDisplay").innerText = profileData.name || "No Name";
      // Add more code here to display other profile details
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  });

