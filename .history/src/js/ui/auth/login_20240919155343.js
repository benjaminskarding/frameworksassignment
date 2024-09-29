import { getKey } from "../../api/auth/key";
import { login } from "../../api/auth/login";

export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData (event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const result = await login (userData); 

        console.log("Login Result:", result);

        const accessToken = result.data.accessToken;

        console.log("Access Token:", accessToken);

        localStorage.setItem("authToken", result.accessToken);

        let apiKey = localStorage.getItem("userApiKey");
        if (apiKey) {
            console.log("Using stored API Key:", apiKey);
        } else {
            // Step 4: Generate a new API key if not stored
            apiKey = await getKey(accessToken);
            localStorage.setItem("userApiKey", apiKey);
            console.log("New API Key generated:", apiKey);
        }

        alert("Logged in and API key created! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }

}
