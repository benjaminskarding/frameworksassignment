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


export function togglePostActionButtons(isPostAuthor) {
  const updatePostButton = document.getElementById("updatePostButton");
  const deletePostButton = document.getElementById("deletePostButton");

  if (updatePostButton && deletePostButton) {
    updatePostButton.style.display = isPostAuthor ? "block" : "none";
    deletePostButton.style.display = isPostAuthor ? "block" : "none";
  }
}

export function toggleVisibilityOfElements(isAuthenticated, isPostAuthor) {
  toggleLogoutButton(isAuthenticated);
  toggleCreatePostButton(isAuthenticated);
  togglePostActionButtons(isPostAuthor);
}
