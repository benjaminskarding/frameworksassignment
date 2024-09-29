import { authGuard } from "./authGuard";

// Toggle visibility of the logout button
export function toggleLogoutButton() {
  const token = localStorage.getItem("accessToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.style.display = token ? "block" : "none";  // Show or hide based on token presence
  }
}

// Toggle visibility of the create post button
export function toggleCreatePostButton() {
  const createPostButton = document.getElementById("createPostButton");

  if (createPostButton) {
    createPostButton.style.display = authGuard() ? "inline-block" : "none";  // Show or hide based on authGuard result
  }
}

// Function to toggle visibility of multiple elements (add more as needed)
export function toggleVisibilityOfElements() {
  toggleLogoutButton();
  toggleCreatePostButton();
}

// Call this function to initialize visibility when the page loads
toggleVisibilityOfElements();
