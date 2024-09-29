export function onLogout() {
    console.log("Logging out...");

  localStorage.removeItem("authToken");

  window.location.href = "/";
}
