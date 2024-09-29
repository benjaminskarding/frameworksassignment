export function authGuard() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    // If there's no token, prevent access and redirect to the login page
    alert("You must be logged in to view this page.");
    window.location.href = "/auth/";
    return false; // Stop further execution
  }

  return true; // User is authenticated
}