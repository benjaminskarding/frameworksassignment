export function toggleLogoutButton() {
  const token = localStorage.getItem("authToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    if (token) {
      // User is logged in, show the logout button
      logoutBtn.style.display = "block";  // Only show the button if user is logged in
      console.log("User is logged in. Showing logout button.");
    }
  } 
}