import { authGuard } from "./authGuard";

export function toggleLogoutButton() {
  const token = localStorage.getItem("accessToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    if (token) {
      logoutBtn.style.display = "block";  
    }
  } 
}

function showCreatePostButton() {
  const createPostButton = document.getElementById("createPostButton");

  if (authGuard()) {
      // If the user is logged in, show the button
      createPostButton.style.display = "inline-block";
  } else {
      // If the user is not logged in, hide the button (optional since it's hidden by default)
      createPostButton.style.display = "none";
  }
}

showCreatePostButton();