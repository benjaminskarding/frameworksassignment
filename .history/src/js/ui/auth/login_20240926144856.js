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
        const result = await login(userData); 

        const accessToken = result.data.accessToken;

        const name = result.data.name; 

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("name", name); 


        let apiKey = localStorage.getItem(`${userData.email}_userApiKey`);
        if (!apiKey) {
            apiKey = await getKey(accessToken); 
            localStorage.setItem(`${userData.email}_userApiKey`, apiKey);
        }
        console.log("User's API Key:", apiKey);
        console.log("bearer": accessToken)
        alert("Logged in and API key created! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "/"; 
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }
}