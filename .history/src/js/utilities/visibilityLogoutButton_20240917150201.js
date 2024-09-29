export function toggleLogoutButton() {
    const token = localStorage.getItem("authToken");
    const logoutBtn = document.getElementById("logoutBtn");
  
    if (logoutBtn) {
      if (token) {
        // User is logged in, show the logout button
        logoutBtn.style.display = "block";
        console.log("User is logged in. Showing logout button.");
      } else {
        // User is not logged in, hide the logout button
        logoutBtn.style.display = "none";
        console.log("User is not logged in. Hiding logout button.");
      }
    } else {
      console.error("Logout button not found in the DOM.");
    }
  }