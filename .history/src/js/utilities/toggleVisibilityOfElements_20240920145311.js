export function toggleLogoutButton() {
  const token = localStorage.getItem("accessToken");
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    if (token) {
      logoutBtn.style.display = "block";  
    }
  } 
}