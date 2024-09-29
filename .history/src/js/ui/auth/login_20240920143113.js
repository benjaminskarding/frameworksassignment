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
        const name = result.data.name;
        console.log("Access Token:", accessToken);
        console.log("Name:", name);

        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("userame", name);

        let apiKey = localStorage.getItem(`${userData.email}_userApiKey`);
        if (apiKey) {
            console.log("Using stored API Key:", apiKey);
        } else {
            apiKey = await getKey(accessToken);
            localStorage.setItem(`${userData.email}_userApiKey`, apiKey);
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
