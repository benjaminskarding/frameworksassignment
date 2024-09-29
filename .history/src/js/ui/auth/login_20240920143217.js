import { getKey } from "../../api/auth/key";
import { login } from "../../api/auth/login";

export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const result = await login(userData); // API call to log in
        console.log("Login Result (Full):", result); // Log the full login response for debugging

        const accessToken = result.data.accessToken;
        console.log("Access Token:", accessToken);

        const name = result.data.name; // Check if "name" exists in result.data
        console.log("Retrieved Name:", name);

        // Store the authToken and user's "name" in localStorage
        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("name", name); // Store the "name" as the identifier for later

        // Fetch and store the API key
        let apiKey = localStorage.getItem(`${userData.email}_userApiKey`);
        if (apiKey) {
            console.log("Using stored API Key:", apiKey);
        } else {
            apiKey = await getKey(accessToken); // Get new API Key if not found
            localStorage.setItem(`${userData.email}_userApiKey`, apiKey);
            console.log("New API Key generated:", apiKey);
        }

        alert("Logged in and API key created! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "/"; // Redirect after successful login
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }
}