import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
    console.log("Setting up logout listener...");
  
    // Try to get the logout button immediately and add the event listener
    const logoutBtn = document.getElementById("logoutBtn");
  
    if (logoutBtn) {
      console.log("Logout button found, adding event listener");
      logoutBtn.addEventListener("click", onLogout);
    } else {
      console.log("Logout button not found in the DOM. Reattaching listener...");
  
      // Use a MutationObserver to detect when the DOM changes and the button is added
      const observer = new MutationObserver(() => {
        const logoutBtn = document.getElementById("logoutBtn");
        if (logoutBtn) {
          console.log("Logout button found after mutation, adding event listener");
          logoutBtn.addEventListener("click", onLogout);
          observer.disconnect(); // Stop observing once we have found and set the listener
        }
      });
  
      // Observe the entire body for changes (in case routing changes the DOM)
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
