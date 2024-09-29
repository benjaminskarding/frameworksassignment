export function toggleLogoutButton() {
  const token = localStorage.getItem("authToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    if (token) {
      // User is logged in, show the logout button
      logoutBtn.style.display = "block";  // Only show the button if user is logged in
      console.log("User is logged in. Showing logout button.");
    } else {
      // No token, button remains hidden
      console.log("User is not logged in. Keeping logout button hidden.");
    }
  } else {
    console.error("Logout button not found in the DOM.");
  }
}