import { login as apiLogin } from "../../api/auth/login";
import { getKey } from "../../api/auth/key"; // Fetch the API key for the user

export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        // Authenticate the user and get the token
        const result = await apiLogin(userData);

        // Store the auth token and profile info in localStorage
        localStorage.setItem("authToken", result.accessToken);
        localStorage.setItem("userProfile", JSON.stringify(result.data)); // Store user profile data as well

        // Fetch and store the user-specific API key using the auth token
        const apiKey = await getKey();
        localStorage.setItem("userApiKey", apiKey);

        // Display a message and redirect
        alert("Logged in! Taking you to the feed page...");

        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
        alert("Login failed. Please try again.");
    }
}
