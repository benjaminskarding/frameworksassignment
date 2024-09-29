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

        alert("Logged in! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "/post/";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }

}
