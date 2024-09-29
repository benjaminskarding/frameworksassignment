export function authGuard() {
  const token = localStorage.getItem("authToken");  // Correctly get the token from localStorage

  if (!token) {
    alert("You must be logged in to view this page.");
    window.location.href = "/auth/login/";  // Redirect to login page if no token
  }
}