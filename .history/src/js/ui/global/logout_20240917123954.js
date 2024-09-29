import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
    console.log("Setting up logout listener...");
  
    // Get the logout button element
    const logoutBtn = document.getElementById("logoutBtn");
  
    // Check if we are on the root page ("/")
    const currentPath = window.location.pathname;
  
    if (currentPath === "/") {
      if (logoutBtn) {
        console.log("On root page. Logout button visible and event listener added.");
        logoutBtn.style.display = "block"; // Make the button visible
        logoutBtn.addEventListener("click", onLogout);
      } else {
        console.log("Logout button not found.");
      }
    } else {
      // If not on the root page, hide the logout button
      if (logoutBtn) {
        console.log("Not on root page. Hiding logout button.");
        logoutBtn.style.display = "none"; // Hide the button on other pages
      }
    }
  }
