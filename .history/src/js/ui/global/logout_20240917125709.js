import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
    console.log("Setting up logout listener...");
  
    // Get the logout button element
    const logoutBtn = document.getElementById("logoutBtn");
  
    if (logoutBtn) {
      console.log("Logout button found. Adding event listener.");
      logoutBtn.addEventListener("click", onLogout);  // Attach the logout functionality
    } else {
      console.log("Logout button not found.");
    }
  }
