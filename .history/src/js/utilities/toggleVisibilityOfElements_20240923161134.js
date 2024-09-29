// Toggle visibility of certain elements based on auth state

export function toggleLogoutButton(isAuthenticated) {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.style.display = isAuthenticated ? "block" : "none";  
  }
}


export function toggleCreatePostButton(isAuthenticated) {
  const createPostButton = document.getElementById("createPostButton");

  if (createPostButton) {
    createPostButton.style.display = isAuthenticated ? "inline-block" : "none";  
  }
}


export function toggleVisibilityOfElements(isAuthenticated) {
  toggleLogoutButton(isAuthenticated);
  toggleCreatePostButton(isAuthenticated);
}
