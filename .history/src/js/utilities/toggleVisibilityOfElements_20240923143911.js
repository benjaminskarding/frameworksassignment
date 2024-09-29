// Toggle visibility of the logout button based on the auth state
export function toggleLogoutButton(isAuthenticated) {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.style.display = isAuthenticated ? "block" : "none";  // Show or hide based on authentication state
  }
}

// Toggle visibility of the create post button based on the auth state
export function toggleCreatePostButton(isAuthenticated) {
  const createPostButton = document.getElementById("createPostButton");

  if (createPostButton) {
    createPostButton.style.display = isAuthenticated ? "inline-block" : "none";  // Show or hide based on authentication state
  }
}

// Function to toggle visibility of multiple elements
export function toggleVisibilityOfElements(isAuthenticated) {
  toggleLogoutButton(isAuthenticated);
  toggleCreatePostButton(isAuthenticated);
}
