export function toggleLogoutButton() {
  const token = localStorage.getItem("authToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    if (token) {
      logoutBtn.style.display = "block";  
    }
  } 
}