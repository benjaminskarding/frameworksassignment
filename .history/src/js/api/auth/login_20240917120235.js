import { API_AUTH_LOGIN } from "../constants";

export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer $API_KEY`,
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Login failed:");
        } 

        return data;
    } catch (error) {
        console.error('Error Details:', error);
        throw new Error (error.message || "Something went wrong during login");
    }
}


window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");
  
    // Try to get the logout button
    const logoutBtn = document.getElementById("logoutBtn");
    
    if (logoutBtn) {
      console.log("Logout button found, adding event listener");
  
      logoutBtn.addEventListener("click", () => {
        console.log("Logout button clicked");
        logout();  // Call the logout function
      });
    } else {
      console.log("Logout button not found");
    }
  
    function logout() {
      console.log("Executing logout function");
  
      // Clear the token from localStorage
      localStorage.removeItem("authToken");
  
      console.log("Token removed, redirecting to login page");
  
      // Redirect to the login page
      window.location.href = "/auth/login/";
    }
  });