export function onLogout() {
    console.log("Logging out...");

  // Clear the auth token
  localStorage.removeItem("accessToken");

  // Redirect to the login page
  window.location.href = "/auth/";
}
