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
        // Step 1: Login to get access token
        const result = await login(userData);
        console.log("Login Result:", result);
        
        const accessToken = result.data.accessToken;
        console.log("Access Token:", accessToken); // Ensure access token is received
        
        // Step 2: Store the access token in localStorage
        localStorage.setItem("accessToken", accessToken);

        // Step 3: Generate the user-specific API key
        const apiKey = await getKey(accessToken); // Using the token to get API key
        console.log("Generated API Key:", apiKey); // Check the API key
        
        // Step 4: Store the API key in localStorage
        localStorage.setItem("userApiKey", apiKey);

        alert("Logged in and API key created! Taking you to the feed page...");

        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }
}
