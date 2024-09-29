import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
    console.log("Setting up logout listener...");
  
    const logoutBtn = document.getElementById("logoutBtn");
  
    if (logoutBtn) {
      console.log("Logout button found, adding event listener");
      logoutBtn.addEventListener("click", onLogout);
    } else {
      console.log("Logout button not found in the DOM. Make sure the button is present on all pages.");
    }
  }
