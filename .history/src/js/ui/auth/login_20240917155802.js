import { login } from "../../api/auth/login";
import { getKey } from "../../api/auth/key";  // Import getKey function to retrieve user-specific API key

export async function onLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    console.log("Attempting to login with userData:", userData);
    
    // Authenticate the user and get the auth token
    const result = await login(userData);

    console.log("Login successful, received token:", result.token);

    // Store the auth token in localStorage
    localStorage.setItem("authToken", result.token);

    // Fetch the user-specific API key using the auth token
    console.log("Fetching user-specific API key...");
    const apiKey = await getKey();  // Retrieve the unique API key for the logged-in user

    console.log("API Key received:", apiKey);

    // Store the API key in localStorage for future requests
    localStorage.setItem("userApiKey", apiKey);

    alert("Logged in! Taking you to the feed page...");

    // Redirect to the feed page
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed: " + error.message);
  }
}